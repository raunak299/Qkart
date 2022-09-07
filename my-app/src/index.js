import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from 'react-router-dom';
import AuthContextProvider from "./components/store/AuthContextProvider";
import AddressContextProvider from "./components/store/AddressContextProvider";



// Call make Server
makeServer();



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <AuthContextProvider>
      <AddressContextProvider>
        < App />
      </AddressContextProvider>
    </AuthContextProvider>
  </BrowserRouter>
);
