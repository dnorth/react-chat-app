import React from 'react'
import autobind from 'react-autobind'

import CloseableModal from '../closeable-modal'

export default class UsernameModal extends React.Component {

  constructor() {
    super()
    autobind(this)

    this.state = {
      isOpen: true
    }
  }

  handleClose() {
    this.setState({
      isOpen: false
    })
  }

  render() {
    return (
      <CloseableModal
        isOpen={this.state.isOpen}
        onClose={this.handleClose}>
        <div>Hello Who is this</div>
      </CloseableModal>
    )
  }
}