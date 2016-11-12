import React, { Component } from 'react'
import {SlideMenu} from 'react-ui-component'
import {NS} from '../constant'
import klassName from '../util/className'

class UISlideMenu extends Component {
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
            <SlideMenu {...props} ref="slide" className={className} />
        )
    }
}


export default UISlideMenu
