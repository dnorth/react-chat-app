import React from 'react'
import ReactModal from 'react-modal'

const { bool, func } = React.PropTypes

export default class CloseableModal extends React.Component {
    
    static propTypes = {
        isOpen: bool,
        onClose: func.isRequired
    }

    render() {
        return (
            <ReactModal
            isOpen={this.props.isOpen}
            onRequestClose={this.props.onClose}>
            <div>
                {this.props.children}
            </div>
        </ReactModal>
        )
    }
}