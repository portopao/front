import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route path='/' exact={true} component={ProductList}/>
          <Route path='/detalhes' component={Details} />
          <Route path='/carrinho' component={Cart} />
          <Route component={Default} />
        </Switch>            
      </React.Fragment>
     );
  }
}

export default App;
