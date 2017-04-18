const React = require('react')
const _RadioGroup = require('react-ui-component').RadioGroup
const NS = require('./base/constant').NS
const klassName = require('./base/util').klassName

const RadioGroup = props => {
    return (
        <_RadioGroup {...props} className={klassName(props.className, NS)} />
    )
}

module.exports = {
    RadioGroup
}