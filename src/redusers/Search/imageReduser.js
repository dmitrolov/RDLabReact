import initialState from '../initialState'
import {ADD_ACTIVE_IMAGES, ADD_IMAGES, ADD_CATEGORIES, REMOVE_IMAGES} from "./actions";

export function imagesReducer(state = initialState.images, {type, payload}) {
    switch (type) {
        case ADD_IMAGES: {
            console.log('ADD_IMAGES', payload);

            const newState =  {...payload};
            newState.results = [...state.results, ...payload.results];
            return newState
        }
        case REMOVE_IMAGES: {
            console.log('REMOVE_IMAGES', null);
            return initialState.images
        }
        default:{
            return state
        }

    }
}
export function categoriesReducer(state = initialState.categories, {type, payload}) {
    switch (type) {
        case ADD_CATEGORIES: {
            console.log('ADD_CATEGORIES', payload);

            // const newState =  {...payload};
            // newState.results = [...state.results, ...payload.results];
            // return newState;
            return payload;
        }
        default:{
            return state
        }

    }
}

export function activeImagesReducer(state = initialState.activeImage, {type, payload}) {
    switch (type) {
        case ADD_ACTIVE_IMAGES: {
            console.log('ADD_ACTIVE_IMAGES', payload);
            return payload
        }
        default:{
            return state
        }

    }
}
