import React, {Component} from 'react';
import './photo-container.scss'
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import { Action, ADD_ACTIVE_IMAGES } from "../../redusers/Search/actions";

class PhotoContainer extends Component {
    static propTypes = {
        images: PropTypes.object.isRequired
    };
    render() {
        const images = this.props.images.results;
        let imagesDOM = null;
        if (images !== undefined){
            imagesDOM = images.map(({id, urls, tags}) => {
                return <Link to={"/active/"}>
                    <img
                        key={id + new Date().getTime()}
                        src={urls.small}
                        className={'photo-container__item'}
                        onClick={() => {
                            this.props.addActiveImage({id, urls, tags})
                        }}
                    />
                </Link>
            });
        }
        return (
            <div>
                {imagesDOM}
            </div>

        );
    }
}
const mapStateToProps = (state) => {
    const images = state.images;
    const activeImage = state.activeImage;
    return { images, activeImage}
};

const mapDispatchToProps = (dispatch) => {
    return{
        addActiveImage(data){
            console.log('data', data);
            dispatch(Action(data, ADD_ACTIVE_IMAGES))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotoContainer)