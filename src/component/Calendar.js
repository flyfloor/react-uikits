const wrapComponent = require('./base/util').wrapComponent
const Cmp = require('react-ui-component').Calendar

module.exports = {
    Calendar: wrapComponent(Cmp)
}

