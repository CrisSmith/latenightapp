import axios from 'axios';
import {GET_FAVORITES, ADD_FAVORITE, DELETE_FAVORITE, FAVORITES_LOADING} from './types';

export function setItemsLoading(){
    return{
        type: FAVORITES_LOADING
    }
};
export const getFavorites = () =>  dispatch => {
    dispatch(setItemsLoading());
    axios.get('/favorites').then(res =>
        dispatch({
           type: GET_FAVORITES,
           value: res.data 
        })
    );
};
export const addFavorite = (item) => dispatch => {
    axios.post('/favorites', item)
    .then(res=>
        dispatch({
            type: ADD_FAVORITE,
            value: res.data
        })
    );
};
export const deleteFavorite = (_id) => dispatch => {
    axios.delete(`/favorites/${_id}`)
    .then(res=>
        dispatch({
            type: DELETE_FAVORITE,
            value: _id
        })
    );
};

/*
acitions without axios
export const getFavorites = () => {
    return {
        type: GET_FAVORITES
    };
};
export const addFavorite = (item) => {
    return {
        type: ADD_FAVORITE,
        value:item
    };
};
export const deleteFavorite = (_id) => {
    return {
        type: DELETE_FAVORITE,
        value: _id
    };
};
*/