
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import  './Tokenget/Global';

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import DataApi from "./Fetch/DataApi";
import Registration from "./Fetch/Registration";
import Container from 'react-bootstrap/Container';
import Login from "./Fetch/Login";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Employee from "./ForTest/Employee";
import { Provider } from "react-redux";
import {store} from "./REDUXX/Store/Store";
import Testify from "./ReduxToolkit/Toolkit_with_thunk/Views/Testify";
import Agtemp from "./AgGrid/Agtemp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  <Provider store={store}>
  
     <App />
    {/* <Testify/> */}
    
  </Provider>
    {/* <DataApi></DataApi> */}
    {/* <Container>
      <Registration />
      <Login/>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
      />
      <Employee/>
    </Container> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
