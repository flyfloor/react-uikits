import React, { Component } from 'react'
import {Progress as _Progress} from 'react-ui-component'
import {NS} from '../constant'
import klassName from '../util/className'

export class Progress extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {props} = this
        let className = klassName(props.className, NS)
        return (
            <_Progress {...props} className={className} />
        )
    }
}
