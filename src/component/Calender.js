import React, { Component } from 'react'
import {Calender} from 'react-ui-component'
import {NS} from '../constant'
import klassName from '../util/className'

class UICalender extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {props} = this
        let className = klassName(props.className, NS)
        return (
            <Calender {...props} className={className} />
        )
    }
}


export default UICalender
