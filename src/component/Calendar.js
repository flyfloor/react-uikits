const React = require('react')
const _Calendar = require('react-ui-component').Calendar
const NS = require('./base/constant').NS
const klassName = require('./base/util').klassName

const Calendar = props => {
    let className = klassName(props.className, NS)
    return (
        <_Calendar {...props} className={className} />
    )
}

module.exports = {
    Calendar
}