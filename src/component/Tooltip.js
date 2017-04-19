const wrapComponent = require('./base/util').wrapComponent
const Cmp = require('react-ui-component').Tooltip

module.exports = {
    Tooltip: wrapComponent(Cmp)
}