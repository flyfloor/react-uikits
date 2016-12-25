const React = require('react')
const _Panel = require('react-ui-component').Panel
const NS = require('./base/constant').NS
const klassName = require('./base/util').klassName

const Panel = React.createClass({
    render() {
        const {props} = this
        let className = klassName(props.className, NS)
        return (
            <_Panel {...props} className={className} />
        )
    }
});

module.exports = {
    Panel
}
