import React, { Component } from 'react'
import {Calender as _Calender} from 'react-ui-component'
import {NS} from '../constant'
import klassName from '../util/className'

export class Calender extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {props} = this
        let className = klassName(props.className, NS)
        return (
            <_Calender {...props} className={className} />
        )
    }
}
