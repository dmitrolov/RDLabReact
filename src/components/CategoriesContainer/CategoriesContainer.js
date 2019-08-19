import React, {Component} from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import './categories-container.scss'
import {Link} from "react-router-dom";
import { Action, ADD_ACTIVE_IMAGES } from "../../redusers/Search/actions";

class CategoriesContainer extends Component {
    static propTypes = {
        categories: PropTypes.object.isRequired
    };
    render() {
        const categories = this.props.categories.results;
        const imagesDOM = categories.map(({title, tags, cover_photo, preview_photos}) => {
            const tagsList = tags.map((value) => {
                return <li>{value.title}</li>
            });
            const preview_photosList = preview_photos.map((value) => {
                return <img
                    className="preview-photos__item"
                    src={value.urls.small}
                    alt=""
                />
            });
            return <div key={Math.random()}>
                <h1>{title}</h1>
                <div className="cover-container">
                    <img className="cover-container__photo" src={cover_photo.urls.small} alt="cover_photo"/>
                    <ul>
                        <h3>Tags</h3>
                        {tagsList}
                    </ul>
                </div>
                <div className="preview-photos">
                    {preview_photosList}
                </div>
            </div>
        });
        return (
            <div>
                {imagesDOM}
            </div>

        );
    }
}
const mapStateToProps = (state) => {
    const categories = state.categories;
    return { categories}
};

// const mapDispatchToProps = (dispatch) => {
//     return{
//         addActiveImage(data){
//             console.log('data', data);
//             dispatch(Action(data, ADD_ACTIVE_IMAGES))
//         }
//     }
// };

export default connect(mapStateToProps, null)(CategoriesContainer)