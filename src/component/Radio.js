const React = require('react')
const _Radio = require('react-ui-component').Radio
const NS = require('./base/constant').NS
const klassName = require('./base/util').klassName

const Radio = props => {
    return (
        <_Radio {...props} className={klassName(props.className, NS)} />
    )
}

module.exports = {
    Radio
}
