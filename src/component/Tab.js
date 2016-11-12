import React, { Component } from 'react'
import {Tab as _Tab} from 'react-ui-component'
import {NS} from '../constant'
import klassName from '../util/className'

export class Tab extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {props} = this
        let className = klassName(props.className, NS)
        return (
            <_Tab {...props} className={className} />
        )
    }
}
