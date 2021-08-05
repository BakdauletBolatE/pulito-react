import { Provider } from 'react-redux';
import React, {Component, Fragment} from 'react';
import store from './store';
import { BrowserRouter, Route } from "react-router-dom";
import {Provider as AlerProvider} from 'react-alert';
import AlertTemplate from 'react-alert-template-basic'
import Header from './components/header';
import Main from './pages/Main';
import Alerts from './components/Alerts';
import Login from './pages/accounts/login';
import Register from './pages/accounts/register';
import PrivateRoute from './common/PrivateRoute';
import './style.css';


const alertOptions = {
  timeout: 3000,
  position: 'top right'
}

class App extends Component {
  render() {
      return (
        <Provider store={store}>
          <AlerProvider template={AlertTemplate} {...alertOptions}>
          <BrowserRouter >
            <Fragment>
              <Header></Header>
              <Alerts></Alerts>
              <PrivateRoute exact path="/" component={Main}/>
              <Route path="/login" component={Login}/> 
              <Route path="/register" component={Register}/> 
            </Fragment>
          </BrowserRouter>
          </AlerProvider>
        </Provider> 
      );
  }
  
}

export default App;
