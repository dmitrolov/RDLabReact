import React from 'react';
import PropTypes from 'prop-types';
import './search.scss';
import {connect} from "react-redux";
import { Action, ADD_IMAGES } from "../../redusers/Search/actions";
import ImageService from "./../../services/imageService"

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
        };
        this.unsplash = new ImageService();
        this.page = 1;
        window.addEventListener("scroll", () => {
            if (window.innerHeight + document.documentElement.scrollTop -16 >= document.documentElement.offsetHeight) {
                this.searchButtonClick();
            }
        })
    };
    // add props types and props default
    searchInputChange = ({ target }) => {
        this.setState({value: target.value});
    };
    searchButtonClick = () => {
        this.unsplash.getImages(this.state.value, this.page).then((result) => {
            this.props.addImageDataToStore(result);
        });
        this.page++;
    };
    render() {
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