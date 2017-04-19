'use strict';

var wrapComponent = require('./base/util').wrapComponent;
var Cmp = require('react-ui-component').TimePicker;

module.exports = {
    TimePicker: wrapComponent(Cmp)
};