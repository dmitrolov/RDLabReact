import React from 'react';
import './search.scss';
import {unsplash} from './unsplash'
import {connect} from "react-redux";
import { addImageAction } from "../../redusers/Search/actions";

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
        }
    };
    searchInputChange = ({ target }) => {
        this.setState({value: target.value});
    };
    searchButtonClick = () => {
        // + unsplash to services
        unsplash.search.photos(this.state.value, 1)
            .then(result => result.json())
            .then(result => {
                const urls = [];
                result.results.forEach(value => {
                    // console.log(value.urls)
                    urls.push(value.urls['small'])
                });
                console.log(urls);
                this.props.addImage(urls);
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
                        onClick={this.searchButtonClick}
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
        addImage(data){
            dispatch(addImageAction(data))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Search)