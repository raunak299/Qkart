import Home from "./Pages/Home/Home";
import { Route, Switch, Redirect } from 'react-router-dom';
import React from "react";
import Authentication from './Pages/Authentication/Authentication'
import Products from "./Pages/Products/Products";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Profile from "../src/Pages/Profile/Profile";
import ProductDetails from "./Pages/ProductsPage/ProductDetails";
import Cart from "./Pages/Cart/Cart";
import OrderPlaced from "./Pages/OrderPlaced/OrderPlaced";
import Wishlist from "./Pages/Wishlist/WishList";
import ShippingAddress from "./Pages/Shipping/ShippingAddress";




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
          {/* <PrivateRoute> */}
          <Products />
          {/* </PrivateRoute> */}
        </Route>

        <Route path='/product-details/:productId' exact>
          <ProductDetails />
        </Route>

        <Route path='/cart' exact>
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        </Route>

        <Route path='/orderPlaced'>
          <OrderPlaced />
        </Route>

        <Route path='/wishlist'>
          <PrivateRoute>
            <Wishlist />
          </PrivateRoute>
        </Route>

        <Route path='/shipping'>
          <PrivateRoute>
            <ShippingAddress />
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
