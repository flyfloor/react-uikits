const wrapComponent = require('./base/util').wrapComponent
const Cmp = require('react-ui-component').Pin

module.exports = {
    Pin: wrapComponent(Cmp)
}