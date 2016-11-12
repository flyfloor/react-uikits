import React, { Component } from 'react'
import {CheckBox as _CheckBox} from 'react-ui-component'
import {NS} from '../constant'
import klassName from '../util/className'

export class CheckBox extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {props} = this
        let className = klassName(props.className, NS)
        return (
            <_CheckBox {...props} className={className} />
        )
    }
}
