import React, {Component} from 'react';
import Search from "../components/Search/Search";
import PhotoContainer from '../components/PhotoContainer/PhotoContainer'

class Home extends Component {
    render() {
        return (
            <div>
                <Search/>
                <PhotoContainer/>
            </div>
        );
    }
}

export default Home;