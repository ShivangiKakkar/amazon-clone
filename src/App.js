import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <h1>Checkout</h1>
          </Route>
          <Route path="/login">
            <h1>Login page</h1>
          </Route>
          {/* THIS IS THE DEFAULT ROUTE */}
          <Route path="/"> 
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>  
  );
}

export default App;


 {/* localhost.com */}

      {/* WE NEED React router  (below)*/}
      {/* localhost.com/login */}
      {/* localhost.com/checkout */}