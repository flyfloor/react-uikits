const React = require('react')
const _Panel = require('react-ui-component').Panel
const NS = require('./base/constant').NS
const klassName = require('./base/util').klassName

const Panel = props => {
    return (
        <_Panel {...props} className={klassName(props.className, NS)} />
    )
}

module.exports = {
    Panel
}
