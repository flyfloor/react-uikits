import React, { Component } from 'react'
import {DropDown} from 'react-ui-component'
import {NS} from '../constant'
import klassName from '../util/className'

class UIDropDown extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {props} = this
        let className = klassName(NS, props.className)
        return (
            <DropDown {...props} className={className} />
        )
    }
}

UIDropDown.defaultProps = {
    placeHolder: '下拉选择...'
}


export default UIDropDown
