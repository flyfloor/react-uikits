const React = require('react')
const _DropDown = require('react-ui-component').DropDown
const NS = require('./base/constant').NS
const klassName = require('./base/util').klassName

const DropDown = React.createClass({
    getDefaultProps() {
        return {
            placeHolder: '下拉选择...'
        }
    },
    render() {
        const {props} = this
        let className = klassName(props.className, NS)
        return (
            <_DropDown {...props} className={className} />
        )
    }
});

module.exports = {
    DropDown
}
