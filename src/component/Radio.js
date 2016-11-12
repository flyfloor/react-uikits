import React, { Component } from 'react'
import {Radio as _Radio} from 'react-ui-component'
import {NS} from '../constant'
import klassName from '../util/className'

export class Radio extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {props} = this
        let className = klassName(props.className, NS)
        return (
            <_Radio {...props} className={className} />
        )
    }
}
