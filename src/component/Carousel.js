import React, { Component } from 'react'
import {Carousel} from 'react-ui-component'
import {NS} from '../constant'
import klassName from '../util/className'

class UICarousel extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {props} = this
        let className = klassName(props.className, NS)
        return (
            <Carousel {...props} className={className} />
        )
    }
}


export default UICarousel
