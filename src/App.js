import ComingSoon from "./components/ComingSoon/ComingSoon";
import HeroPage from "./components/HeroPage/HeroPage";
import Nav from "./components/Nav/Nav";
import "./scss/main.scss";

import { Route, Routes } from "react-router-dom";
import { connect } from "react-redux";

import Preloader from "./components/Preloader/Preloader";
import PageTransition from "./components/PageTransiton/PageTransition";
import SelectedWork from "./components/SelectedWork/SelectedWork";
import SelectedWorkPage from "./components/SelectedWorkPage/SelectedWorkPage";
import Agency from "./components/Agency/Agency";
import Contact from "./components/Contact/Contact";
import Ideas from "./components/Ideas/Ideas";
import IdeasSingle from "./components/IdeasSingle/IdeasSingle";

import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { mobileViewOn, mobileViewOff } from "./redux/actions";

const mapStateToProps = (state) => {
  return {
    preloader: state.AppReducer.preloader,
    imagesLoaded: state.AppReducer.imagesLoaded,
    routeTo: state.AppReducer.routeTo,
    isMobile: state.AppReducer.isMobile,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    mobileViewOn: () => dispatch(mobileViewOn()),
    mobileViewOff: () => dispatch(mobileViewOff()),
  };
};

function App(props) {
  const scrollerContainer = useRef(null);
  const location = useLocation();
  const pathname = location.pathname;

  const detectMobile = () => {
    if (window.innerWidth > 768) {
      props.mobileViewOff();
    } else {
      props.mobileViewOn();
    }
  };

  detectMobile();

  useEffect(() => {
    window.addEventListener("resize", detectMobile);

    return () => {
      window.removeEventListener("resize", detectMobile);
    };
  }, []);

  return (
    <div>
      <PageTransition />
      {props.preloader && <Preloader />}
      <LocomotiveScrollProvider
        options={{
          smooth: true,
          lerp: 0.05,
          smoothMobile: false,
        }}
        watch={[pathname, props.routeTo, props.imagesLoaded]}
        location={pathname}
        containerRef={scrollerContainer}
        onLocationChange={(scroll) => {
          scroll.scrollTo(0, { duration: 0, disableLerp: true });
        }}
      >
        <div data-scroll-section data-scroll-container ref={scrollerContainer}>
          <div id="content" className="App">
            <Nav />
            <Routes>
              <Route path="/" element={<HeroPage />} />
              <Route path="/selected-work" element={<SelectedWork />} />
              <Route
                path="/selected-work/:routePath"
                element={<SelectedWorkPage />}
              />
              <Route path="/agency" element={<Agency />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/ideas" element={<Ideas />} />
              <Route path="/ideas/:routePath" element={<IdeasSingle />} />
              <Route path="*" element={<ComingSoon />} />
            </Routes>
          </div>
        </div>
      </LocomotiveScrollProvider>
      {/*<UserMessage/>*/}
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
