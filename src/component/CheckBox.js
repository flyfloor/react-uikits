const React = require('react')
const _CheckBox = require('react-ui-component').CheckBox
const NS = require('./base/constant').NS
const klassName = require('./base/util').klassName

const CheckBox = props => {
    return (
        <_CheckBox {...props} className={klassName(props.className, NS)} />
    )
}

module.exports = {
    CheckBox
}
