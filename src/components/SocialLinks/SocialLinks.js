import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        socialLinks: state.AppReducer.socialLinks,
    }
}

const SocialLinks = (props) => {
    return (
        <div className="works__social">
            <span className="works__social-text">
                Connect With Us
            </span>
            <div className="works__social-links">
                {props.socialLinks.map((link, index) => (
                    <a key={index} href={link.url} target="_blank" rel="noreferrer noopener nofollow"
                       className="works__social-link">
                        <img src={link.icon} alt={link.alt}/>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default connect(mapStateToProps)(SocialLinks);