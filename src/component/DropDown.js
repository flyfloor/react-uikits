import React, { Component } from 'react'
import {DropDown as _DropDown} from 'react-ui-component'
import {NS} from '../constant'
import klassName from '../util/className'

export class DropDown extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {props} = this
        let className = klassName(NS, props.className)
        return (
            <_DropDown {...props} className={className} />
        )
    }
}

DropDown.defaultProps = {
    placeHolder: '下拉选择...'
}
