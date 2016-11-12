const React = require('react')
const _Pin = require('react-ui-component').Pin
const NS = require('./base/constant').NS
const klassName = require('./base/util').klassName

const Pin = React.createClass({
    render() {
        const {props} = this
        let className = klassName(props.className, NS)
        return (
            <_Pin {...props} className={className} />
        )
    }
});

module.exports = {
    Pin
}
