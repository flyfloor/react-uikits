const React = require('react')
const _Notice = require('react-ui-component').Notice
const NS = require('./base/constant').NS
const klassName = require('./base/util').klassName

const Notice = React.createClass({
    render() {
        const {props} = this
        let className = klassName(props.className, NS)
        return (
            <_Notice {...props} className={className} />
        )
    }
});

module.exports = {
    Notice
}