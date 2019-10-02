import {GET_ITEMS, ADD_ITEM, DELETE_ITEM} from './types';

export const getItems = () => {
    return {
        type: GET_ITEMS
    };
};
export const addItem = () => {
    return {
        type: ADD_ITEM
    };
};
export const deleteItem = (_id) => {
    return {
        type: DELETE_ITEM,
        value: _id
    };
};