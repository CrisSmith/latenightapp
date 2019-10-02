import {GET_FAVORITES, ADD_FAVORITE, DELETE_FAVORITE, FAVORITES_LOADING} from './types';


export function setItemsLoading(){
    return{
        type: FAVORITES_LOADING
    }
}
export const getFavorites = () => {
    return {
        type: GET_FAVORITES
    };
};
export const addFavorite = (favorite) => {
    return {
        type: ADD_FAVORITE,
        value:favorite
    };
};
export const deleteFavorite = (_id) => {
    return {
        type: DELETE_FAVORITE,
        value: _id
    };
};
