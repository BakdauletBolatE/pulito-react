 import {GET_ORDERS, CHANGE_STATUS_DELIVERY,CHANGE_EXPORTATION_STATUS,CHANGE_CLEAN_STATUS} from '../actions/types.js';

 const initialState = {
     orders: []
 }

 const orders = (state = initialState, action) => {
    switch (action.type){
        case GET_ORDERS:
            return {
                ...state,
                orders: action.payload
            }
        case CHANGE_EXPORTATION_STATUS:
            return {
                ...state
            }
        case CHANGE_STATUS_DELIVERY:
            return {
                ...state
            }
        case CHANGE_CLEAN_STATUS:
            return {
                ...state
            }
        default:
            return state;
    }
 }

 export default orders;