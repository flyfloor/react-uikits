const React = require('react')
const _TimeInput = require('react-ui-component').TimeInput
const NS = require('./base/constant').NS
const klassName = require('./base/util').klassName

const TimeInput = React.createClass({
    render() {
        const {props} = this
        let className = klassName(props.className, NS)
        return (
            <_TimeInput {...props} className={className} />
        )
    }
});

module.exports = {
    TimeInput
}