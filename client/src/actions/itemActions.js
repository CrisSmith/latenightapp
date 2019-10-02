import axios from 'axios';
import {GET_ITEMS, ADD_ITEM, ITEMS_LOADING, DELETE_ITEM} from './types';

export const setItemsLoading = () => {
    return{
        type: ITEMS_LOADING
    }
};
export const getItems = () =>  dispatch => {
    dispatch(setItemsLoading());
    axios.get('/items')
    .then(res =>
        dispatch({
           type: GET_ITEMS,
           value: res.data 
        })
    );
};
export const addItem = (item) => dispatch => {
    axios.post('/items', item)
    .then(res=>
        dispatch({
            type: ADD_ITEM,
            value: res.data
        })
    );
};
export const deleteItem = (_id) => dispatch => {
    axios.delete(`/items/${_id}`)
    .then(res=>
        dispatch({
            type: DELETE_ITEM,
            value: _id
        })
    );
};

/*
actions without axios:

export const getItems = () => {
    return {
        type: GET_ITEMS
    };
};
export const addItem = (item) => {
    return {
        type: ADD_ITEM, 
        value: item
    };
};
export const deleteItem = (_id) => {
    return {
        type: DELETE_ITEM,
        value: _id
    };
};
*/