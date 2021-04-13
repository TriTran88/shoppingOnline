import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import myPreducers from './reducers/index'
import './index.css';

const store = createStore(myPreducers);

ReactDOM.render(
  <Provider store={store}>
    < App />
  </Provider>,
  document.getElementById('root')
);