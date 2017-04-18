'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var _RadioGroup = require('react-ui-component').RadioGroup;
var NS = require('./base/constant').NS;
var klassName = require('./base/util').klassName;

var RadioGroup = function RadioGroup(props) {
    return React.createElement(_RadioGroup, _extends({}, props, { className: klassName(props.className, NS) }));
};

module.exports = {
    RadioGroup: RadioGroup
};