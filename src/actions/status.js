import axios from 'axios';
import {GET_EXPORTATION_LIST, GET_CLEAN_LIST, GET_DELIVERY_LIST, GET_DONE_LIST, SET_ROUTE} from '../actions/types.js';

const mainUrl = 'http://127.0.0.1:8000';

//GET ORDERS

export const getExportationList = () => dispatch => {
    axios.get(mainUrl+`/api/order-by-status/1`)
    .then(res => {
        dispatch({
            type: GET_EXPORTATION_LIST,
            payload: res.data
        });
    })
    .catch( err => console.log(err))
}
export const getCleanList = () => dispatch => {
    axios.get(mainUrl+`/api/order-by-status/2`)
    .then(res => {
        dispatch({
            type: GET_CLEAN_LIST,
            payload: res.data
        });
    })
    .catch( err => console.log(err))
}
export const getDeliveryList = () => dispatch => {
    axios.get(mainUrl+`/api/order-by-status/3`)
    .then(res => {
        dispatch({
            type: GET_DELIVERY_LIST,
            payload: res.data
        });
    })
    .catch( err => console.log(err))
}
export const getDoneList = () => dispatch => {
    axios.get(mainUrl+`/api/order-by-status/4`)
    .then(res => {
        dispatch({
            type: GET_DONE_LIST,
            payload: res.data
        });
    })
    .catch( err => console.log(err))
}
export const setRoute = (id) => dispatch => {
    dispatch({
        type: SET_ROUTE,
        payload: id
    })
}
