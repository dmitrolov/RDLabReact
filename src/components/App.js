import React, {Component} from 'react';
import {connect} from 'react-redux';
import Search from "./Search/Search";
import PhotoContainer from './PhotoContainer/PhotoContainer'

class App extends Component {
    render() {
        console.log(this.props.testStore);
        return (
            <div>
                <Search/>
                <PhotoContainer/>
            </div>
        );
    }
}

export default connect(
    state => ({
        testStore: state
    }),
    dispatch => ({}),
)(App);