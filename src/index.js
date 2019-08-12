import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App";
import { Provider } from 'react-redux';
import store from './store'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PhotoContainer from "./components/PhotoContainer/PhotoContainer";
import ActiveImage from "./components/ActiveImage/ActiveImage"

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