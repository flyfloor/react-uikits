const React = require('react')
const _Tooltip = require('react-ui-component').Tooltip
const NS = require('./base/constant').NS
const klassName = require('./base/util').klassName

const Tooltip = props => {
    return (
        <_Tooltip {...props} className={klassName(props.className, 'tooltip', NS)} />
    )
}

module.exports = {
    Tooltip
}
