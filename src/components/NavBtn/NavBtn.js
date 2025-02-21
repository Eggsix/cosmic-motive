import {NavLink} from "react-router-dom";
import {gsap} from "gsap";
import {useRef} from "react";
import {connect} from "react-redux";
import {pageTransitionOn} from "../../redux/actions";

const mapDispatchToProps = (dispatch) => {
    return {
        pageTransitionOn: (currentRef) => dispatch(pageTransitionOn(currentRef)),
    }
}

const NavBtn = (props) => {
    const navLink = useRef(null);

    const startBtnAnimation = (e) => {
        if (!props.animation) return;
        gsap.set(navLink.current.children, {
            translateX: '-105%'
        });

        gsap.to(navLink.current.children, .3, {
            translateX: 0
        });
    }

    const endBtnAnimation = (e) => {
        if (!props.animation) return;
        gsap.to(navLink.current.children, .2, {
            translateX: '105%',
            onComplete: () => {
                gsap.set(navLink.current.children, {
                    translateX: '-105%',
                    overwrite: true
                })
            }
        });
    }

    return (
        <NavLink
            className={props.className}
            ref={navLink}
            onMouseEnter={startBtnAnimation}
            onMouseLeave={endBtnAnimation}
            onClick={(e) => {
                e.preventDefault();

                props.pageTransitionOn(props.to);
            }}
            to={props.to}
        >
            {props.children}
            {props.animation && <div className="nav__links--active"></div>}
        </NavLink>
    );
}

export default connect(null, mapDispatchToProps)(NavBtn);