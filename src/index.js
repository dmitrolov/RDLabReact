import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from "./components/App";
import { Provider } from 'react-redux';
import {createStore, combineReducers} from "redux";

const initialState ={
    images: []
};

function imagesReducer(state = initialState.images, action) {
    if (action.type === 'ADD_IMAGE') {
        return [
            ...state,
            ...action.payload
        ];
    }
    return state
}
const rootReducer = combineReducers({
    images: imagesReducer
})

const store = createStore(rootReducer);
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
// store.subscribe(() => {
//     console.log('subscribe', store.getState());
// });
//
// store.dispatch({type: 'ADD_IMAGE', url: 'https://google.com'});
// store.dispatch({type: 'ADD_IMAGE', url: 'https://anime.com'});
//
// store.getState().forEach(item => {
//     console.log(item)
// })