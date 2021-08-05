import React, { Fragment } from 'react';
import { getExportationList, getCleanList, getDeliveryList } from '../actions/status';
import { changeExportationStatus, changeCleanStatus, changeDeliveryStatus } from '../actions/orders';
import { connect } from 'react-redux';

const doptions = [
    { value: 0,  label: 'Ожидается', color:'silver' },
    { value: 1,  label: 'В пути',    color:'green'  },
    { value: 2,  label: 'Готово' ,   color:'green'  }
]
const coptions = [
  { value: 0,  label: 'Ожидается', color:'silver'  },
  { value: 1,  label: 'В чистке',  color:'green'   },
  { value: 2,  label: 'Готово',    color:'green'   }
]

class CustomSelect extends React.Component {

  
  
  changeExportation = (e) => {
    this.props.changeExportationStatus( e.target.value, this.props.id, this.props.name) 
    setTimeout(()=>{
        this.props.getExportationList();
    },1500)
  }

  changeClean = (e) => {
    this.props.changeCleanStatus( e.target.value, this.props.id, this.props.name) 
    setTimeout(()=>{
        this.props.getCleanList();
    },1500)

  }

  changeDelivery = (e) => {

    this.props.changeDeliveryStatus( e.target.value, this.props.id, this.props.name) 
    setTimeout(()=>{
        this.props.getDeliveryList();
    },1500)
      
  }

  render() {
    console.log(this.props.routeParam)
    
    const {id, routeParam, exportationStatus, cleanStatus, statusDelivery} = this.props;
    console.log(`Товар=${id}, Доставка: ${statusDelivery},Вывоз: ${exportationStatus},Чистка: ${cleanStatus}`)
    let select,status,eLabel = {},cLabel = {},dLabel = {};
    
      if (exportationStatus === 0) { eLabel.title = "Ожидается"; eLabel.class = "waiting" }
      else if (exportationStatus === 1) { eLabel.title = "В пути"; eLabel.class = "procces" }
      else if (exportationStatus === 2){ eLabel.title = "Готово"; eLabel.class = "done" }

      if (cleanStatus === 0) { cLabel.title = "Ожидается";  cLabel.class = "waiting" }
      else if (cleanStatus === 1) { cLabel.title = "В чистке"; cLabel.class = "procces" }
      else if (cleanStatus === 2) { cLabel.title = "Готово"; cLabel.class = "done" }

      if (statusDelivery === 0) { dLabel.title = "Ожидается"; dLabel.class = "waiting" }
      else if (statusDelivery === 1) { dLabel.title = "В пути"; dLabel.class = "procces" }
      else if (statusDelivery === 2){ dLabel.title = "Готово"; dLabel.class = "done" }



    if (routeParam === "exportation") {
      status = (<div> <span className={eLabel.class}> </span> Статус вывоза: </div>)
      select = (<select value={exportationStatus} onChange={this.changeExportation} className="form-select" aria-label="Default select example">
                {doptions.map(option=>(
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>)
    }
    if (routeParam === "clean") {
      status = (<div><span className={cLabel.class}> </span> Статус чистки: </div>)
      select = (<select value={cleanStatus} onChange={this.changeClean}  className="form-select" aria-label="Default select example">
                {coptions.map(option=>(
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>)
    }
    if (routeParam === "delivery") {
      status = (<div> <span className={dLabel.class}> </span> Статус доставки: </div>)
      select = (<select value={statusDelivery} onChange={this.changeDelivery}  className="form-select" aria-label="Default select example">
                {doptions.map(option=>(
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>)
    }
    return (
      <Fragment>
        <div className="order__select-container">{status}
        
        <div className="order__select">
        {select}</div></div> 
      </Fragment>
       
    );
  }
}

const mapStateToProps = state =>({
  routeParam: state.status.route
})

export default connect(mapStateToProps, {getExportationList, getCleanList, getDeliveryList, changeExportationStatus, changeCleanStatus, changeDeliveryStatus})(CustomSelect);