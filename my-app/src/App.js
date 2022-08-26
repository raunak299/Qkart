import Home from "./components/Home/Home";
import { Route, Switch, Redirect } from 'react-router-dom';
import React from "react";
import Authentication from './components/Authentication/Authentication';


function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/home' />
        </Route>
        <Route path='/home' >
          <Home />
        </Route>
        <Route path='/authentication'>
          <Authentication />
        </Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
