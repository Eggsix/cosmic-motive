import {connect} from "react-redux";
import React, {useEffect, useRef, useState} from "react";
import Btn from "../Btn/Btn";
import {Expo, gsap} from 'gsap';

const mapStateToProps = (state) => {
    return {
        heroSlides: state.AppReducer.heroSlides,
    }
}


const HeroMobileSlider = (props) => {
    let xDown = null;
    let yDown = null;
    const bgWrapper = useRef(null);
    const sliderMobileContainer = useRef(null);
    const projectsNameList = useRef(null);
    const [paginationDisabled, setPaginationDisabled] = useState(false);

    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const projectQuantity = props.heroSlides.length > 9 ? props.heroSlides.length : '0' + props.heroSlides.length;

    const changeSlide = (index) => {
        setPaginationDisabled(true);

        gsap.to(bgWrapper.current, 1, {
            translateY: -(index * window.innerHeight),
            ease: Expo.easeInOut,
        });

        let sliderContainerChilds = sliderMobileContainer.current.children;
        let sliderProjectNameChilds = projectsNameList.current.children;

        gsap.set(sliderMobileContainer.current.children, {
            opacity: 0,
        });

        gsap.set(sliderMobileContainer.current.children[index], {
            opacity: 1,
        });

        Array.from(sliderContainerChilds).forEach((item, index) => {
            gsap.set(item.children, {
                translateY: (childIndex) => {
                    return index > currentSlideIndex ? 100 : -100
                },
                opacity: 0
            });
        });

        Array.from(sliderProjectNameChilds).forEach((item, index) => {
            gsap.set(item, {
                translateY: (childIndex) => {
                    return index > currentSlideIndex ? 50 : -50
                },
                opacity: 0
            });
        });

        gsap.to(sliderProjectNameChilds[index], 1, {
            opacity: 1,
            translateY: 0
        });


        gsap.to(sliderContainerChilds[index].children, 1, {
            translateY: 0,
            opacity: 1,
            delay: (itemIndex) => {
                return index > currentSlideIndex ? `0.${itemIndex}` : `0.${sliderContainerChilds[currentSlideIndex].children.length - itemIndex}`;
            },
            onComplete: () => {
                console.log('setPaginationDisabled false');
                setPaginationDisabled(false);
            }
        });

        setCurrentSlideIndex(index);
        setTimeout(() => {
            setPaginationDisabled(false);
        }, 1000);
    }

    const slidePrev = (e) => {
        if (currentSlideIndex < 1) return;
        if (paginationDisabled) return;

        changeSlide(currentSlideIndex - 1);
    }

    const slideNext = (e) => {
        if (currentSlideIndex >= props.heroSlides.length - 1) return;
        if (paginationDisabled) return;

        changeSlide(currentSlideIndex + 1);
    }

    const getTouches = (evt) => {
        return evt.touches;
    }

    const handleTouchMove = (evt) => {
        if (!xDown || !yDown) {
            return;
        }

        var xUp = evt.touches[0].clientX;
        var yUp = evt.touches[0].clientY;

        var xDiff = xDown - xUp;
        var yDiff = yDown - yUp;

        if (Math.abs(xDiff) > Math.abs(yDiff)) {/*most significant*/
            if (xDiff > 0) {
                /* right swipe */
            } else {
                /* left swipe */
            }
        } else {
            console.log('paginationDisabled >>> ', paginationDisabled);
            if (paginationDisabled) return;

            if (yDiff > 0) {
                slideNext();
            } else {
                slidePrev();
            }
        }
        /* reset values */
        xDown = null;
        yDown = null;
    };

    const handleTouchStart = (evt) => {
        const firstTouch = getTouches(evt)[0];
        xDown = firstTouch.clientX;
        yDown = firstTouch.clientY;
    }

    useEffect(() => {
        document.body.classList.add('remove-touch');

        document.addEventListener('touchstart', handleTouchStart);
        document.addEventListener('touchmove', handleTouchMove);

        return () => {
            document.body.classList.remove('remove-touch');

            document.removeEventListener('touchstart', handleTouchStart);
            document.removeEventListener('touchmove', handleTouchMove);
        }
    }, [currentSlideIndex, paginationDisabled]);

    useEffect(() => {
        changeSlide(0);
    }, []);

    return (
        <div className="slider-mobile">
            <div className="slider-mobile__bg">
                <div className="slider-mobile__bg-wrapper" ref={bgWrapper}>
                    {props.heroSlides.map((slide, index) => (
                        <div key={index}
                             className='slider-mobile__bg-item'
                        >
                            {slide.hasOwnProperty('img') && (<img src={slide.imgMobile} alt={slide.title}/>)}
                        </div>
                    ))}
                </div>
            </div>
            <div className="slider-mobile__projects">
                <span className="slider-mobile__projects-quantity">{projectQuantity}</span>
                <div className="slider-mobile__grid">
                    <span
                        className="slider-mobile__project-index">{currentSlideIndex < 10 ? `0${currentSlideIndex + 1}` : currentSlideIndex + 1}</span>
                    <div className="slider-mobile__projects-list" ref={projectsNameList}>
                        {props.heroSlides.map((slide, index) => (
                            <span key={index} className="slider-mobile__project-name">{slide.projectName}</span>
                        ))}
                    </div>
                </div>
            </div>
            <div className="slider-mobile__container" ref={sliderMobileContainer}>
                {props.heroSlides.map((slide, index) => (
                    <div key={index} className="slider-mobile__item">
                        <h2 className="slider-mobile__title">{slide.mobileTitle}</h2>
                        <p className="slider-mobile__subtitle">{slide.mobileSubtitle}</p>
                        <Btn to={slide.btnUrl} btnClass="btn--move" movement={100}
                             btnContainerClass="btn__container--social">{slide.btnText}</Btn>
                    </div>
                ))}
            </div>
            <div className="slider-mobile__arrows">
                <div className="slider-mobile__arrow slider-mobile__arrow--prev" onClick={slidePrev}>
                    <img src="/img/icons/arrow-down.svg" alt=""/>
                </div>
                <div className="slider-mobile__arrow slider-mobile__arrow---next" onClick={slideNext}>
                    <img src="/img/icons/arrow-down.svg" alt=""/>
                </div>
            </div>
        </div>
    )
}

export default connect(mapStateToProps)(HeroMobileSlider);