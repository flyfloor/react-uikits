const React = require('react')
const _Notice = require('react-ui-component').Notice
const NS = require('./base/constant').NS
const klassName = require('./base/util').klassName

const Notice = props => {
    return (
        <_Notice {...props} className={klassName(props.className, NS)} />
    )
}

module.exports = {
    Notice
}