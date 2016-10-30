import React, { Component } from 'react'
import {ConfirmBox} from 'react-ui-component'
import {NS} from '../constant'
import klassName from '../util/className'

class UIConfirmBox extends Component {
    constructor(props){
        super(props)
    }

    render() {
        const {props} = this
        let className = klassName(NS, props.className)
        return (
            <ConfirmBox {...props} className={className} />
        )
    }
}

UIConfirmBox.defaultProps = {
    confirmBtn: <button className={`${NS} tiny blue button`}>ok</button>,
    cancelBtn: <button className={`${NS} tiny button`}>cancel</button>,
}


export default UIConfirmBox
