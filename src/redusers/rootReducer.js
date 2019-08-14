import {combineReducers} from "redux";
import { imagesReducer, activeImagesReducer, categoriesReducer } from './Search/imageReduser';

const rootReducer = combineReducers({
    images: imagesReducer,
    categories: categoriesReducer,
    activeImage: activeImagesReducer
});

export default rootReducer;