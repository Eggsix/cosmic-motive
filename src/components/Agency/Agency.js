import React, {useLayoutEffect, useRef} from "react";
import {Expo, gsap, Power1} from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {useLocomotiveScroll} from 'react-locomotive-scroll';
import SEO from "react-seo-component";
import Btn from "../Btn/Btn";
import {connect} from "react-redux";

gsap.registerPlugin(ScrollTrigger);

const mapStateToProps = (state) => {
    return {
        isMobile: state.AppReducer.isMobile
    }
}

const Agency = (props) => {
    const {scroll} = useLocomotiveScroll();

    const titleRef = useRef(null);
    const btnRef = useRef(null);
    const agencyHero = useRef(null);
    const agencyBg = useRef(null);
    const cmImage = useRef(null);
    const cmImageAnimationTrigger = useRef(null);

    const projectTitle = 'Product Design, Branding and \nDigital Experiences';

    useLayoutEffect(() => {
        if (scroll) {
            ScrollTrigger.scrollerProxy(document.body, {
                scrollTop(value) {
                    return arguments.length ? scroll.scrollTo(value, 0, 0) : scroll.scroll.instance.scroll.y;
                },
                getBoundingClientRect() {
                    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
                },
                pinType: document.body.style.transform ? "transform" : "fixed"
            });

            scroll.on("scroll", ScrollTrigger.update);

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: agencyHero.current,
                    start: "top",
                    end: window.innerHeight * 2,
                    scrub: true,
                    // markers: true,
                }
            });

            const movement = -(agencyHero.current.offsetHeight * .3)
            tl.to(agencyBg.current, .5, {
                y: movement,
                ease: "none"
            }, 0);

            scroll.on("scroll", (args) => {
                if (cmImageAnimationTrigger && cmImageAnimationTrigger.current) {
                    let opacity = args.scroll.y / cmImageAnimationTrigger.current.offsetTop;
                    opacity = opacity >= .3 ? opacity : .3;
                    if (args.scroll.y < cmImageAnimationTrigger.current.offsetTop) {
                        // if (args.scroll.y < (cmImageAnimationTrigger.current.offsetTop - (cmImageAnimationTrigger.current.clientHeight / 2) + 135) ) {
                        gsap.set(cmImage.current, {
                            y: args.scroll.y,
                            ease: "none",
                            opacity: opacity,
                        }, 0);
                    }
                }
            });
        }

        gsap.set(btnRef.current, {
            translateX: 50,
            opacity: 0,
            ease: Expo.easeInOut
        });

        Array.from(titleRef.current.children).forEach((projectTitle, index) => {
            Array.from(projectTitle.children).forEach((letter) => {
                gsap.set(letter, {
                    opacity: 0,
                    translateX: 100,
                })
            });

            gsap.to(projectTitle.children, 1, {
                opacity: 1,
                translateX: 0,
                ease: Power1.easeInOut,
                stagger: .03,
            });
        });

        gsap.to(btnRef.current, 1.3, {
            translateX: 0,
            opacity: 1,
            delay: .6,
            ease: Expo.easeInOut
        });
    }, [scroll]);

    const getAgencyTitle = () => {
        if (props.isMobile) {
            return projectTitle;
        }

        return projectTitle.split('\n').map((slideLine, index) => (
            <div key={index} className="line">
                {
                    slideLine.split('').map((letter, index) => (
                        <span key={index} className="letter">{letter === ' ' ? '\u00A0' : letter}</span>
                    ))
                }
            </div>
        ))
    }

    return (
        <main className="agency" data-scroll-section>
            <SEO
                title="Agency"
                titleSeparator={`|`}
                titleTemplate="Cosmic Motive"
                description="Cosmic Motive agency page"
            />
            <section ref={agencyBg} className="agency__bg"></section>
            <div className="agency__hero-img">
                <img ref={cmImage} src="/img/cm-agency-white.png" alt="Agency"/>
            </div>
            <section ref={agencyHero} className="agency__hero">
                <div className="agency__hero-container">
                    <h1 ref={titleRef} className="agency__hero-title">{getAgencyTitle()}</h1>
                    <Btn ref={btnRef} btnClass="btn--move" btnContainerClass="btn__container--coming-soon">
                        SCROLL DOWN
                    </Btn>
                </div>
            </section>
            <section className="agency__content">
                <div className="agency__container agency__container--column">
                    <div className="agency__content-caption">
                        CREATIVE SERVICES
                    </div>
                    <div ref={cmImageAnimationTrigger} className="agency__body">
                        <h2 className="agency__content-title">Cosmic Motive covers a wide range of
                            creative services across various platforms
                            and mediums to craft memorable
                            experiences tailored to your users.</h2>
                        <h3 className="agency__content-subtitle">Infinite Design Innovation Leading Continuous
                            Development Cycles.</h3>
                        <div className="agency__content-text">
                            <p>Cosmic Motive was founded in 2022 to provide professional product design solutions to a wide range of small business and enterprise clients. We believe in one continuous path that cohesively ties product direction, design, and development into final product deliveries that captivate and inspire your users. Our human focused design process promotes empathy and creativity to aid with increasing metrics and experience for the best results possible.</p>

                            <p>Our primary function as an independent Agency is to facilitate and optimize workflow for application development for embedded and contracted teams. The focus of our work is to coordinate design and development cycles to coincide with feature requirements.
                                We’ve helped define business strategies and scale companies from idea to app store.</p>
                        </div>
                    </div>
                </div>

                <div className="agency__container agency__container--column">
                    <span className="agency__content-caption">
                        RESEARCH DRIVEN DESIGNS
                    </span>
                    <div className="agency__body">
                        <h2 className="agency__content-title">Research provides the foundation.</h2>
                        <div className="agency__content-text">
                            <p>Our approach begins with extensive market research and analysis. After developing user profiles and scenarios we look towards competitive analysis and industry specific research to guide our decisions. Design is collaborative in lean methodologies, and we appreciate being able to include stakeholders of all capacities to be a part of the process. The result of our work produces a highly collaborative product that is tailored to suit the needs of your organization. Our primary focus is developing a roadmap to a Minimum Viable Product and we are capable of helping at any stage of your product lifecycle. Our experience spans small business and corporate enterprise clients in a wide variety of roles. We have worked alongside stakeholders, managed existing design resources, and have helped build agile teams as Creative Director and  Product Director.</p>
                        </div>
                    </div>
                    <div className="agency__owner">
                        <img className="agency__owner-typography"  src="/img/cm-agency-white.png" alt="Agency"/>
                        <img src="/img/bradley-bussolini-head-of-product-design@3x.png" alt="Bradley Bussolini Head of Product Design"/>
                        <h3 className="agency__owner-name">Bradley Bussolini</h3>
                        <p className="agency__owner-position">Head of Product Design</p>
                    </div>
                </div>

                <div className="agency__container agency__container--column">
                    <div className="agency__content-caption">
                        HOW WE WORK

                        <div className="agency__owner agency__owner--mobile-hidden">
                           <img src="/img/bradley-bussolini-head-of-product-design@3x.png" alt="Bradley Bussolini Head of Product Design"/>
                            <h3 className="agency__owner-name">Bradley Bussolini</h3>
                            <p className="agency__owner-position">Founder & CEO</p>
                        </div>
                    </div>
                    <div className="agency__body">
                        <h2 className="agency__content-title">Team environments to achieve organizational goals through
                            design.</h2>
                        <h3 className="agency__content-subtitle">Agile teams applying lean methodologies.</h3>
                        <div className="agency__content-text">
                            <ul className="agency__list">
                                <li>Multitalented Teams Versed in Development,
                                    Product and Design
                                </li>
                                <li>Collaboration Between Product Owner,
                                    Team and Cosmic Motive
                                </li>
                                <li>Communication Between Stakeholders,
                                    Engineers and Designers
                                </li>
                                <li>Deadline / Sprint Basis Delivery</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="agency__container agency__container--column">
                    <span className="agency__content-caption p-0">
                        MEET THE FOUNDER
                    </span>
                    <div className="agency__body">
                        {/*<h2 className="agency__content-title">Cosmic Motive covers a wide range of
                            creative services across various platforms
                            and mediums to craft memorable
                            experiences tailored to your users.</h2>
                        <h3 className="agency__content-subtitle">Infinite Design Innovation Leading Continuous
                            Development Cycles.</h3>*/}
                        <div className="agency__content-text">
                            <p>Bradley Bussolini founded Cosmic Motive in November 2021 after 15 years of experience as a design contractor. 
                                As a Silicon Valley native, his interest in design and technology led him to achieve his undergraduate degree at San Jose State University in Graphic Design and a Masters in Advertising. 
                                Bradley noticed a gap between ideation and final delivery after working alongside many startups and enterprise clients, pioneering a new methodology for low fidelity wireframing where he used all vector components to take designs quickly from low to high fidelity. 
                                This process guided him to help many agencies and enterprise clients revolutionize their design systems by building components from the ground up, in addition to effectively affecting existing ones. 
                                Having worked for clients such as Apple, Oracle, Realtor, and AirBnB, he holds a unique perspective when it comes to enterprise design systems stemming from his early experience with startups. 
                                Bradley has gained series A investments for multiple companies in addition to scaling organizations from $20M in ARR to over $100M. In his free time he enjoys the outdoors and all that nature has to offer, in addition to being passionate about the environment and doing his part to be sustainable. 
                                Cosmic Motive was inspired by the idea that great designs are often a collaboration, and he enjoys collaborating with individuals at all levels to inspire the next great design.</p>
                        </div>
                    </div>
                </div>

                <div className="agency__container agency__container--column">
                    <span className="agency__content-caption">
                        OUR PROCESS
                    </span>
                    <div className="agency__body">
                        <h2 className="agency__content-title">From functional wireframes to refined
                            comps, every pixel has a purpose.</h2>
                        <div className="agency__content-text agency__content-text--grid-3">
                            <div className="list-block">
                                <span className="list-block__title">Research</span>
                                <ul className="list-block__list">
                                    <li>Market Analysis</li>
                                    <li>User Roles & Personas</li>
                                    <li>Competitive Analysis</li>
                                    <li>Demographics</li>
                                    <li>Potential Risks</li>
                                </ul>
                            </div>
                            <div className="list-block">
                                <span className="list-block__title">refine</span>
                                <ul className="list-block__list">
                                    <li>Feature Sets</li>
                                    <li>Interactions & Gestures</li>
                                    <li>User Interface Patterns</li>
                                    <li>Development Backlog & User Stories</li>
                                    <li>Functional Wireframes</li>
                                    <li>Usability & Multivariate Testing</li>
                                </ul>
                            </div>
                            <div className="list-block">
                                <span className="list-block__title">release</span>
                                <ul className="list-block__list">
                                    <li>Fidelity Mockups</li>
                                    <li>Specifications & Guidelines</li>
                                    <li>Production Design</li>
                                    <li>Agile Development Management</li>
                                    <li>Quality Assurance</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="agency__container agency__container--column">
                    <span className="agency__content-caption">
                        OUR TOOLBOX
                    </span>
                    <div className="agency__body">
                        <h2 className="agency__content-title">Tools & technologies we use daily.</h2>
                        <div className="agency__content-text agency__content-text--p0">
                            <div className="technologies-list">
                                <div className="technologies-list__item">
                                    <img src=" /img/icons/figma.svg" alt=""/>
                                </div>
                                <div className="technologies-list__item">
                                    <img src="/img/icons/sketch.svg" alt=""/>
                                </div>
                                <div className="technologies-list__item">
                                    <img src="/img/icons/zeplin.svg" alt=""/>
                                </div>
                                <div className="technologies-list__item">
                                    <img src="/img/icons/css3.svg" alt=""/>
                                </div>
                                <div className="technologies-list__item">
                                    <img src="/img/icons/html5.svg" alt=""/>
                                </div>
                                <div className="technologies-list__item">
                                    <img src="/img/icons/js.svg" alt=""/>
                                </div>
                                <div className="technologies-list__item">
                                    <img src="/img/icons/ps.svg" alt=""/>
                                </div>
                                <div className="technologies-list__item">
                                    <img src="/img/icons/illus.svg" alt=""/>
                                </div>
                                {/*<div className="technologies-list__item">
                                    <img src=" /img/icons/apple-logo.svg" alt=""/>
                                </div>*/}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="agency__container agency__container--column">
                    <span className="agency__content-caption">
                        COOL CLIENTS
                    </span>
                    <div className="agency__body">
                        <h2 className="agency__content-title">We’ve had some amazing clients.</h2>
                        <div className="agency__content-text agency__content-text--p0">
                            <div className="our-clients">
                                <div className="our-clients__item">
                                    <img src="/img/customers/apple-logo.svg" alt="Apple logo"/>
                                </div>
                                <div className="our-clients__item">
                                    <img src="/img/customers/oracle.svg" alt="Oracle logo"/>
                                </div>
                                <div className="our-clients__item">
                                    <img src="/img/customers/realtor-logo.svg" alt="Realtor logo"/>
                                </div>
                                <div className="our-clients__item">
                                    <img src="/img/customers/news-corp.svg" alt="News corp logo"/>
                                </div>
                                <div className="our-clients__item">
                                    <img src="/img/customers/market-smith.svg" alt="Market smith logo"/>
                                </div>
                                <div className="our-clients__item">
                                    <img src="/img/customers/J&J.svg" alt="J&J logo"/>
                                </div>
                                <div className="our-clients__item">
                                    <img src="/img/customers/cisco.svg" alt="Cisco logo"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default connect(mapStateToProps)(Agency);