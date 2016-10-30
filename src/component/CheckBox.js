import React, { Component } from 'react'
import {CheckBox} from 'react-ui-component'
import {NS} from '../constant'
import klassName from '../util/className'

class UICheckBox extends Component {
    render() {
        const {props} = this
        let className = klassName(props.className, NS)
        return (
            <CheckBox {...props} className={className} />
        )
    }
}


export default UICheckBox
