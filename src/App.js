import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function App() {
  const [{ user }, dispatch] = useStateValue();
  // useEffect <<< Powerful
  //  A piece of code which runs on a given condition
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //user is logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        })
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    return () => {
      // Any cleanup operations going in here...
      unsubscribe();
    }
  }, []);

  console.log(user);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
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