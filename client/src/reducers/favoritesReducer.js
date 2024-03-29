import {GET_FAVORITES, ADD_FAVORITE, FAVORITES_LOADING, DELETE_FAVORITE} from '../actions/types'

const initialState = {
     favorites:[],
     loading:false
}


export default function(state = initialState, action){
    switch(action.type){
        case FAVORITES_LOADING:
            return{
                ...state,
                loading: true
            };
        case GET_FAVORITES:
            return {
                ...state,
                favorites: action.value,
                loading:false
            };
        case ADD_FAVORITE:
            return {
                ...state,
                favorites: [...state.favorites, action.value]
            };
        case DELETE_FAVORITE:
            return {
                ...state, 
                favorites: state.favorites.filter(item => item._id !== action.value)
            };
        default:
            return state;
    };
}

