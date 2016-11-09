import React, { Component } from 'react'
import {Progress} from 'react-ui-component'
import {NS} from '../constant'
import klassName from '../util/className'

class UIProgress extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {props} = this
        let className = klassName(props.className, NS)
        return (
            <Progress {...props} className={className} />
        )
    }
}


export default UIProgress
