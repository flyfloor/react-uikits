const React = require('react')
const _Radio = require('react-ui-component').Radio
const NS = require('./base/constant').NS
const klassName = require('./base/util').klassName

const Radio = React.createClass({
    render() {
        const {props} = this
        let className = klassName(props.className, NS)
        return (
            <_Radio {...props} className={className} />
        )
    }
});

module.exports = {
    Radio
}
