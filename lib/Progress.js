'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var _Progress = require('react-ui-component').Progress;
var NS = require('./base/constant').NS;
var klassName = require('./base/util').klassName;

var Progress = function Progress(props) {
    return React.createElement(_Progress, _extends({}, props, { className: klassName(props.className, NS) }));
};

module.exports = {
    Progress: Progress
};