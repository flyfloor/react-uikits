import React, { Component } from 'react'
import {Carousel as _Carousel} from 'react-ui-component'
import {NS} from '../constant'
import klassName from '../util/className'

export class Carousel extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {props} = this
        let className = klassName(props.className, NS)
        return (
            <_Carousel {...props} className={className} />
        )
    }
}
