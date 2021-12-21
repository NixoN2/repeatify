import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {HashRouter} from "react-router-dom";
import store from "./store";
import {Provider} from "react-redux";
import AuthProvider from "./auth/AuthProvider/AuthProvider";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter basename="/">
      <Provider store={store}>
        <AuthProvider>
          <App />
        </AuthProvider>
      </Provider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

