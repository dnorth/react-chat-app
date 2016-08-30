import React, { Component } from 'react';
import autobind from 'react-autobind'

import logo from './logo.svg';
import './App.css';
import SubmitMessage from './components/submit-message'

class App extends Component {

  constructor() {
    super()
    autobind(this)
  }

  static propTypes = {
    socket: React.PropTypes.object.isRequired
  };

  handleMessageSubmit(message) {
    this.props.socket.emit('chat message', message)
    console.log(this.props.socket)
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <ul className="messages"></ul>
        <SubmitMessage
          onSubmit={this.handleMessageSubmit}/>
      </div>
    );
  }
}

export default App;
