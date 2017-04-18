const React = require('react')
const _Progress = require('react-ui-component').Progress
const NS = require('./base/constant').NS
const klassName = require('./base/util').klassName

const Progress = props => {
    return (
        <_Progress {...props} className={klassName(props.className, NS)} />
    )
}

module.exports = {
    Progress
}
