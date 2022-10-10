import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
// import { applyMiddleware, compose, createStore } from 'redux';
import reducers from './redux/reducers';
// import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';





const root = ReactDOM.createRoot(document.getElementById('root'));

// const store=createStore(reducers, compose(applyMiddleware(thunk)));

const store=configureStore({reducer: reducers})

root.render(
  <Provider store={store}>

    <App />

  </Provider>


);
