import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/default.css'
import './assets/css/style.css'
import './assets/css/plugin.css'

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import store from './store';
import $ from 'jquery';

window.$ = $;
window.jQuery = $;

require('./assets/js/plugin');
require('bootstrap/dist/js/bootstrap')

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
