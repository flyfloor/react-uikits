import React, { Component } from 'react'
import {Modal} from 'react-ui-component'
import {NS} from '../constant'
import klassName from '../util/className'

class UIModal extends Component {
    constructor(props) {
        super(props);
    }
    open(){
        this.refs.modal.open()
    }
    render() {
        const {props} = this
        let className = klassName(props.className, NS)
        return (
            <Modal {...props} ref='modal' className={className} />
        )
    }
}

UIModal.defaultProps = {
    confirm: <button className={`${NS} blue button`}>确认</button>,
    cancel: <button className={`${NS} button`}>取消</button>,
    close: <i className={`${NS} icon`}>close</i>
}

export default UIModal
