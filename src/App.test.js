import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './component/home'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render( < Home / > , div);
});