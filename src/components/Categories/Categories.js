import React from 'react';
import {connect} from "react-redux";
import { Action, ADD_CATEGORIES } from "../../redusers/Search/actions";
import ImageService from "./../../services/imageService"
import CategoriesContainer from './../CategoriesContainer/CategoriesContainer'

class Categories extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
        };
        this.unsplash = new ImageService();
        console.log(this.unsplash);
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
        console.log("Categories props", this.props);
        this.unsplash.getCollections(this.state.value, this.page).then((result) => {
            console.log(result);
            this.props.addCategoriesDataToStore(result);
        });
        this.page++;
    };
    render() {
        return (
            <div className={"search-container"}>
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