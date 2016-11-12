import React, { Component } from 'react'
import {FlashMessage as _FlashMessage} from 'react-ui-component'
import {NS} from '../constant'
import klassName from '../util/className'

export class Toast extends Component {
    constructor(props) {
        super(props);
    }
    open(){
        this.refs.fm.open()
    }
    render() {
        const {props} = this
        let className = klassName(props.className, NS)
        return (
            <_FlashMessage ref="fm" {...props} className={className} />
        )
    }
}

Toast.defaultProps = {
    close: <i className="dot icon">close</i>
}
