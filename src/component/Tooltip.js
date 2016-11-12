import React, { Component } from 'react'
import {Tooltip as _Tooltip} from 'react-ui-component'
import {NS} from '../constant'
import klassName from '../util/className'

export class Tooltip extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {props} = this
        let className = klassName(props.className, 'tooltip', NS)
        return (
            <_Tooltip {...props} className={className} />
        )
    }
}
