import React from 'react';
import ReactDOM from 'react-dom';
//import './index.scss';
import Home from "./components/App";
import { Provider } from 'react-redux';
//<editor-fold desc="to store">
import {createStore} from "redux";
import rootReducer from './redusers/rootReducer'

const store = createStore(rootReducer);
//</editor-fold>

ReactDOM.render(
    <Provider store={store}>
        <Home />
    </Provider>,
    document.getElementById('root')
);