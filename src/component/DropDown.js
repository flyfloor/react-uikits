const wrapComponent = require('./base/util').wrapComponent
const Cmp = require('react-ui-component').DropDown

let DropDown = wrapComponent(Cmp)

DropDown.defaultProps = {
    placeHolder: '下拉选择...'
}

module.exports = {
    DropDown
}
