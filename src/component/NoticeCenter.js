const React = require('react')
const _NoticeCenter = require('react-ui-component').NoticeCenter
const NS = require('./base/constant').NS
const klassName = require('./base/util').klassName

const NoticeCenter = props => {
    return (
        <_NoticeCenter {...props}/>
    )
}

NoticeCenter.init = function(props= {}){
    props.className = klassName(props.className, NS, 'notice-center')
    props.prefix = 'notice'
    if (!props.close) {
        props.close = <i className={`${NS} icon`}>close</i>
    }
    return _NoticeCenter.init(props)
}

module.exports = {
    NoticeCenter
}