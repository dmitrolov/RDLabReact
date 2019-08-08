import React from 'react';
import PropTypes from 'prop-types';
import './search.scss';
import {connect} from "react-redux";
import { Action, ADD_IMAGES } from "../../redusers/Search/actions";
import ImageService from "./../../services/imageService"
const Unsplash = require('unsplash-js').default;

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
        }
    };
    // add props types and props default
    searchInputChange = ({ target }) => {
        this.setState({value: target.value});
    };
    searchButtonClick = () => {
        const unsplash = new ImageService();
        unsplash.getImages(this.state.value, 1).then((result) => {
            this.props.addImageDataToStore(result)
        });
    };
    render() {
        console.log(this.props);
        return (
            <div className={"search-container"}>
                <h1 className={"search-container__item"}>Image search</h1>
                <div className="search-container__item">
                    <input
                        className={"input"}
                        placeholder={"Search image"}
                        onChange={this.searchInputChange}
                        value={this.state.value}
                    />
                    <button
                        className={"search"}
                        onClick={this.searchButtonClick.bind(this)}
                    >Search</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { images } = state;
    return { images}
};

const mapDispatchToProps = (dispatch) => {
    return{
        addImageDataToStore(data){
            dispatch(Action(data, ADD_IMAGES))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Search)