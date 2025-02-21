import {connect} from 'react-redux';
import { useParams} from "react-router-dom";
import {ideasPageBlockTypes} from "../../redux/types";
import SEO from "react-seo-component";
import React from "react";
import NavBtn from "../NavBtn/NavBtn"
import ComingSoon from '../ComingSoon/ComingSoon';

const mapStateToProps = (state) => {
    return {
        ideas: state.AppReducer.ideas,
    }
}

const IdeasSingle = (props) => {
    const getSelectedIdeas = (routePath) => {
        return props.ideas.find((idea) => {
            return idea.url.includes(routePath)
        });
    }

    const {routePath} = useParams();
    const currentIdea = getSelectedIdeas(routePath);
    if (!currentIdea) {
        return <ComingSoon/>;
    }
    const pageBlocks = currentIdea.content;

    let filteredIdeas = Array.from(props.ideas);
    filteredIdeas.splice(props.ideas.indexOf(currentIdea), 1);

    return (
        <section className="ideas-single" data-scroll-section>
            <SEO
                title={currentIdea.title}
                titleSeparator={`|`}
                titleTemplate="Cosmic Motive"
                description="Content management systems are extremely helpful for web design. Since I first designed a website a lot has changed with the ways in which designs are produced, and how those aspects are served in development"
            />
            <div className="ideas-single__container">
                <div className="ideas-single__head">
                    <h2 className="ideas-single__category">{currentIdea.category}</h2>
                    <h1 className="ideas-single__title">{currentIdea.title}</h1>
                    <h3 className="ideas-single__subtitle">{currentIdea.subtitle}</h3>
                </div>
                <div className="ideas-single__content">
                    <div className="ideas-single__text">
                        {pageBlocks.length && pageBlocks.map((pageBlock, index) => {
                            switch (pageBlock.type) {
                                case ideasPageBlockTypes.text:
                                    return (
                                        <div key={index} className="ideas-single__text">
                                            {pageBlock.hasOwnProperty('title') && pageBlock.title && (<h2 className="ideas-single__item-title">{pageBlock.title}</h2>)}
                                            <p dangerouslySetInnerHTML={{__html: pageBlock.text}}></p>
                                        </div>
                                    )
                                default:
                                    return '';
                            }
                        })}
                    </div>
                    <div className="ideas-single__nav">
                        <h2 className="ideas-single__nav-title">Mobile Apps</h2>
                        {filteredIdeas && filteredIdeas.map((idea, index) => (
                            <NavBtn animation={false} to={idea.url} className="" key={index}>
                                {idea.title}
                            </NavBtn>
                        ))}
                    </div>
                </div>
                <div className="ideas-single__footer">
                    <div className="nav__logo">
                        <svg xmlns="http://www.w3.org/2000/svg" width="88" height="49" viewBox="0 0 88 49">
                            <path d="M43.716.002c3.81-.047 7.577.801 10.999 2.478a.244.244 0 0 1 .112.33l-.134.254a8.629 8.629 0 0 1-8.663 4.389 17.106 17.106 0 0 0-18.516 12.419l-.026.092-.09.342-.014.054-.053.231-.052.231-.015.056-.021.101-.003.031-.066.338-.058.337-.047.293a17.003 17.003 0 0 0 1.574 9.96.244.244 0 0 1-.22.355c-2.993.01-6.488-1.786-8.37-5.696a4.947 4.947 0 0 1-.372-1.115l-.094.052c-4.863 2.732-7.588 5.371-7.063 7.33.526 1.96 4.196 2.885 9.775 2.816a70.67 70.67 0 0 0 1.038-.027l1.037-.044a70.67 70.67 0 0 0 6.197-.579h.025l.002.003a123.601 123.601 0 0 0 15.395-3.14 123.01 123.01 0 0 0 14.931-4.99 70.188 70.188 0 0 0 7.483-3.566c4.863-2.732 7.583-5.39 7.062-7.331-.52-1.94-4.13-2.87-9.623-2.818a.244.244 0 0 1-.22-.13 24.162 24.162 0 0 0-1.168-1.984.195.195 0 0 1 .137-.3c13.181-1.867 22.475-1.335 23.34 1.891.87 3.253-7.038 8.416-19.547 13.416a160.333 160.333 0 0 1-7.899 2.933 214.418 214.418 0 0 1-14.107 4.29 215.99 215.99 0 0 1-14.36 3.339l.02-.004c6.568 6.472 17.091 6.55 23.756.177a8.846 8.846 0 0 1 9.833-1.556.244.244 0 0 1 .115.335 24.437 24.437 0 0 1-42.038 2.467C10.362 39.981.943 39.465.066 36.212-.81 32.96 7.1 27.798 19.616 22.788 20.464 10.202 30.965.146 43.716.002z" fill="#FFF"/>
                        </svg>
                        <span className="nav__logo--text">Cosmic Motive</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default connect(mapStateToProps)(IdeasSingle);