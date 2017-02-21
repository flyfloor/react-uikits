const React = require('react')
const _NoticeCenter = require('react-ui-component').NoticeCenter
const NS = require('./base/constant').NS
const klassName = require('./base/util').klassName

const NoticeCenter = React.createClass({
    render() {
        const {props} = this
        return (
            <_NoticeCenter {...props}/>
        )
    }
});

NoticeCenter.init = function(props= {}){
    props.className = klassName(props.className, NS, 'notice-center')
    props.prefix = 'notice'
    return _NoticeCenter.init(props)
}

module.exports = {
    NoticeCenter
}