const React = require('react')
const _NoticeCenter = require('react-ui-component').NoticeCenter
const NS = require('./base/constant').NS
const klassName = require('./base/util').klassName

const NoticeCenter = React.createClass({
    addNotice(notice){
        if (!notice.close) {
            notice.close = <i className={`${NS} icon`}>close</i>
        }
        this.refs.notice.addNotice(notice)
    },
    render() {
        const {props} = this
        let className = klassName(props.className, NS)
        return (
            <_NoticeCenter {...props} className={className} ref="notice"/>
        )
    }
});

module.exports = {
    NoticeCenter
}