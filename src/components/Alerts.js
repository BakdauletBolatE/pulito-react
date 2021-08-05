import React, {Component, Fragment} from 'react';
import {withAlert} from 'react-alert';
import {connect} from 'react-redux';

class Alerts extends Component {

    
    componentDidUpdate(prevProps) {
        if (this.props.messages !== prevProps.messages)
        console.log(this.props.messages)
        this.props.alert.success(this.props.messages.msg);
    }
    
  render() {
      return (
        <Fragment></Fragment>
      )
  }
  
}

const mapStateToProps = state => ({
    messages: state.alerts
})

export default connect(mapStateToProps)(withAlert()(Alerts));
