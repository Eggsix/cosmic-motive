import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { pageBlockTypes } from "../../redux/types";

import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ImagePreloader from "../ImagePreloader/ImagePreloader";
import SelectedWorkPageSubhero from "../SelectedWorkPageSubhero/SelectedWorkPageSubhero";
import { useRef } from "react";
import ComingSoon from "../ComingSoon/ComingSoon";

gsap.registerPlugin(ScrollTrigger);

const mapStateToProps = (state) => {
  return {
    works: state.WorkReducer.works,
    imagesLoaded: state.AppReducer.imagesLoaded,
    isMobile: state.AppReducer.isMobile,
  };
};

const SelectedWorkPage = (props) => {
  const heroSection = useRef(null);
  const getSelectedWork = (routePath) => {
    return props.works.find((work) => {
      return work.url.includes(routePath);
    });
  };

  const { routePath } = useParams();
  const currentWork = getSelectedWork(routePath);

  if (!currentWork) {
    return <ComingSoon />;
  }

  const pageBlocks =
    props.isMobile && currentWork.content.mobile.length
      ? currentWork.content.mobile
      : currentWork.content.desktop;

  return (
    <div>
      <section ref={heroSection} className="selected-work-page__hero">
        <div
          className={`selected-work-page__hero-bg selected-work-page__hero-bg--${routePath} ${
            currentWork.hasOwnProperty("homeImgUrl")
              ? "selected-work-page__hero-bg--not-cover"
              : ""
          }`}
        >
          {props.isMobile && currentWork.hasOwnProperty("homeImgUrlMobile") ? (
            <ImagePreloader
              src={currentWork.homeImgUrlMobile}
              alt={currentWork.title}
            ></ImagePreloader>
          ) : (
            <ImagePreloader
              src={
                currentWork.hasOwnProperty("homeImgUrl")
                  ? currentWork.homeImgUrl
                  : currentWork.img
              }
              alt={currentWork.title}
            ></ImagePreloader>
          )}
        </div>
      </section>
      <div data-scroll-section>
        <div className="viewport--empty-100"></div>
        <SelectedWorkPageSubhero
          currentWork={currentWork}
        ></SelectedWorkPageSubhero>
        <section className={`content ${routePath}`}>
          {pageBlocks.length &&
            pageBlocks.map((pageBlock, index) => {
              switch (pageBlock.type) {
                case pageBlockTypes.image:
                  return (
                    <div key={index} className="content__container">
                      {pageBlock.hasOwnProperty("title") && pageBlock.title && (
                        <h2 className="content__title">{pageBlock.title}</h2>
                      )}
                      <ImagePreloader
                        src={pageBlock.imageUrl}
                        alt={pageBlock.title}
                      ></ImagePreloader>
                    </div>
                  );
                case pageBlockTypes.avaliableOn:
                  return (
                    <a
                      key={index}
                      className="content__avaliable-on"
                      href={pageBlock.link}
                      target="_blank"
                      rel="noreferrer noopener nofollow"
                    >
                      <h2 className="content__avaliable-on-title">
                        {pageBlock.title}
                      </h2>
                      <ImagePreloader
                        src={pageBlock.imageUrl}
                        alt={pageBlock.title}
                      ></ImagePreloader>
                    </a>
                  );
                case pageBlockTypes.text:
                  return (
                    <div
                      key={index}
                      className={`text-section ${pageBlock.className}`}
                    >
                      <p>{pageBlock.text}</p>
                    </div>
                  );
                case pageBlockTypes.TitleAndLogo:
                  return (
                    <div key={index} className="content__container">
                      <img src={pageBlock.logo} />
                      <div>
                        <h2 className={`h2 ${pageBlock.className}`}>
                          {pageBlock.title}
                        </h2>
                        <p>{pageBlock.subtitle}</p>
                      </div>
                    </div>
                  );
                case pageBlockTypes.h2:
                  return (
                    <div key={index} className="content__container">
                      <h2 className={`h2 ${pageBlock.className}`}>
                        {pageBlock.title}
                      </h2>
                    </div>
                  );
                case pageBlockTypes.parallaxImgBg:
                  return (
                    <div key={index} className="parallax-img">
                      <ImagePreloader src={pageBlock.imageUrl}></ImagePreloader>
                    </div>
                  );
                case pageBlockTypes.textWithBg:
                  const fullwidthBlock =
                    pageBlock.hasOwnProperty("fullwidth") &&
                    pageBlock.fullwidth;
                  const containerClass = fullwidthBlock
                    ? "content__container--fullwidth"
                    : "content__container content__container--p0";
                  const contentClass = fullwidthBlock
                    ? "content__bg content__bg--p0"
                    : "content__bg";
                  return (
                    <div
                      key={index}
                      className={contentClass}
                      style={{ background: pageBlock.background }}
                    >
                      <div className={containerClass}>
                        {pageBlock.hasOwnProperty("title") &&
                          pageBlock.title && (
                            <h2 className="content__title">
                              {pageBlock.title}
                            </h2>
                          )}
                        {pageBlock.hasOwnProperty("subtitle") &&
                          pageBlock.subtitle && (
                            <p className="content__subtitle">
                              {pageBlock.subtitle}
                            </p>
                          )}
                        <ImagePreloader
                          src={pageBlock.imageUrl}
                          alt={pageBlock.title}
                        ></ImagePreloader>
                      </div>
                    </div>
                  );
                case pageBlockTypes.textWith3Cols:
                  return (
                    <div className="text-cols">
                      <div className="text-cols__container">
                        {pageBlock.content.map((block) => (
                          <div className="text-cols__item">
                            <h3 className="text-cols__item-title">
                              {block.title}
                            </h3>
                            <p className="text-cols__item-text">{block.text}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                default:
                  return "";
              }
            })}
        </section>
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(SelectedWorkPage);
