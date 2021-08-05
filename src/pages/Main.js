import React, {Component, Fragment} from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Exportation from './Exportation';
import Clean from './Clean';
import Delivery from './Delivery';
import Done from './Done';
import Navigation from '../components/navigation';
import '../style.css';


class Main extends Component {
  render() {
      return (
          <BrowserRouter >
            <Fragment>
              <div className="main">
                  <div className="container">
                    
                    <Navigation></Navigation>
                    <div className="status-container">
                    <Route path="/exportation" component={Exportation}/>
                    <Route path="/clean" component={Clean}/>
                    <Route path="/delivery" component={Delivery}/>
                    <Route path="/done" component={Done}/>
                    </div>
                </div>
              </div>
            </Fragment>
          </BrowserRouter>
      );
  }
  
}

export default Main;
