'use strict';

var React = require('react');
var NS = require('./base/constant').NS;
var wrapComponent = require('./base/util').wrapComponent;
var Cmp = require('react-ui-component').ConfirmBox;

var ConfirmBox = wrapComponent(Cmp);

ConfirmBox.defaultProps = {
    confirm: React.createElement(
        'button',
        { className: NS + ' tiny primary button' },
        '\u786E\u8BA4'
    ),
    cancel: React.createElement(
        'button',
        { className: NS + ' tiny button' },
        '\u53D6\u6D88'
    )
};

module.exports = {
    ConfirmBox: ConfirmBox
};