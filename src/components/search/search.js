import React from 'react';
import ReactDOM from 'react-dom';
import './search.scss';

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        }
    };
    searchInputChange = ({ target }) => {
        console.log(target.value);
        this.setState({value: target.value});
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
                    >Search</button>
                </div>

            </div>
        );
    }
}