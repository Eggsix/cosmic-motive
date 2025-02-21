
const SelectedWorkPageSubhero = (props) => {

    const deffaultSubhero = () => {
        return (
            <section className="subhero">
                <div className="subhero__container">
                    <div className="subhero__subtitle">
                        {props.currentWork.pageSupTitle}
                    </div>
                    <div className="subhero__content">
                        {props.currentWork?.pageTitle && (
                            <h1 className="subhero__title">{props.currentWork.pageTitle}</h1>
                        )}

                        <div className="subhero__list">
                            {props.currentWork.subheroList.map((listItem, index) => (
                                <div key={index} className="subhero__item">
                                    <h2 className="subhero__item-title">{listItem.title}</h2>
                                    <ul className="subhero__ul">
                                        {listItem.list.map((li, index) => (
                                            <li key={index}>{li}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    const appleSubhero = () => {
        return (
            <section className="subhero">
                <div className="subhero__container">
                    <div className="subhero__apple-logos">
                        <img src="/img/works/apple/logo.png" alt="Apple logo"/>
                        <img src="/img/works/apple/cm-logo.png" alt="Cosmic Motive logo"/>
                    </div>
                    <div className="subhero__content">
                        <h1 className="subhero__title">{props.currentWork.pageTitle}</h1>
                        <div className="subhero__list">
                            <div className="subhero__item subhero__item--typography">
                                <img src="/img/works/apple/typography.png" alt="typography"/>
                            </div>
                            {props.currentWork.subheroList.map((listItem, index) => (
                                <div key={index} className="subhero__item">
                                    <h2 className="subhero__item-title">{listItem.title}</h2>
                                    <ul className="subhero__ul">
                                        {listItem.list.map((li, index) => (
                                            <li key={index}>{li}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    const ylopoSubhero = () => {
        return (
            <section className="subhero">
                <div className="subhero__container">
                    <div>
                        <div className="subhero__subtitle">
                            {props.currentWork.pageSupTitle}
                        </div>

                        <span className="subhero-y__typography">Typography</span>
                        <span className="subhero-y__content">Gotham</span>
                        <span className="subhero-y__fonts">Light, Book, Medium, Bold</span>
                        <ul className="subhero-y__ul">
                            <li><span>#212121</span></li>
                            <li><span>#74B943</span></li>
                            <li><span>#9096AC</span></li>
                        </ul>

                        <ul className="subhero-y__colors">
                            <li>#69708B</li>
                            <li>#9FA4BA</li>
                            <li>#74B943</li>
                            <li>#0D8AC1</li>
                        </ul>
                    </div>

                    <div className="subhero__content">
                        <h1 className="subhero__title">{props.currentWork.pageTitle}</h1>
                        <div className="subhero__list">
                            {props.currentWork.subheroList.map((listItem, index) => (
                                <div key={index} className="subhero__item">
                                    <h2 className="subhero__item-title">{listItem.title}</h2>
                                    <ul className="subhero__ul">
                                        {listItem.list.map((li, index) => (
                                            <li key={index}>{li}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    const gameOutSubhero = () => {
        return (
            <section className="subhero subhero--game-out">
                <div className="subhero__container subhero__container--game-out">
                    <div className="subhero__left-img">
                        <img src="/img/works/game-out/game-out-logo.png" alt=""/>

                        <div className="subhero__list">
                            <div className="subhero__item">
                                <h2 className="subhero__item-title subhero__item-title--game-out">Icons + Brand</h2>
                                <span className="subhero__item-subtitle">Cathy Wang</span>
                            </div>
                            <div className="subhero__item">
                                <h2 className="subhero__item-title subhero__item-title--game-out">Interface</h2>
                                <span className="subhero__item-subtitle">Bradley Bussolini</span>
                            </div>
                        </div>
                    </div>
                    <div className="subhero__content subhero__content--game-out">
                        <div>
                            <img src="/img/works/game-out/game-out-subhero.png" alt=""/>
                        </div>
                        <div>
                            <h1 className="subhero__title subhero__title--game-out">{props.currentWork.pageTitle}</h1>
                            <div className="subhero__list">
                                {props.currentWork.subheroList.map((listItem, index) => (
                                    <div key={index} className="subhero__item">
                                        <h2 className="subhero__item-title">{listItem.title}</h2>
                                        <ul className="subhero__ul subhero__ul--game-out">
                                            {listItem.list.map((li, index) => (
                                                <li key={index}>{li}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    if (props.currentWork.url === '/selected-work/game-out') {
        return gameOutSubhero();
    } else if (props.currentWork.url === '/selected-work/apple') {
        return appleSubhero();
    } else if (props.currentWork.url === '/selected-work/ylopo') {
        return ylopoSubhero();
    } else {
        return deffaultSubhero();
    }
}

export default SelectedWorkPageSubhero;