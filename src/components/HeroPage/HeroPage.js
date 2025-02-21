import HeroSlider from "../HeroSlider/HeroSlider";
import HeroMobileSlider from "../HeroMobileSlider/HeroMobileSlider";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        isMobile: state.AppReducer.isMobile
    }
}

const HeroPage = (props) => {
    return props.isMobile ? <HeroMobileSlider/> : <HeroSlider/>;
}

export default connect(mapStateToProps)(HeroPage);