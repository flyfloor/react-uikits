const React = require('react')
const _Pin = require('react-ui-component').Pin
const NS = require('./base/constant').NS
const klassName = require('./base/util').klassName

const Pin = props => {
    return (
        <_Pin {...props} className={klassName(props.className, NS)} />
    )
}

module.exports = {
    Pin
}
