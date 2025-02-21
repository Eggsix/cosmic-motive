import {connect} from "react-redux";
import React, {useEffect, useRef, useState} from "react";
import {Expo, gsap} from "gsap";
import {Draggable} from "gsap/Draggable";
import {InertiaPlugin} from "gsap/InertiaPlugin";
import {NavLink} from "react-router-dom";
import {pageTransitionOn} from "../../redux/actions";
import ImagePreloader from "../ImagePreloader/ImagePreloader";
import SocialLinks from "../SocialLinks/SocialLinks";
import SEO from "react-seo-component";


gsap.registerPlugin(Draggable, InertiaPlugin);

const mapStateToProps = (state) => {
    return {
        works: state.WorkReducer.works,
        contactEmail: state.AppReducer.contactEmail,
        isMobile: state.AppReducer.isMobile,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        pageTransitionOn: (currentRef) => dispatch(pageTransitionOn(currentRef)),
    }
}

const SelectedWork = (props) => {
    const [disabledBgSlider, setDisabledBgSlider] = useState(false);
    const sliderRef = useRef(null);
    const sliderBgRef = useRef(null);
    const contactRef = useRef(null);
    let slidePosition = 0;
    const timeline = gsap.timeline();
    const sliderLoader = useRef(null);

    const wheelCnageSlide = (e) => {
        slidePosition += -e.deltaY;

        if (slidePosition > 0) {
            slidePosition = 0;
        } else if (slidePosition < -sliderRef.current.offsetWidth + window.innerWidth * .9) {
            slidePosition = -sliderRef.current.offsetWidth + window.innerWidth * .9;
        }

        gsap.to(sliderRef.current, {
            translateX: slidePosition,
        })
    }

    useEffect(() => {
        if (!props.isMobile) {
            gsap.set(sliderRef.current.children, {
                translateX: (index, target) => {
                    return index * 400
                },
            });

            gsap.to(sliderRef.current, 1.5, {
                translateX: 0,
            });

            gsap.to(sliderBgRef.current, 1.5, {
                translateX: 0,
                delay: .1
            })

            gsap.to(sliderRef.current.children, 1.5, {
                translateX: 0,
                delay: (index) => {
                    return '0.' + index;
                }
            });

            Draggable.create(sliderRef.current, {
                edgeResistance: .5, zIndexBoost: false, inertia: true, type: "x", x: 0, bounds: {
                    minX: -sliderRef.current.offsetWidth + window.innerWidth * .9, maxX: 0, allowNativeTouchScrolling: true
                }, onDragEnd: function () {
                    slidePosition = Math.round(this.endX);
                },
            });

            window.addEventListener('wheel', wheelCnageSlide);

            gsap.set(sliderRef.current, {
                translateX: '100%'
            });

            // Component will unmount
            return () => {
                window.removeEventListener('wheel', wheelCnageSlide);
            }
        }
    }, [props.isMobile]);

    const moveToSelectedWorkItem = (path, index) => {
        timeline.to(contactRef.current, 1, {
            translateY: '100%',
            opacity: 0,
        });

        timeline.set(sliderLoader.current,  {
            opacity: 1,
            visibility: 'visible'
        })

        timeline.to(sliderRef.current, 1, {
            translateX: -sliderRef.current.clientWidth - 1000,
            delay: -1
        });

        timeline.to(sliderRef.current.children, .5, {
            translateX: (index) => {
                return -100 * (sliderRef.current.children.length - index)
            },
            delay: -1,
        });

        changeBgSlide(index);
        setDisabledBgSlider(true);


        timeline.to(sliderBgRef.current.children[index], 1, {
            scale: 1,
            ease: Expo.easeInOut,
            delay: 1,
            zIndex: 100000,
            position: 'relative',
            onComplete: () => {
                props.pageTransitionOn(path);
            }
        });

        window.removeEventListener('wheel', wheelCnageSlide);
    }

    const moveToSelectedWorkItemMobile = (path) => {
        props.pageTransitionOn(path);
    }

    const changeBgSlide = (index) => {
        if (disabledBgSlider) return;

        gsap.to(sliderBgRef.current, 1, {
            translateX: -window.innerWidth * index, ease: Expo.easeInOut,
        })
    }

    return (<div className="works" data-scroll-section>
        <SEO
            title="Selected Work"
            titleSeparator={`|`}
            titleTemplate="Cosmic Motive"
            description="Cosmic Motive Selected Work page"
        />
        <div className="works__bg">
            <div ref={sliderBgRef} className="works__bg-row">
                {props.works.map((work, index) => (<div key={index} className="works__bg-item">
                    <div className="works__bg-img">
                        <ImagePreloader src={work.img} alt={work.title}></ImagePreloader>
                    </div>
                </div>))}
            </div>
            <div ref={sliderLoader} className="works__bg--loader"></div>
        </div>
        <div className="works__list">
            <div ref={sliderRef} className="works__row">
                {props.works.map((work, index) => (<NavLink
                    to={work.url}
                    key={index}
                    className="works__list-item"
                    onMouseEnter={() => {
                        changeBgSlide(index)
                    }}
                    onClick={(e) => {
                        e.preventDefault();
                        if (!props.isMobile) {
                            moveToSelectedWorkItem(work.url, index);
                        } else {
                            moveToSelectedWorkItemMobile(work.url)
                        }
                    }}
                >
                    <div className="works__item-img">
                        <ImagePreloader src={work.img} alt={work.title}></ImagePreloader>
                    </div>
                    <span className="works__item-index">{index < 9 ? `0${index + 1}` : index + 1}</span>
                    <div className="works__list-text">
                        <div className="works__list-title">{work.title}</div>
                        <div className="works__list-description">{work.description}</div>
                    </div>
                </NavLink>))}
            </div>
        </div>

        <div ref={contactRef} className="works__contact">
            <div className="works__contact-email">
                <div className="works__contact--svg">
                    <svg
                        width="494.936px" height="494.936px"
                        viewBox="0 0 494.936 494.936"
                    >
                        <g>
                            <g>
                                <path
                                    d="M389.844,182.85c-6.743,0-12.21,5.467-12.21,12.21v222.968c0,23.562-19.174,42.735-42.736,42.735H67.157    c-23.562,0-42.736-19.174-42.736-42.735V150.285c0-23.562,19.174-42.735,42.736-42.735h267.741c6.743,0,12.21-5.467,12.21-12.21    s-5.467-12.21-12.21-12.21H67.157C30.126,83.13,0,113.255,0,150.285v267.743c0,37.029,30.126,67.155,67.157,67.155h267.741    c37.03,0,67.156-30.126,67.156-67.155V195.061C402.054,188.318,396.587,182.85,389.844,182.85z"/>
                                <path
                                    d="M483.876,20.791c-14.72-14.72-38.669-14.714-53.377,0L221.352,229.944c-0.28,0.28-3.434,3.559-4.251,5.396l-28.963,65.069    c-2.057,4.619-1.056,10.027,2.521,13.6c2.337,2.336,5.461,3.576,8.639,3.576c1.675,0,3.362-0.346,4.96-1.057l65.07-28.963    c1.83-0.815,5.114-3.97,5.396-4.25L483.876,74.169c7.131-7.131,11.06-16.61,11.06-26.692    C494.936,37.396,491.007,27.915,483.876,20.791z M466.61,56.897L257.457,266.05c-0.035,0.036-0.055,0.078-0.089,0.107    l-33.989,15.131L238.51,247.3c0.03-0.036,0.071-0.055,0.107-0.09L447.765,38.058c5.038-5.039,13.819-5.033,18.846,0.005    c2.518,2.51,3.905,5.855,3.905,9.414C470.516,51.036,469.127,54.38,466.61,56.897z"/>
                            </g>
                        </g>
                    </svg>
                </div>
                <div>
                    <span>To discover other projects please send us an <a target="_blank" rel="noreferrer" href={`mailto:${props.contactEmail}`}>email</a>.</span>
                    <span>© Cosmic Motive, LLC</span>
                </div>
            </div>
            <SocialLinks/>
        </div>
    </div>)
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectedWork);