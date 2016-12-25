const React = require('react')
const _TimePicker = require('react-ui-component').TimePicker
const NS = require('./base/constant').NS
const klassName = require('./base/util').klassName

const TimePicker = React.createClass({
    render() {
        const {props} = this
        let className = klassName(props.className, NS)
        return (
            <_TimePicker {...props} className={className} />
        )
    }
});

module.exports = {
    TimePicker
}