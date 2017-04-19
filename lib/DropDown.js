'use strict';

var wrapComponent = require('./base/util').wrapComponent;
var Cmp = require('react-ui-component').DropDown;

var DropDown = wrapComponent(Cmp);

DropDown.defaultProps = {
    placeHolder: '下拉选择...'
};

module.exports = {
    DropDown: DropDown
};