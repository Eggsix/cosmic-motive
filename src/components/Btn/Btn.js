import {useEffect, useRef} from "react";
import {Expo, gsap, Power2} from "gsap";
import {NavLink} from "react-router-dom";
import {pageTransitionOn} from "../../redux/actions";
import {connect} from "react-redux";

const mapDispatchToProps = (dispatch) => {
    return {
        pageTransitionOn: (currentRef) => dispatch(pageTransitionOn(currentRef)),
    }
}

function Btn(props) {
    const btn = useRef(null);
    const btnContainer = useRef(null);
    const btnLine = useRef(null);
    const timeline = gsap.timeline({ repeat: -1, repeatDelay: 5 });

    let btnContainerMouseMove = (e) => {
        if (window.innerWidth < 768) return;

        const boundingRect = btnContainer.current.getBoundingClientRect();
        const relX = e.pageX - boundingRect.left;
        const relY = e.pageY - boundingRect.top;
        const movement = props.movement;

        gsap.to(btn.current, 1, {
            x: (relX - boundingRect.width/2) / boundingRect.width * movement,
            y: (relY - boundingRect.height/2) / boundingRect.width * movement - 20,
            ease: Power2.easeOut
        });
    }

    let btnContainerMouseEnter = () => {
        if (window.innerWidth < 768) return;

        gsap.to(btn.current, 1, {
            // scale: 1.1,
            ease: Power2.easeOut,
            x: 0,
            y: 0
        })
    }

    let btnContainerMouseLeave = () => {
        if (window.innerWidth < 768) return;

        gsap.to(btn.current, 1, {
            scale: 1,
            x: 0,
            y: 0,
            ease: Power2.easeOut
        })
    }

    const getBtnTpl = () => {
        if (props.to) {
            return (
                <NavLink
                    to={props.to}
                    ref={btn}
                    className={`btn ${props.btnClass}`}
                    onClick={(e) => {
                        e.preventDefault();

                        props.pageTransitionOn(props.to);
                    }}
                >
                    {props.children}
                    <div ref={btnLine} className="btn__line"></div>
                </NavLink>
            )
        } else {
            return (
                <div
                    ref={btn}
                    className={`btn ${props.btnClass}`}
                >
                    {props.children}
                    <div ref={btnLine} className="btn__line"></div>
                </div>
            )
        }
    }

    useEffect(() => {
        timeline.to(btnLine.current, .8, {
            delay: .8,
            translateX: '120%',
            ease: Expo.easeIn
        });

        timeline.set(btnLine.current, {
            translateX: '-120%'
        });

        timeline.to(btnLine.current, 1, {
            translateX: 0,
            ease: Expo.easeOut
        });

    }, [])

    return (
    <div ref={btnContainer}
         onMouseMove={btnContainerMouseMove}
         onMouseEnter={btnContainerMouseEnter}
         onMouseLeave={btnContainerMouseLeave}
         className={`btn__container ${props.btnContainerClass}`}>

        {getBtnTpl()}


    </div>
    )
}

export default connect(null, mapDispatchToProps)(Btn);