import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from 'react-router-dom';
import AuthContextProvider from "./components/store/AuthContextProvider";
import AddressContextProvider from "./components/store/AddressContextProvider";
import { Provider } from 'react-redux';
import store from '../src/components/store/index-store'



// Call make Server
makeServer();



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store} >
      <AuthContextProvider>
        <AddressContextProvider>
          < App />
        </AddressContextProvider>
      </AuthContextProvider>
    </Provider>
  </BrowserRouter>
);
