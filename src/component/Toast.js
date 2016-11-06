import React, { Component } from 'react'
import {FlashMessage} from 'react-ui-component'
import {NS} from '../constant'
import klassName from '../util/className'

class UIToast extends Component {
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
            <FlashMessage ref="fm" {...props} className={className} />
        )
    }
}

UIToast.defaultProps = {
    close: <i className="dot icon">close</i>
}


export default UIToast
