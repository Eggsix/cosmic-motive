import {connect} from "react-redux";
import SocialLinks from "../SocialLinks/SocialLinks";
import {Formik} from 'formik';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';
import SEO from "react-seo-component";
import React, {useState} from "react";

const mapStateToProps = (state) => {
    return {
        contactEmail: state.AppReducer.contactEmail
    }
}

const Contact = (props) => {
    const [btnLoading, setBtnLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState(false);
    const FormSchema = Yup.object().shape({
        name: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Please enter your name'),
        email: Yup.string().email('Please enter valid email address').required('Please enter email address'),
    });

    return (<section className="contact" data-scroll-section>
        <SEO
            title="Contact"
            titleSeparator={`|`}
            titleTemplate="Cosmic Motive"
            description="Cosmic Motive contact page"
        />
        <Formik
            initialValues={{name: '', company: '', phone: '', email: '', message: ''}}
            validationSchema={FormSchema}
            onSubmit={(values, {setSubmitting, resetForm}) => {
                setBtnLoading(true);
                emailjs.send('service_q7dq286', 'template_f60pj6j', values, 'lLeLrRbW_2YKIRBE-')
                    .then(function (response) {
                        setBtnLoading(false);
                        setSuccessMessage(true);
                        
                        setTimeout(() => {
                            setSuccessMessage(false);
                        }, 3000)
                        console.log('SUCCESS!', response.status, response.text);
                    }, function (err) {
                        console.log('FAILED...', err);
                    })
                    .then(() => resetForm())

            }}
        >
            {({
                  values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting, /* and other goodies */
              }) => (
                <form onSubmit={handleSubmit} className="contact__container contact__container--m-auto">
                    <h1 className="contact__title">Contact</h1>
                    <p className="contact__subtitle">Email us at <a
                        href={`mailto:${props.contactEmail}`}>{props.contactEmail}</a> or use the form below.
                        <br/> We look forward to hearing from you!</p>
                    <div className="contact__form">
                        <div className="contact__group">
                            <div className="contact__row">
                                <label className={errors.name && touched.name ? 'error' : ''}
                                       htmlFor="name">{errors.name && touched.name ? errors.name : 'Name'}</label>
                                <input className={errors.name && touched.name ? 'error' : ''} value={values.name}
                                       onChange={handleChange} type="text" name="name" placeholder="Your name"
                                       id="name"/>
                            </div>
                            <div className="contact__row">
                                <label htmlFor="company">Company</label>
                                <input value={values.company} onChange={handleChange} type="text" name="company"
                                       placeholder="Leave empty or enter project name"
                                       id="company"/>
                            </div>
                            <div className="contact__row">
                                <label htmlFor="phone">Telephone</label>
                                <input value={values.phone} onChange={handleChange} type="text" name="phone"
                                       placeholder="Please, enter your phone number" id="phone"/>
                            </div>
                            <div className="contact__row">
                                <label className={errors.email && touched.email ? 'error' : ''}
                                       htmlFor="email">{errors.email && touched.email ? errors.email : 'Email'}</label>
                                <input className={errors.email && touched.email ? 'error' : ''} value={values.email}
                                       onChange={handleChange} type="email" name="email"
                                       placeholder="Your email address" id="email"/>
                            </div>
                        </div>
                        <div className="contact__group">
                            <div className="contact__row">
                                <label htmlFor="message">Message</label>
                                <textarea value={values.message} onChange={handleChange} name="message" id="message"
                                          placeholder="Please, describe something about your project and budget ..."></textarea>
                            </div>
                        </div>
                    </div>
                    {successMessage && <span className="contact__success">Success! Message sent, we will contact you shortly</span>}
                    <button className="btn-submit" disabled={btnLoading} type="submit">Contact</button>
                </form>
            )}
        </Formik>

        <div className="contact__container contact__container--links">
            <SocialLinks/>
        </div>

    </section>)

}

export default connect(mapStateToProps)(Contact);