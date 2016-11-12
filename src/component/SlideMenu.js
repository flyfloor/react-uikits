import React, { Component } from 'react'
import {SlideMenu as _SlideMenu} from 'react-ui-component'
import {NS} from '../constant'
import klassName from '../util/className'

export class SlideMenu extends Component {
    constructor(props) {
        super(props);
    }
    open(){
        this.refs.slide.open()
    }
    close(){
        this.refs.slide.close()
    }
    render() {
        const {props} = this
        let className = klassName(props.className, NS)
        return (
            <_SlideMenu {...props} ref="slide" className={className} />
        )
    }
}
