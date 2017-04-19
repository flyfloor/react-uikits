const wrapComponent = require('./base/util').wrapComponent
const Cmp = require('react-ui-component').DatePicker

module.exports = {
    DatePicker: wrapComponent(Cmp)
}

