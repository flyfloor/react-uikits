const React = require('react')
const _DatePicker = require('react-ui-component').DatePicker
const NS = require('./base/constant').NS
const klassName = require('./base/util').klassName

const DatePicker = React.createClass({
    render() {
        const {props} = this
        let className = klassName(props.className, NS)
        return (
            <_DatePicker {...props} className={className} />
        )
    }
});

module.exports = {
    DatePicker
}
