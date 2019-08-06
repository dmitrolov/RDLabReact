import initialState from '../initialState'
import { ADD_IMAGES } from "./actionTypes";

function imagesReducer(state = initialState.images, {type, payload}) {
    switch (type) {
        case ADD_IMAGES: {
            return [...state, ...payload]
        }

        default:{
            return state
        }

    }
}

export default imagesReducer