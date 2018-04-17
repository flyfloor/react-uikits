const React = require('react')
const NS = require('./base/constant').NS
const wrapComponent = require('./base/util').wrapComponent
const Cmp = require('react-ui-component').ConfirmBox

let ConfirmBox = wrapComponent(Cmp)

ConfirmBox.defaultProps = {
    confirm: <button className={`${NS} tiny primary button`}>确认</button>,
    cancel: <button className={`${NS} tiny button`}>取消</button>,
}

module.exports = {
    ConfirmBox
}