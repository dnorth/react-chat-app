import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './App';
import io from 'socket.io-client';

const socket = io();

ReactDOM.render(
  <AppContainer
    socket={socket} />,
  document.getElementById('root')
);
