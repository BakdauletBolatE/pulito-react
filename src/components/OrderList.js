import React, {Fragment, Component} from 'react';
import OrderItem from './OrderItem';


class OrderList extends Component {


    render() {
        const orderItems = this.props.list.map(orderItem=>(
            <tr>
            <OrderItem key={orderItem.id} orderItem={orderItem} />
            </tr>
        ))
        return (
            <Fragment>
                <table class="table table-hover table-responsive">
                <thead>
                    <tr>
                    <th scope="col">Номер заказа: </th>
                    <th scope="col">Статус</th>
                    <th scope="col">Итоговая цена</th>
                    </tr>
                </thead>
                <tbody>
                   {orderItems}          
                </tbody>
                </table>
            </Fragment>
        )
    }

}


export default OrderList;