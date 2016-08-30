import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const socket = io();

let state = {
  messages: ['wow', 'very message']
}

socket.on('chat message', msg => {
  state.messages.push(msg)
  console.log(state.messages)
})

ReactDOM.render(
  <App
    socket= {socket}
    messages={state.messages}/>,
  document.getElementById('root')
);
