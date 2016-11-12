const React = require('react')
const _CheckBoxGroup = require('react-ui-component').CheckBoxGroup
const NS = require('./base/constant').NS
const klassName = require('./base/util').klassName

const CheckBoxGroup = React.createClass({
    render() {
        const {props} = this
        let className = klassName(props.className, NS)
        return (
            <_CheckBoxGroup {...props} className={className} />
        )
    }
});

module.exports = {
    CheckBoxGroup
}