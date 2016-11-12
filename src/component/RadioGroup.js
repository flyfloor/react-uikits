import React, { Component } from 'react'
import {RadioGroup} from 'react-ui-component'
import {NS} from '../constant'
import klassName from '../util/className'

class UIRadioGroup extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {props} = this
        let className = klassName(props.className, NS)
        return (
            <RadioGroup {...props} className={className} />
        )
    }
}


export default UIRadioGroup
