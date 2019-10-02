import {combineReducers} from 'redux';
import itemReducer from './itemReducer';
import favoritesReducer from './favoritesReducer';


export default combineReducers ({
    item: itemReducer,
    favorites: favoritesReducer
});