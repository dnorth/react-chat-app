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

  componentWillReceiveProps(nextProps) {
    this.props.messages = nextProps.messages
    console.log("UPDATED")
  }

  static propTypes = {
    socket: React.PropTypes.object.isRequired,
    messages: React.PropTypes.array
  };

  handleMessageSubmit(message) {
    this.props.socket.emit('chat message', message)
  }

  renderMessages(messages) {
    return messages.map((message, i) => this.renderMessage(message, i))
  }

  renderMessage(message, index) {
    return (
    <li key={index}>
      <span>{message}</span>
    </li>
    )
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <ul className="messages"> {this.renderMessages(this.props.messages)}</ul>
        <SubmitMessage
          onSubmit={this.handleMessageSubmit}/>
      </div>
    );
  }
}

export default App;
