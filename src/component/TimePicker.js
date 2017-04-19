const wrapComponent = require('./base/util').wrapComponent
const Cmp = require('react-ui-component').TimePicker

module.exports = {
    TimePicker: wrapComponent(Cmp)
}