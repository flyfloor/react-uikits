import React, { Component } from 'react'
import {CheckBoxGroup as _CheckBoxGroup} from 'react-ui-component'
import {NS} from '../constant'
import klassName from '../util/className'

export class CheckBoxGroup extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {props} = this
        let className = klassName(props.className, NS)
        return (
            <_CheckBoxGroup {...props} className={className} />
        )
    }
}
