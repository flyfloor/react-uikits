import React, { Component } from 'react'
import {Pagination as _Pagination} from 'react-ui-component'
import {NS} from '../constant'
import klassName from '../util/className'

export class Pagination extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {props} = this
        let className = klassName(props.className, NS)
        return (
            <_Pagination {...props} className={className} />
        )
    }
}

Pagination.defaultProps = {
    prev: <span>上一页</span>,
    next: <span>下一页</span>,
}
