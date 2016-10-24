import React, { Component } from 'react';
import autobind from 'react-autobind'

import logo from './logo.svg';
import css from './App.css';
import SubmitMessage from './components/submit-message'
import UsernameModal from './components/username-modal'

const { object, array, string, func } = React.PropTypes

class App extends Component {

  constructor() {
    super()
    autobind(this)
  }

  static propTypes = {
    socket: object.isRequired,
    messages: array,
    currentUser: string.isRequired,
    onUsernameSubmit: func.isRequired
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
      <div className={css.app}>
        <div className={css.appHeader}>
          <img src={logo} className={css.appLogo} alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <ul> {this.renderMessages(this.props.messages)}</ul>
        <SubmitMessage
          onSubmit={this.handleMessageSubmit}/>

        <UsernameModal 
          onSubmit={this.props.onUsernameSubmit}/>
      </div>
    );
  }
}

class AppContainer extends Component {

  constructor(props) {
    super(props)
    autobind(this)
    this.state = {
      currentUser: 'Anonymous',
      messages: []
    }

    this.props.socket.on('chat message', msg => {
      this.setState({
        ...this.state,
        messages: [...this.state.messages, msg]
      })
    })
  }

  handleUsernameSubmit(user) {    
    this.setState({
      ...this.state,
      currentUser: user
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
        onUsernameSubmit={this.handleUsernameSubmit}
      />
    );
  }
}

export default AppContainer;
