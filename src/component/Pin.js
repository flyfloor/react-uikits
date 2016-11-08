import React, { Component } from 'react'
import {Pin} from 'react-ui-component'
import {NS} from '../constant'
import klassName from '../util/className'

class UIPin extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {props} = this
        let className = klassName(props.className, NS)
        return (
            <Pin {...props} className={className} />
        )
    }
}

export default UIPin
