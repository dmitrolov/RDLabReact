import React from 'react';
import PropTypes from 'prop-types';
import './search.scss';
import {connect} from "react-redux";
import { Action, ADD_IMAGES, REMOVE_IMAGES } from "../../redusers/Search/actions";
import ImageService from "./../../services/imageService"
import PhotoContainer from "../PhotoContainer/PhotoContainer";
import Navigation from './../Navigation/Navigation'

export class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
        };
        this.unsplash = new ImageService();
        console.log(this.unsplash);
        this.page = 1;
        window.addEventListener("scroll", () => {
            if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight) {
                this.getImages();
            }
        })
    };

    componentDidMount() {
        this.props.removeImageDataFromStore();
        this.setState({value: 'popular'}, () => {
            this.getImages()
        });

    }

    // add props types and props default
    searchInputChange = ({ target }) => {
        this.setState({value: target.value});
    };
    searchButtonClick = () => {
        this.props.removeImageDataFromStore();
        this.getImages()
    };
    getImages = () => {
        this.unsplash.getImages(this.state.value, this.page).then((result) => {
            this.props.addImageDataToStore(result);
        });
        this.page++;
    };
    render() {
        this.props.images.results[0] && console.log('!!!!!!!!!!!!!!!',this.props.images.results);
        return (
            <div>
                <div className={'background'} style={this.props.images.results[0] && {backgroundImage: `url(${this.props.images.results[0].urls.full})`}}>
                    <div className={"search-container"}>
                        <Navigation className={"search-container__item"}/>
                        <h1 className={"search-container__item"}>Image search</h1>
                        <div className="search-container__item">
                            <input
                                className={"input"}
                                placeholder={"Search image"}
                                onClick={() => {this.setState({value: ""})}}
                                onChange={this.searchInputChange}
                                value={this.state.value}
                            />
                            <button
                                className={"search"}
                                onClick={this.searchButtonClick.bind(this)}
                            >Search</button>
                        </div>
                    </div>
                </div>
                <PhotoContainer/>
            </div>
        );
    }
}
Search.propTypes = {
    value: PropTypes.string
};
Search.defaultProps = {

};
const mapStateToProps = (state) => {
    const { images } = state;
    return { images}
};

const mapDispatchToProps = (dispatch) => {
    return{
        addImageDataToStore(data){
            dispatch(Action(data, ADD_IMAGES))
        },
        removeImageDataFromStore() {
            dispatch(Action(null, REMOVE_IMAGES))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Search)