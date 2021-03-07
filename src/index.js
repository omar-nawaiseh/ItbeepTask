import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MainContextProvider from './context/MainContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './bootstrap.min.css';

ReactDOM.render(
  <MainContextProvider>
    <App />
  </MainContextProvider>,
  document.getElementById('root')
);
