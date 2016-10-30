import React, { Component } from 'react'
import {CheckBoxGroup} from 'react-ui-component'
import {NS} from '../constant'
import klassName from '../util/className'

class UICheckBoxGroup extends Component {
    render() {
        const {props} = this
        let className = klassName(props.className, NS)
        return (
            <CheckBoxGroup {...props} className={className} />
        )
    }
}


export default UICheckBoxGroup
