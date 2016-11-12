const React = require('react')
const _RadioGroup = require('react-ui-component').RadioGroup
const NS = require('./base/constant').NS
const klassName = require('./base/util').klassName

const RadioGroup = React.createClass({
    render() {
        const {props} = this
        let className = klassName(props.className, NS)
        return (
            <_RadioGroup {...props} className={className} />
        )
    }
});

module.exports = {
    RadioGroup
}