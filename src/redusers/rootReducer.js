import {combineReducers} from "redux";
import { imagesReducer, activeImagesReducer } from './Search/imageReduser';

const rootReducer = combineReducers({
    images: imagesReducer,
    activeImage: activeImagesReducer
});

export default rootReducer;