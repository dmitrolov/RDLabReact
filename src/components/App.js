import React, {Component} from 'react';
import Search from "./Search/Search";
import PhotoContainer from './PhotoContainer/PhotoContainer'

class App extends Component {
    render() {
        return (
            <div>
                <Search/>
                <PhotoContainer/>
            </div>
        );
    }
}

export default App;