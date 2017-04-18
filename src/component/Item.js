const React = require('react')
const _Item = require('react-ui-component').Item
const NS = require('./base/constant').NS
const klassName = require('./base/util').klassName

const Item = props => {
    return (
        <_Item {...props} className={klassName(props.className, NS)} />
    )
}

module.exports = {
    Item
}