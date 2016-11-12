const React = require('react')
const _Progress = require('react-ui-component').Progress
const NS = require('./base/constant').NS
const klassName = require('./base/util').klassName

const Progress = React.createClass({
    render() {
        const {props} = this
        let className = klassName(props.className, NS)
        return (
            <_Progress {...props} className={className} />
        )
    }
});

module.exports = {
    Progress
}
