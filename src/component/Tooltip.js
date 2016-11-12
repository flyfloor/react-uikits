const React = require('react')
const _Tooltip = require('react-ui-component').Tooltip
const NS = require('./base/constant').NS
const klassName = require('./base/util').klassName

const Tooltip = React.createClass({
    render() {
        const {props} = this
        let className = klassName(props.className, 'tooltip', NS)
        return (
            <_Tooltip {...props} className={className} />
        )
    }
});

module.exports = {
    Tooltip
}
