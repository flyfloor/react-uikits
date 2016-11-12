import React, { Component } from 'react'
import {Pin as _Pin} from 'react-ui-component'
import {NS} from '../constant'
import klassName from '../util/className'

export class Pin extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {props} = this
        let className = klassName(props.className, NS)
        return (
            <_Pin {...props} className={className} />
        )
    }
}
