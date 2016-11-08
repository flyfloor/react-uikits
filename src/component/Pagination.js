import React, { Component } from 'react'
import {Pagination} from 'react-ui-component'
import {NS} from '../constant'
import klassName from '../util/className'

class UIPagination extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {props} = this
        let className = klassName(props.className, NS)
        return (
            <Pagination {...props} className={className} />
        )
    }
}

UIPagination.defaultProps = {
    prev: <span>上一页</span>,
    next: <span>下一页</span>,
}

export default UIPagination
