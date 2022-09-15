import Home from "./components/Home/Home";
import { Route, Switch, Redirect } from 'react-router-dom';
import React from "react";
import Authentication from './components/Authentication/Authentication';
import Products from "./components/Products/Products";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Profile from "./components/Profile/Profile";




function App() {

  return (
    <React.Fragment>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/home' />
        </Route>

        <Route path='/home' exact>
          <Home />
        </Route>

        <Route path='/authentication' exact>
          {/* {authContx.login ? <Redirect to='/profile' /> : <Authentication />} */}
          <Authentication />
        </Route>

        <Route path='/profile' exact>
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        </Route>


        <Route path='/products' exact>
          <PrivateRoute>
            <Products />
          </PrivateRoute>
        </Route>


        <Route path='*'>
          <Redirect to='/' />
        </Route>

      </Switch>


    </React.Fragment>

  );
}

export default App;
