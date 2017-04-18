const React = require('react')
const _TimePicker = require('react-ui-component').TimePicker
const NS = require('./base/constant').NS
const klassName = require('./base/util').klassName

const TimePicker = props => {
    return (
        <_TimePicker {...props} className={klassName(props.className, NS)} />
    )
}

module.exports = {
    TimePicker
}