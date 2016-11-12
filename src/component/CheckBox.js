const React = require('react')
const _CheckBox = require('react-ui-component').CheckBox
const NS = require('./base/constant').NS
const klassName = require('./base/util').klassName

const CheckBox = React.createClass({
    render() {
        const {props} = this
        let className = klassName(props.className, NS)
        return (
            <_CheckBox {...props} className={className} />
        )
    }
});

module.exports = {
    CheckBox
}
