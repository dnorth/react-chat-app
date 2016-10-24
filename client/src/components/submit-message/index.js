import React from 'react'
import autobind from 'react-autobind'

import css from './index.css'

export default class SubmitMessage extends React.Component {
  constructor() {
    super()
    autobind(this)
  }

  static propTypes = {
    onSubmit: React.PropTypes.func.isRequired
  };

  handleSubmit(evt) {
    evt.preventDefault()
    this.props.onSubmit(this.refs.message.value)
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit} className={css.container}>
        <input className={css.inputBox} id="message" ref="message" autoComplete="off" />
        <button className={css.send}>Send</button>
      </form>
    )
  }
}
