const React = require('react')
const _DatePicker = require('react-ui-component').DatePicker
const NS = require('./base/constant').NS
const klassName = require('./base/util').klassName

const DatePicker = props => {
    return (
        <_DatePicker {...props} className={klassName(props.className, NS)} />
    )
}

module.exports = {
    DatePicker
}
