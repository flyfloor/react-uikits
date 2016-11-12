const React = require('react')
const _Item = require('react-ui-component').Item
const NS = require('./base/constant').NS
const klassName = require('./base/util').klassName

const Item = React.createClass({
    render() {
        const {props} = this
        let className = klassName(props.className, NS)
        return (
            <_Item {...props} className={className} />
        )
    }
});

module.exports = {
    Item
}