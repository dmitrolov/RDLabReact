import {combineReducers} from "redux";
import imagesReducer from './Search/imageReduser';

const rootReducer = combineReducers({
    images: imagesReducer,
});

export default rootReducer;