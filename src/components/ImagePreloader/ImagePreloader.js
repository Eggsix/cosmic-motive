import {useState} from "react";
import {incrementLoadedImages} from "../../redux/actions";
import {connect} from 'react-redux'
const mapDispatchToProps = (dispatch) => {
    return {
        incrementLoadedImages: () => {dispatch(incrementLoadedImages())}
    }
}

const ImagePreloader = (props) => {
    let [loading, setLoading] = useState(true);

    return (
        <div className={`image-preloader ${loading ? '' : 'image-preloader--loading'}`}>
            <img
                src={props.src}
                alt={props.alt}
                onLoad={(e) => {
                    setLoading(false);
                    setTimeout(() => {
                        props.incrementLoadedImages();
                    }, 100);
                }}
            />
        </div>
    )
}

export default connect(null, mapDispatchToProps)(ImagePreloader);