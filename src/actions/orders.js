import axios from 'axios';
import { GET_ORDERS,CHANGE_EXPORTATION_STATUS,CHANGE_CLEAN_STATUS,CHANGE_STATUS_DELIVERY } from './types';
import { createMessages } from './alerts';
const mainUrl = 'http://127.0.0.1:8000';

//GET ORDERS

export const getOrders = () => dispatch => {
    axios.get(mainUrl+'/api/orders/')
    .then(res => {
        dispatch({
            type: GET_ORDERS,
            payload: res.data
        });
    })
    .catch( err => console.log(err))
}

export const changeExportationStatus = (selectId, orderId, name) => dispatch => {
    console.log(selectId, orderId);
    axios.patch(mainUrl+`/api/orders/${orderId}/`,{exportationStatus: selectId})
    .then(res =>{
        if (selectId == 2) {
            dispatch(
                createMessages( {msg: `Заказ: ${name}: перемещен в корзину Чистку` })
            )
        }
        
        dispatch({
            type: CHANGE_EXPORTATION_STATUS,
            payload:res.data
        })
    }
    )
}

export const changeCleanStatus = (selectId, orderId, name) => dispatch => {
    console.log(selectId, orderId);
    axios.patch(mainUrl+`/api/orders/${orderId}/`,{cleanStatus: selectId})
    .then(res =>{
        if (selectId == 2) {
            dispatch(
                createMessages( {msg: `Заказ: ${name}: перемещен в корзину Доставки` })
            )
        }
        dispatch({
            type: CHANGE_CLEAN_STATUS,
            payload:res.data
        })
    }
    )
}

export const changeDeliveryStatus = (selectId, orderId, name) => dispatch => {
    console.log(selectId, orderId);
    axios.patch(mainUrl+`/api/orders/${orderId}/`,{statusDelivery: selectId})
    .then(res =>{
        if (selectId == 2) {
            dispatch(
                createMessages( {msg: `Заказ: ${name}: готова` })
            )
        }
        
        dispatch({
            type: CHANGE_STATUS_DELIVERY,
            payload:res.data
        })
    }
    )
}