import React, { Component } from 'react';
import autobind from 'react-autobind'

import logo from './logo.svg';
import './App.css';
import SubmitMessage from './components/submit-message'
import UsernameModal from './components/username-modal'

class App extends Component {

  constructor() {
    super()
    autobind(this)
  }

  static propTypes = {
    socket: React.PropTypes.object.isRequired,
    messages: React.PropTypes.array,
    currentUser: React.PropTypes.string.isRequired
  };

  handleMessageSubmit(message) {
    this.props.socket.emit('chat message', 
    {
      user: this.props.currentUser,
      text: message
    })
  }

  renderMessages(messages) {
    return messages.map((message, i) => this.renderMessage(message, i))
  }

  renderMessage(message, index) {
    return (
    <li key={index}>
      <span>{message.user}: </span><span>{message.text}</span>
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

        <UsernameModal />
      </div>
    );
  }
}

class AppContainer extends Component {

  constructor(props) {
    super(props)
    autobind(this)
    this.state = {
      currentUser: 'Danny',
      messages: []
    }

    this.props.socket.on('chat message', msg => {
      this.setState({
        ...this.state,
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
        currentUser={this.state.currentUser}
        messages={this.state.messages}
        socket={this.props.socket}
      />
    );
  }
}

export default AppContainer;
