import React, {useLayoutEffect, useRef, useState} from "react";
import {gsap, Expo, Power1} from "gsap";
import Btn from "../Btn/Btn";
import SEO from "react-seo-component";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        heroSlides: state.AppReducer.heroSlides,
    }
}

const HeroSlider = (props) => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const [paginationDisabled, setPaginationDisabled] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    // const [windowW]

    let slideBgList = useRef(null);
    let paginationListContainer = useRef(null);
    let paginationList = useRef(null);
    let sliderPaginationLine = useRef(null);
    let projectsTitleList = useRef(null);
    let titlesList = useRef(null);
    let actionsList = useRef(null);

    let renderSliderInitial = (currentSlideIndex) => {
        Array.from(slideBgList.current.children).forEach((slide, index) => {
            if (index < currentSlideIndex) {
                gsap.set(slide,  {
                    translateX: -windowWidth
                });
            } else if (index > currentSlideIndex) {
                gsap.set(slide, {
                    translateX: windowWidth
                });
            } else {
                gsap.set(slide, {
                    translateX: 0
                });
            }
            gsap.set(slide.children, {
                transform: 'scale(1.1)',
            });

            if (index !== currentSlideIndex) {
                gsap.set(slide.children, {
                    translate: 0,
                    overwrite: true
                });
            }
        });
    }
    let renderTitleInitial = () => {
        Array.from(titlesList.current.children).forEach((title, index) => {
            Array.from(title.children).forEach((line) => {
                gsap.set(line.children, {
                    opacity: 0,
                    translateX: 100,
                })
            })

            if (index === currentSlideIndex) {
                gsap.set(title, {
                    opacity: 1,
                    position: 'relative'
                });
                Array.from(title.children).forEach((line) => {
                    gsap.to(line.children, 1, {
                        opacity: 1,
                        translateX: 0,
                        ease: Power1.easeInOut,
                        stagger: .03,
                    })
                })

            } else {
                gsap.set(title, {
                    opacity: 0,
                    position: 'absolute'
                })
            }
        })
    }
    let renderProjectTitleInitial = () => {
        Array.from(projectsTitleList.current.children).forEach((projectTitle, index) => {
            Array.from(projectTitle.children).forEach((letter) => {
                gsap.set(letter, {
                    opacity: 0,
                    translateX: 100,
                })
            });

            if (index === currentSlideIndex) {
                gsap.set(projectTitle, {
                    opacity: 1,
                    position: 'relative'
                });
                gsap.to(projectTitle.children, 1, {
                    opacity: 1,
                    translateX: 0,
                    ease: Power1.easeInOut,
                    stagger: .03,
                });
            } else {
                gsap.set(projectTitle, {
                    opacity: 0,
                    position: 'absolute'
                });
            }
        });
    }
    let renderBtnInitial = () => {
        Array.from(actionsList.current.children).forEach((btnContainer, index) => {
            gsap.set(btnContainer, {
                translateX: 100,
                opacity: 0,
                position: 'absolute'
            });

            if (index === currentSlideIndex) {
                gsap.set(btnContainer, {
                    position: 'relative',
                    zIndex: 10,
                });

                gsap.to(btnContainer, 1, {
                    delay: .7,
                    opacity: 1,
                    translateX: 0
                })
            }
        });
    }

    const changeSliderTitle = (index) => {
        gsap.to(titlesList.current.children[currentSlideIndex], .5, {
            opacity: 0
        });

        gsap.to(titlesList.current.children[index], .7, {
            opacity: 1
        });

        let currentTitle = Array.from(titlesList.current.children[index].children);

        currentTitle.forEach((line) => {
            gsap.set(line.children, {
                translateX: (slideIndex) => {
                    const sliderIndex = index > currentSlideIndex ? slideIndex : line.children.length - slideIndex;
                    const distance = sliderIndex * 7;
                    return  index > currentSlideIndex ? distance : -distance ;
                },
                opacity: 0,
            });

            const letters = index > currentSlideIndex ? line.children : Array.from(line.children).reverse();

            gsap.to(letters, 1, {
                delay: .9,
                opacity: 1,
                translateX: 0,
                ease: Power1.easeOut,
                stagger: .03,
            });
        });

        gsap.to(titlesList.current.children[index].children, .7, {
            delay: .7,
            opacity: 1,
            translateX: 0,
            ease: Expo.easeInOut,
            stagger: .03,
        });
    }
    const changeProjectTitle = (index) => {
        gsap.to(projectsTitleList.current.children[currentSlideIndex], .5, {
            opacity: 0
        });

        gsap.to(projectsTitleList.current.children[index], .7, {
            opacity: 1
        });

        let currentProjectTitle = Array.from(projectsTitleList.current.children[index].children);

        gsap.set(currentProjectTitle, {
            translateX: index > currentSlideIndex ? 100 : -100,
            opacity: 0
        });

        const letters = index > currentSlideIndex ? currentProjectTitle : Array.from(currentProjectTitle).reverse();

        gsap.to(letters, 1, {
            delay: .9,
            opacity: 1,
            translateX: 0,
            ease: Power1.easeOut,
            stagger: .03,
        });
    }
    const changeSliderBg = (index) => {
        gsap.to(slideBgList.current.children[currentSlideIndex], 2, {
            ease: Expo.easeInOut,
            translateX: index > currentSlideIndex ? -windowWidth : windowWidth, // slide left or right
            overwrite: true,
        });

        gsap.to(slideBgList.current.children[index], 2, {
            ease: Expo.easeInOut,
            translateX: 0,
            overwrite: true,
        });
    }
    const changeBtn = (index) => {

        gsap.set(actionsList.current.children[index], {
            position: 'relative',
            zIndex: 10,
            opacity: 0,
            translateX: index > currentSlideIndex ? 100 : -100,
        });

        gsap.set(actionsList.current.children[currentSlideIndex], {
            position: 'absolute',
        });

        gsap.to(actionsList.current.children[currentSlideIndex], .7, {
            opacity: 0,
            zIndex: 1,
        });

        gsap.to(actionsList.current.children[index], 1, {
            delay: 1,
            translateX: 0,
            opacity: 1
        });
    }

    const changeSlide = (index) => {
        if (index === currentSlideIndex) {
            return;
        }

        setPaginationDisabled(true);
        changeSliderBg(index);
        changeProjectTitle(index);
        changeSliderTitle(index);
        changeBtn(index);

        // let paginationLineOffset = slideBgList.current.children[index]
        gsap.to(sliderPaginationLine.current, 2, {
            translateX: paginationList.current.children[index].offsetLeft,
            ease: Expo.easeInOut,
        });

        setCurrentSlideIndex(index);
        setTimeout(() => {
            renderSliderInitial(index);

            setPaginationDisabled(false);
        }, 2000);

    }
    let timeout = null;

    const changeSlideOnWheel = (e) => {
        if (paginationDisabled) return;

        if (timeout != null) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(() => {
            let index = e.deltaY > 0 ? currentSlideIndex + 1: currentSlideIndex - 1;
            if (index < 0) {
                index = 0;
            } else if (index > props.heroSlides.length - 1) {
                index = props.heroSlides.length - 1;
            }

            changeSlide(index);
        }, 300);
    }

    const changeSlideOnKeyPress = (e) => {
        if (paginationDisabled) return;

        let index = 0;

        if (e.keyCode === 39) { // ArrowRight
            index = currentSlideIndex + 1;
        } else if (e.keyCode === 37) { // ArrowLeft
            index = currentSlideIndex - 1;
        } else {
            return;
        }

        if (index < 0) {
            index = 0;
        } else if (index > props.heroSlides.length - 1) {
            index = props.heroSlides.length - 1;
        }

        changeSlide(index);
    }

    let parallaxEl = (e) => {
        const movement = -100;
        const currentSlide = slideBgList.current.children[currentSlideIndex];

        let relX = e.pageX;// - currentSlide.left;
        let relY = e.pageY;// - currentSlide.top;

        gsap.to(currentSlide.children, 3, {
            delay: .1,
            x: (relX - currentSlide.clientWidth / 2) / currentSlide.clientWidth * movement,
            y: (relY - currentSlide.clientHeight / 2) / currentSlide.clientHeight * movement
        })
    }

    useLayoutEffect(() => {
        renderSliderInitial(currentSlideIndex);
        gsap.set(sliderPaginationLine.current, {
            width: paginationList.current.children[currentSlideIndex].clientWidth,
        });
        gsap.set(paginationListContainer.current, {
            opacity: 0,
            translateX: 100,
        });

        gsap.to(paginationListContainer.current, 1, {
            opacity: 1,
            translateX: 0,
            ease: Power1.easeInOut,
            stagger: .03,
        });
        renderTitleInitial();
        renderProjectTitleInitial();
        renderBtnInitial();
    }, []);

    useLayoutEffect(() => {

        window.addEventListener('keydown', changeSlideOnKeyPress);

        // Component will unmount
        return () => {
            window.removeEventListener('keydown', changeSlideOnKeyPress);
        }
    }, [currentSlideIndex, paginationDisabled]);

    return (
        <section className="slider" onWheel={changeSlideOnWheel} onMouseMove={parallaxEl}>
            <SEO
                title="Cosmic Motive"
                titleSeparator=""
                titleTemplate=""
                description="Product Design, Branding and Integrated Digital Experiences."
            />
            <div className="slider__bg">
                <div className="slider__bg-wrapper" ref={slideBgList}>
                    {props.heroSlides.map((slide, index) => (
                        <div key={index}
                            className='slider__bg-item'
                        >
                            {slide.hasOwnProperty('img') && (<img src={slide.img} alt={slide.title}/>)}
                            {/*{slide.hasOwnProperty('video') && (<video src={slide.video}></video>)}*/}
                        </div>
                    ))}
                </div>
            </div>
            <div className="slider__content">
                <div className="slider__container slider__container--pagination">
                    <div className="slider__pagination-container" ref={paginationListContainer}>
                        <div ref={sliderPaginationLine} className="slider__pagination-line"></div>
                        <div ref={paginationList} className={`slider__pagination slider__pagination--${props.heroSlides.length}`}>
                            {props.heroSlides.map((slide, index) => (
                                <button
                                    key={index}
                                    disabled={paginationDisabled}
                                    onClick={changeSlide.bind(this, index)}
                                    className={`slider__pagination-item ${index === currentSlideIndex && 'active'}`}>
                                    {index + 1}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="slider__projects" ref={projectsTitleList}>
                        {props.heroSlides.map((slide, index) => (
                            <div key={index} className="slider__project-name">{slide.projectName.split('').map((letter, index) => (
                                <span key={index} className="letter">{letter === ' ' ? '\u00A0' : letter}</span>
                            ))}</div>
                        ))}
                    </div>
                </div>
                <div className="slider__titles" ref={titlesList}>
                    {props.heroSlides.map((slide, index) => (
                        <h2 key={index} className="slider__title">
                            {slide.title.split('\n').map((slideLine, index) => (
                                <div key={index} className="line">
                                    {
                                        slideLine.split('').map((letter, index) => (
                                            <span key={index} className="letter">{letter === ' ' ? '\u00A0' : letter}</span>
                                        ))
                                    }
                                </div>
                            ))}
                        </h2>
                    ))}
                </div>
                <div className="slider__actions" ref={actionsList}>
                    {props.heroSlides.map((slide, index) => (
                        <Btn key={index} to={slide.btnUrl} btnClass="btn--move" movement={100} btnContainerClass="btn__container--contact">{slide.btnText}</Btn>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default connect(mapStateToProps)(HeroSlider);