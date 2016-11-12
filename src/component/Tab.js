import React, { Component } from 'react'
import {Tab} from 'react-ui-component'
import {NS} from '../constant'
import klassName from '../util/className'

class UITab extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {props} = this
        let className = klassName(props.className, NS)
        return (
            <Tab {...props} className={className} />
        )
    }
}


export default UITab
