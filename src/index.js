import React from 'react';
import ReactDOM from 'react-dom';
//import './index.scss';
import Home from "./components/App";
import { BrowserRouter } from 'react-router-dom';
//<editor-fold desc="to store">
import App from "./components/App";
import { Provider } from 'react-redux';
import {createStore} from "redux";
import rootReducer from './redusers/rootReducer'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Search from "./components/Search/Search";
import PhotoContainer from "./components/PhotoContainer/PhotoContainer";
import ActiveImage from "./components/ActiveImage/ActiveImage"

const store = createStore(rootReducer);
//</editor-fold>

// ReactDOM.render(
//     <Provider store={store}>
//         <Home />

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/active/">Active Image</Link>
                        </li>
                        <li>
                            <Link to="/PhotoContainer/">PhotoContainer</Link>
                        </li>
                    </ul>
                </nav>

                <Route path="/" exact component={App} />
                <Route path={"/active/"} component={ActiveImage} />
                <Route path="/PhotoContainer/" component={PhotoContainer} />
            </div>
        </Router>
    </Provider>,
    document.getElementById('root')
);