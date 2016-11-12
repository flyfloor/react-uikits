import React, { Component } from 'react'
import {Menu as _Menu} from 'react-ui-component'
import {NS} from '../constant'
import klassName from '../util/className'

export class Menu extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {props} = this
        let className = klassName(props.className, NS)
        return (
            <_Menu {...props} className={className} />
        )
    }
}
