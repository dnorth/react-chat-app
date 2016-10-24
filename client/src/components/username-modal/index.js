import React from 'react'
import autobind from 'react-autobind'

import CloseableModal from '../closeable-modal'

const { func } = React.PropTypes

export default class UsernameModal extends React.Component {

  constructor() {
    super()
    autobind(this)

    this.state = {
      isOpen: true,
      username: 'Anonymous'
    }
  }

  static propTypes = {
    onSubmit: func.isRequired
  }

  handleClose() {
    this.setState({
      isOpen: false
    })
  }

  handleChange(evt) {
    this.setState({
      ...this.state,
      username: evt.target.value
    })
  }

  handleSubmit(evt) {
    evt.preventDefault()
    this.handleClose()
    this.props.onSubmit(this.state.username)
  }

  render() {
    return (
      <CloseableModal
        isOpen={this.state.isOpen}
        onClose={this.handleClose}>
        <form onChange={this.handleChange} 
              onSubmit={this.handleSubmit}>
          <input type="text" 
                 value={this.state.value}
                 placeholder="Anonymous" />
          <input type="submit" />
        </form>
      </CloseableModal>
    )
  }
}