import React, {Component} from 'react';
import {connect} from "react-redux";

class ActiveImage extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <img src={this.props.activeImage.urls.small} alt=""/>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    const activeImage = state.activeImage;
    return { activeImage}
};
export default connect(mapStateToProps, null)(ActiveImage)