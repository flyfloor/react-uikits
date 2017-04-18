const React = require('react')
const _TimeInput = require('react-ui-component').TimeInput
const NS = require('./base/constant').NS
const klassName = require('./base/util').klassName

const TimeInput = props => {
    return (
        <_TimeInput {...props} className={klassName(props.className, NS)} />
    )
}

module.exports = {
    TimeInput
}