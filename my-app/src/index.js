import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from 'react-router-dom';
import AuthContextProvider from "./store/AuthContextProvider";
import AddressContextProvider from './store/AddressContextProvider'
import { Provider } from 'react-redux';
import store from './store/index-store'
import CartContextProvider from "./store/CartContextProvider";



// Call make Server
makeServer();



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store} >
      <AuthContextProvider>
        <CartContextProvider>
          <AddressContextProvider>
            < App />
          </AddressContextProvider>
        </CartContextProvider>
      </AuthContextProvider>
    </Provider>
  </BrowserRouter>
);
