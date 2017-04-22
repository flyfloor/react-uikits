const React = require('react')
const wrapComponent = require('./base/util').wrapComponent
const Cmp =require('react-ui-component').DateTimePicker

let DateTimePicker = wrapComponent(Cmp)

DateTimePicker.defaultProps = {
    confirm: <span>确认</span>
}

module.exports = {
    DateTimePicker
}
