import {GET_ITEMS, ADD_ITEM, ITEMS_LOADING, DELETE_ITEM} from './types';

export function setItemsLoading(){
    return{
        type: ITEMS_LOADING
    }
};
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