import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const socket = io();

ReactDOM.render(
  <App
    socket= {socket}/>,
  document.getElementById('root')
);
