import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        appMessages: state.AppReducer.appMessages
    }
}

const UserMessage = ({ appMessages }) => {
    
    return (
        <div className="user-message">
            {appMessages.map((message) => {
                return (
                    <div className="user-message__item" key={message.id}>
                        <h3 className="user-message__title">{ message.title }</h3>
                        <p className="user-message__text">{ message.text }</p>
                    </div>
                )
            })}
        </div>
    )
}

export default connect(mapStateToProps)(UserMessage);