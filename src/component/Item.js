import React, { Component } from 'react'
import {Item} from 'react-ui-component'
import {NS} from '../constant'
import klassName from '../util/className'

class UIItem extends Component {
    render() {
        const {props} = this
        let className = klassName(props.className, NS)
        return (
            <Item {...props} className={className} />
        )
    }
}


export default UIItem
