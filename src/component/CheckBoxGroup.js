const React = require('react')
const _CheckBoxGroup = require('react-ui-component').CheckBoxGroup
const NS = require('./base/constant').NS
const klassName = require('./base/util').klassName

const CheckBoxGroup = props => {
    return (
        <_CheckBoxGroup {...props} className={klassName(props.className, NS)} />
    )
}

module.exports = {
    CheckBoxGroup
}