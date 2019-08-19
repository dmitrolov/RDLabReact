import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Categories from "./components/Categories/Categories";
import ActiveImage from "./components/ActiveImage/ActiveImage"
import Search from "./components/Search/Search";

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <Route path="/" exact component={Search} />
                <Route path={"/active/:id"} component={ActiveImage} />
                <Route path="/Categories/" component={Categories} />
            </div>
        </Router>
    </Provider>,
    document.getElementById('root')
);