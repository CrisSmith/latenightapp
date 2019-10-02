import {GET_FAVORITES, ADD_FAVORITE, FAVORITES_LOADING, DELETE_FAVORITE} from '../actions/types'

const initialState = {
     favorites:[
        {_id:67, name: "Reducer Favorite 1"},
        {_id:777, name:"Reducer Fav 2"},
        {_id:877, name:"Reducer Fav 3"},
        {_id:807, name:"Reducer Fav 4"},
     ],
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

