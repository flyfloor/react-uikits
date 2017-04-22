'use strict';

var wrapComponent = require('./base/util').wrapComponent;
var Cmp = require('react-ui-component').DatePicker;

module.exports = {
    DatePicker: wrapComponent(Cmp)
};