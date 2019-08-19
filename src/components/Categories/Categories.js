import React from 'react';
import {connect} from "react-redux";
import { Action, ADD_CATEGORIES } from "../../redusers/Search/actions";
import ImageService from "./../../services/imageService"
import CategoriesContainer from './../CategoriesContainer/CategoriesContainer'
import Navigation from "../Navigation/Navigation";

class Categories extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            titles: [],
        };
        this.unsplash = new ImageService();
        this.unsplash.getPopularCollections().then((result) => {
            this.setState({titles: result})
        })
    };
    // add props types and props default
    searchInputChange = ({ target }) => {
        this.setState({value: target.value});
    };
    selectChange = ({ target }) => {
        this.unsplash.getCollections(target.value, 1).then((result) => {
            this.props.addCategoriesDataToStore(result);
        });
    };
    searchButtonClick = () => {
        console.log("Categories props", this.props);
        this.unsplash.getCollections(this.state.value, 1).then((result) => {
            console.log(result);
            this.props.addCategoriesDataToStore(result);
        });
    };
    render() {
        const selectOptions = this.state.titles.map((value, index) => {
            return <option key={index + value} value={value.title}>{value.title}</option>
        });
        return (
            <div className={"search-container"}>
                <Navigation/>
                <h1 className={"search-container__item"}>Categories search</h1>
                <div className="search-container__item">
                    <input
                        className={"input"}
                        placeholder={"Search categories"}
                        onChange={this.searchInputChange}
                        value={this.state.value}
                    />
                    <button
                        className={"search"}
                        onClick={this.searchButtonClick.bind(this)}
                    >Search</button>
                    <select name="" id="" onChange={this.selectChange} defaultValue={'0'}>
                        <option hidden disabled value="0">Choose category...</option>
                        {selectOptions}
                    </select>
                </div>
                <CategoriesContainer/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { categories } = state;
    return { categories}
};

const mapDispatchToProps = (dispatch) => {
    return{
        addCategoriesDataToStore(data){
            dispatch(Action(data, ADD_CATEGORIES))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories)