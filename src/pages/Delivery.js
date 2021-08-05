import React,{Fragment, Component} from 'react';
import OrderList from '../components/OrderList';
import {getDeliveryList,setRoute} from '../actions/status';
import { connect } from 'react-redux';

class Delivery extends Component {

    componentDidMount() {
        this.props.setRoute("delivery");
        this.props.getDeliveryList();
    }

    componentWillUnmount () {
        console.log("unmmount");
    }
    render() {
        return (
             <Fragment>
                   <ul className="list-group">
                   <div className="input-group flex-nowrap mb-4">
                        <span className="input-group-text" id="addon-wrapping">Поиск</span>
                        <input type="text" class="form-control" placeholder="Искать по номеру заказа" aria-label="Искать по номеру заказа" aria-describedby="addon-wrapping"/>
                    </div>
                    <OrderList list={this.props.deliveryList} ></OrderList>
                    </ul>
            </Fragment>
        );
    } 
}

const mapStateToProps = state => ({
    deliveryList: state.status.deliveryList,
    routeParam: state.status.route
})

export default connect(mapStateToProps, {getDeliveryList, setRoute})(Delivery);