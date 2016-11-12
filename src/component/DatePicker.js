import React, { Component } from 'react'
import {DatePicker as _DatePicker} from 'react-ui-component'
import {NS} from '../constant'
import klassName from '../util/className'

export class DatePicker extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {props} = this
        let className = klassName(props.className, NS)
        return (
            <_DatePicker {...props} className={className} />
        )
    }
}
