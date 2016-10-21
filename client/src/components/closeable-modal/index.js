import React from 'react'
import ReactModal from 'react-modal'

import css from './index.css'

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
            <div className={css.content}>
                {this.props.children}
            </div>
        </ReactModal>
        )
    }
}