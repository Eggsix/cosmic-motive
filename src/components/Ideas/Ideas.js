import {connect} from "react-redux";
import NavBtn from "../NavBtn/NavBtn";
import React, {useEffect, useRef} from "react";
import {gsap} from "gsap";
import SEO from "react-seo-component";

const mapStateToProps = (state) => {
    return {
        ideas: state.AppReducer.ideas,
    }
}

const Ideas = (props) => {
    const ideasList = useRef(null);

    useEffect(() => {
        gsap.set(ideasList.current.children, {
            opacity: 0,
            translateY: index => (index + 1) * 50
        });

        gsap.to(ideasList.current.children, 1, {
            translateY: 1,
            opacity: 1,
            delay: .7
        });
    }, []);

    return (
         <section className="ideas" data-scroll-section>
             <SEO
                 title="Ideas"
                 titleSeparator={`|`}
                 titleTemplate="Cosmic Motive"
                 description="Cosmic Motive ideas page"
             />
             <div className="ideas__container">
                 <h1 className="ideas__label">Ideas</h1>
                 <div className="ideas__list" ref={ideasList}>
                     {props.ideas && props.ideas.map((idea, index) => (
                         <NavBtn key={index} animation={false} to={idea.url}>
                             <div className="ideas__item">
                                 <span className="ideas__item-label">{idea.category}</span>
                                 <h2 className="ideas__item-title">{idea.title}</h2>
                                 <h3 className="ideas__item-subtitle">{idea.subtitle}</h3>
                             </div>
                         </NavBtn>

                     ))}
                 </div>
             </div>
         </section>
    )
}

export default connect(mapStateToProps)(Ideas);