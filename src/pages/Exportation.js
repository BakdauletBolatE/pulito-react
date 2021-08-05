import React,{Fragment, Component} from 'react';
import OrderList from '../components/OrderList';
import {getExportationList,setRoute} from '../actions/status';
import { connect } from 'react-redux';

class Exportation extends Component {

    componentDidMount() {
        this.props.setRoute("exportation");
        this.props.getExportationList()
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
                    <OrderList list={this.props.exportationList} ></OrderList>
                    </ul>
            </Fragment>
        );
    } 
}

const mapStateToProps = state => ({
    exportationList: state.status.exportationList,
    routeParam: state.status.route
})

export default connect(mapStateToProps, {getExportationList, setRoute})(Exportation);