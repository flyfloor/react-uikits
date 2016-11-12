const React = require('react')
const _Tab = require('react-ui-component').Tab
const NS = require('./base/constant').NS
const klassName = require('./base/util').klassName

const Tab = React.createClass({
    render() {
        const {props} = this
        let className = klassName(props.className, NS)
        return (
            <_Tab {...props} className={className} />
        )
    }
});

module.exports = {
    Tab
}