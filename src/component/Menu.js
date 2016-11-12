const React = require('react')
const _Menu = require('react-ui-component').Menu
const NS = require('./base/constant').NS
const klassName = require('./base/util').klassName

const Menu = React.createClass({
    render() {
        const {props} = this
        let className = klassName(props.className, NS)
        return (
            <_Menu {...props} className={className} />
        )
    }
});

module.exports = {
    Menu
}