export const ADD_IMAGES = "ADD_IMAGES";
export const ADD_ACTIVE_IMAGES = "ADD_ACTIVE_IMAGES";
export const ADD_CATEGORIES = "ADD_CATEGORIES";


export const Action = (payload, actionType) => {
    return {
        type: actionType,
        payload
    }
};
// export const addImageAction = (payload) =>  {
//     console.log('payload', payload);
//     return {
//         type: ADD_IMAGES,
//         payload
//     }
// };
// export const addActiveImageAction = (payload) =>  {
//     console.log('payload', payload);
//     return {
//         type: ADD_ACTIVE_IMAGES,
//         payload
//     }
// };
// export const getImages = (page) => {}
