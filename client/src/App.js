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

class AppContainer extends Component {

  constructor(props) {
    super(props)
    autobind(this)
    this.state = {
      messages: []
    }

    this.props.socket.on('chat message', msg => {
      this.setState({
        messages: [...this.state.messages, msg]
      })
    })
  }

  static propTypes = {
    socket: React.PropTypes.object.isRequired
  };

  render() {
    return (
      <App
        messages={this.state.messages}
        socket={this.props.socket}
      />
    );
  }
}

export default AppContainer;
