import React, { Component } from 'react'
import {RadioGroup as _RadioGroup} from 'react-ui-component'
import {NS} from '../constant'
import klassName from '../util/className'

export class RadioGroup extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {props} = this
        let className = klassName(props.className, NS)
        return (
            <_RadioGroup {...props} className={className} />
        )
    }
}
