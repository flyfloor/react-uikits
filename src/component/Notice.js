import React, { Component } from 'react'
import {Notice as _Notice} from 'react-ui-component'
import {NS} from '../constant'
import klassName from '../util/className'

export class Notice extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {props} = this
        let className = klassName(props.className, NS)
        return (
            <_Notice {...props} className={className} />
        )
    }
}
