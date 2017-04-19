'use strict';

var wrapComponent = require('./base/util').wrapComponent;
var Cmp = require('react-ui-component').Calendar;

module.exports = {
    Calendar: wrapComponent(Cmp)
};