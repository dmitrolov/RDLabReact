import React, {Component} from 'react';
import './photo-container.scss'

const PhotoContainer = (props) => {
    const images = props.imageUrls.map(img => {
        return <img key={Math.random()} src={img} className={'photo-container__item'}/>
    });
    return (
        <div className={'photo-container'}>
            {images}
        </div>
    );
};

export default PhotoContainer;