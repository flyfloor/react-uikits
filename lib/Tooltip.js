'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var _Tooltip = require('react-ui-component').Tooltip;
var NS = require('./base/constant').NS;
var klassName = require('./base/util').klassName;

var Tooltip = function Tooltip(props) {
    return React.createElement(_Tooltip, _extends({}, props, { className: klassName(props.className, 'tooltip', NS) }));
};

module.exports = {
    Tooltip: Tooltip
};