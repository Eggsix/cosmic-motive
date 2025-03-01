import React, { useEffect, useRef } from "react";
import NavBtn from "../NavBtn/NavBtn";
import { gsap, Expo } from "gsap";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import ScrollTrigger from "gsap/ScrollTrigger";
import { connect } from "react-redux";
import { mobileMenuOn, mobileMenuOff } from "../../redux/actions";

gsap.registerPlugin(ScrollTrigger);

const mapStateToProps = (state) => {
  return {
    contactEmail: state.AppReducer.contactEmail,
    socialLinks: state.AppReducer.socialLinks,
    mobileMenuOpened: state.AppReducer.mobileMenuOpened,
    routeTo: state.AppReducer.routeTo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    mobileMenuOn: () => dispatch(mobileMenuOn()),
    mobileMenuOff: () => dispatch(mobileMenuOff()),
  };
};

function Nav(props) {
  const { scroll } = useLocomotiveScroll();
  const nav = useRef(null);
  const navBg = useRef(null);
  const mobileMenu = useRef(null);

  const windowOnResize = () => {
    gsap.set(mobileMenu.current, {
      translateX: -window.innerWidth,
    });
  };

  useEffect(() => {
    const displayNav = gsap
      .from(nav.current, {
        yPercent: -100,
        paused: true,
        duration: 0.2,
      })
      .progress(1);

    const displayNavBg = gsap
      .fromTo(
        navBg.current,
        {
          opacity: 0,
          paused: true,
          duration: 0.2,
        },
        {
          opacity: 1,
        }
      )
      .progress(1);

    if (scroll) {
      ScrollTrigger.scrollerProxy(document.body, {
        scrollTop(value) {
          return arguments.length
            ? scroll.scrollTo(value, 0, 0)
            : scroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
        pinType: document.body.style.transform ? "transform" : "fixed",
      });

      scroll.on("scroll", ScrollTrigger.update);

      ScrollTrigger.create({
        start: "top top",
        end: 99999,
        // markers: true,
        onUpdate: (self) => {
          if (self.direction === 1) {
            displayNav.reverse();
            displayNavBg.reverse();
          } else {
            displayNav.play();
            displayNavBg.play();
          }
        },
      });
    }
  }, [scroll]);

  useEffect(() => {
    document.body.classList.remove("no_scroll");
    props.mobileMenuOff();
    gsap.to(mobileMenu.current, 0.7, {
      translateX: -window.innerWidth,
      ease: Expo.easeInOut,
    });
  }, [props.routeTo]);

  useEffect(() => {
    window.addEventListener("resize", windowOnResize);

    // Component will unmount
    return () => {
      window.removeEventListener("resize", windowOnResize);
    };
  }, []);

  const handleHamburgerClick = (e) => {
    e.preventDefault();

    if (props.mobileMenuOpened) {
      document.body.classList.remove("no_scroll");
      props.mobileMenuOff();
      gsap.to(mobileMenu.current, 1, {
        translateX: -window.innerWidth,
        ease: Expo.easeInOut,
      });
    } else {
      document.body.classList.add("no_scroll");
      props.mobileMenuOn();
      gsap.to(mobileMenu.current, 1, {
        translateX: 0,
        ease: Expo.easeInOut,
      });
    }
  };

  return (
    <section>
      <div ref={nav} className="nav">
        <div ref={navBg} className="nav__bg"></div>
        <div className="nav__container">
          <NavBtn animation={false} to="/" className="nav__logo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="88"
              height="49"
              viewBox="0 0 88 49"
            >
              <path
                d="M43.716.002c3.81-.047 7.577.801 10.999 2.478a.244.244 0 0 1 .112.33l-.134.254a8.629 8.629 0 0 1-8.663 4.389 17.106 17.106 0 0 0-18.516 12.419l-.026.092-.09.342-.014.054-.053.231-.052.231-.015.056-.021.101-.003.031-.066.338-.058.337-.047.293a17.003 17.003 0 0 0 1.574 9.96.244.244 0 0 1-.22.355c-2.993.01-6.488-1.786-8.37-5.696a4.947 4.947 0 0 1-.372-1.115l-.094.052c-4.863 2.732-7.588 5.371-7.063 7.33.526 1.96 4.196 2.885 9.775 2.816a70.67 70.67 0 0 0 1.038-.027l1.037-.044a70.67 70.67 0 0 0 6.197-.579h.025l.002.003a123.601 123.601 0 0 0 15.395-3.14 123.01 123.01 0 0 0 14.931-4.99 70.188 70.188 0 0 0 7.483-3.566c4.863-2.732 7.583-5.39 7.062-7.331-.52-1.94-4.13-2.87-9.623-2.818a.244.244 0 0 1-.22-.13 24.162 24.162 0 0 0-1.168-1.984.195.195 0 0 1 .137-.3c13.181-1.867 22.475-1.335 23.34 1.891.87 3.253-7.038 8.416-19.547 13.416a160.333 160.333 0 0 1-7.899 2.933 214.418 214.418 0 0 1-14.107 4.29 215.99 215.99 0 0 1-14.36 3.339l.02-.004c6.568 6.472 17.091 6.55 23.756.177a8.846 8.846 0 0 1 9.833-1.556.244.244 0 0 1 .115.335 24.437 24.437 0 0 1-42.038 2.467C10.362 39.981.943 39.465.066 36.212-.81 32.96 7.1 27.798 19.616 22.788 20.464 10.202 30.965.146 43.716.002z"
                fill="#FFF"
              />
            </svg>
            <span className="nav__logo--text">Cosmic Motive</span>
          </NavBtn>
          <div className="nav__links nav__links--hidden-mobile">
            <NavBtn animation={true} to="/selected-work">
              Work
            </NavBtn>
            <NavBtn animation={true} to="/agency">
              Agency
            </NavBtn>
            <NavBtn animation={true} to="/ideas">
              Ideas
            </NavBtn>
            <NavBtn animation={true} to="/contact">
              Contact
            </NavBtn>
          </div>
          <div className="nav__agency nav__agency--hidden-mobile">
            <span>Creative Agency</span>
          </div>
          <div
            className={`nav__menu-toggle ${
              props.mobileMenuOpened
                ? "nav__menu-toggle--active"
                : "nav__menu-toggle--not-active"
            }`}
            onClick={handleHamburgerClick}
          >
            <div className="nav__menu-toggle--line"></div>
            <div className="nav__menu-toggle--line"></div>
            <div className="nav__menu-toggle--line"></div>
          </div>
        </div>
      </div>
      <div ref={mobileMenu} className={`nav__mobile-menu`}>
        <div className="nav__agency nav__agency--mobile">
          <span>Creative Agency</span>
        </div>
        <div className="nav__links nav__links--mobile">
          <NavBtn animation={true} to="/selected-work">
            Work
          </NavBtn>
          <NavBtn animation={true} to="/agency">
            Agency
          </NavBtn>
          <NavBtn animation={true} to="/ideas">
            Ideas
          </NavBtn>
          <NavBtn animation={true} to="/contact">
            Contact
          </NavBtn>
        </div>
        <a className="nav__email" href={`mailto:${props.contactEmail}`}>
          {props.contactEmail}
        </a>
        <div className="nav__social-links">
          {props.socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noreferrer noopener nofollow"
              className="nav__social-link"
            >
              <img src={link.navIcon} alt={link.alt} />
              {link.navTitle}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
