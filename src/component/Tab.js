const React = require('react')
const _Tab = require('react-ui-component').Tab
const NS = require('./base/constant').NS
const klassName = require('./base/util').klassName

const Tab = props => {
    return (
        <_Tab {...props} className={klassName(props.className, NS)} />
    )
}

module.exports = {
    Tab
}