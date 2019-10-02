import {GET_ITEMS,ADD_ITEM, ITEMS_LOADING, DELETE_ITEM} from '../actions/types'

const initialState ={
     items:[
         {_id:3000, name:"Kerbey Lane"},
         {_id:4000, name:"Waffle House"},
         {_id:5000, name:"Denny's North"},
         {_id:6000, name:"24 South"},
         {_id:9000, name:"Magnolia"},
     ],
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

