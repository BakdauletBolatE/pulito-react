import React, {Fragment, Component} from 'react';
import CustomSelect from './Select';

class OrderItem extends Component {
    
    render() {
        const {totalPrice, id,name, exportationStatus, cleanStatus,statusDelivery} = this.props.orderItem;
        return (
            <Fragment>
            <th><strong>{name}</strong></th>
            <td>
                <CustomSelect id={id} 
                            name={name}
                            exportationStatus={exportationStatus}
                            cleanStatus={cleanStatus}
                            statusDelivery={statusDelivery}
                ></CustomSelect>
            </td>
            <td>
                Итоговая цена: <strong>{totalPrice}ТГ</strong>
            </td>
            </Fragment>
        )
    }

}

export default OrderItem;