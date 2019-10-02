import {GET_ITEMS,ADD_ITEM, ITEMS_LOADING, DELETE_ITEM} from '../actions/types'

const initialState ={
     items:[],
     loading:false
}

export default function(state = initialState, action){
    switch(action.type){
        case ITEMS_LOADING:
            return{
                ...state,
                loading: true
            };
        case GET_ITEMS:
            return {
                ...state,
                items: action.value,
                loading:false
            };
        case ADD_ITEM:
            return {
                ...state,
                items: [...state.items, action.value]
            };
        case DELETE_ITEM:
            return {
                ...state, 
                items: state.items.filter(item => item._id !== action.value)
            };
        default:
            return state;
    };
}

