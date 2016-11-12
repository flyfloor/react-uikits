import React, { Component } from 'react'
import {Tooltip} from 'react-ui-component'
import {NS} from '../constant'
import klassName from '../util/className'

class UITooltip extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {props} = this
        let className = klassName(props.className, 'tooltip', NS)
        return (
            <Tooltip {...props} className={className} />
        )
    }
}


export default UITooltip
