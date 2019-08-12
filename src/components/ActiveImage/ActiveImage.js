import React, {Component} from 'react';
import {connect} from "react-redux";

class ActiveImage extends Component {
    render() {
        console.log('Active Image props', this.props);
        const imageTags = this.props.activeImage.tags.map((value) => {
            return <li>{value.title}</li>
        })
        return (
            <div>
                <img src={this.props.activeImage.urls.small} alt=""/>
                <ul>
                    {imageTags}
                </ul>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    const activeImage = state.activeImage;
    return { activeImage}
};
export default connect(mapStateToProps, null)(ActiveImage)