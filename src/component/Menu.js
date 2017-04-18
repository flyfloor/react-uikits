const React = require('react')
const _Menu = require('react-ui-component').Menu
const NS = require('./base/constant').NS
const klassName = require('./base/util').klassName

const Menu = props => {
    return (
        <_Menu {...props} className={klassName(props.className, NS)} />
    )
}

module.exports = {
    Menu
}