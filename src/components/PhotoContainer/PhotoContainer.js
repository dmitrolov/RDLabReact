import React, {Component} from 'react';
import './photo-container.scss'
import {connect} from "react-redux";

// const PhotoContainer = (props) => {
//     const images = props.imageUrls.map(img => {
//         return <img key={Math.random()} src={img} className={'photo-container__item'}/>
//     });
//     console.log()
//     return (
//         <div className={'photo-container'}>
//             {images}
//         </div>
//     );
// };

class PhotoContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props)
        const images = this.props.images.map(img => {
            return <img key={Math.random()} src={img} className={'photo-container__item'}/>
        });
        return (
            <div>
                {images}
            </div>
        );
    }
}

export default connect(
    state => ({
        images: state.images
    }),
    dispatch => ({}),
)(PhotoContainer);