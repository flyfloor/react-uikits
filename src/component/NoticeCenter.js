import React, { Component } from 'react'
import {NoticeCenter as _NoticeCenter} from 'react-ui-component'
import {NS} from '../constant'
import klassName from '../util/className'

export class NoticeCenter extends Component {
    constructor(props) {
        super(props);
    }
    addNotice(notice){
        if (!notice.close) {
            notice.close = <i className={`${NS} icon`}>close</i>
        }
        this.refs.notice.addNotice(notice)
    }
    render() {
        const {props} = this
        let className = klassName(props.className, NS)
        return (
            <_NoticeCenter {...props} className={className} ref="notice"/>
        )
    }
}
