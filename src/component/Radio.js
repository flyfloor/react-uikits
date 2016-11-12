import React, { Component } from 'react'
import {Radio} from 'react-ui-component'
import {NS} from '../constant'
import klassName from '../util/className'

class UIRadio extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {props} = this
        let className = klassName(props.className, NS)
        return (
            <Radio {...props} className={className} />
        )
    }
}


export default UIRadio
