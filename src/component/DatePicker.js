import React, { Component } from 'react'
import {DatePicker} from 'react-ui-component'
import {NS} from '../constant'
import klassName from '../util/className'

class UIDatePicker extends Component {
    render() {
        const {props} = this
        let className = klassName(props.className, NS)
        return (
            <DatePicker {...props} className={className} />
        )
    }
}


export default UIDatePicker
