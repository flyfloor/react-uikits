const wrapComponent = require('./base/util').wrapComponent
const Cmp = require('react-ui-component').TimeInput

module.exports = {
    TimeInput: wrapComponent(Cmp)
}