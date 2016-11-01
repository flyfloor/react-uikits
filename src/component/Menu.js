import React, { Component } from 'react'
import {Menu} from 'react-ui-component'
import {NS} from '../constant'
import klassName from '../util/className'

class UIMenu extends Component {
    render() {
        const {props} = this
        let className = klassName(props.className, NS)
        return (
            <Menu {...props} className={className} />
        )
    }
}


export default UIMenu
