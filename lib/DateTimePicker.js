'use strict';

var React = require('react');
var wrapComponent = require('./base/util').wrapComponent;
var Cmp = require('react-ui-component').DateTimePicker;

var DateTimePicker = wrapComponent(Cmp);

DateTimePicker.defaultProps = {
    confirm: React.createElement(
        'span',
        null,
        '\u786E\u8BA4'
    )
};

module.exports = {
    DateTimePicker: DateTimePicker
};