const React = require('react')
const _DateTimePicker = require('react-ui-component').DateTimePicker
const NS = require('./base/constant').NS
const klassName = require('./base/util').klassName

const DateTimePicker = React.createClass({
    getDefaultProps() {
        return {
            confirm: <span>确认</span>
        }
    },
    render() {
        const {props} = this
        let className = klassName(props.className, NS)
        return (
            <_DateTimePicker {...props} className={className} />
        )
    }
});

module.exports = {
    DateTimePicker
}
