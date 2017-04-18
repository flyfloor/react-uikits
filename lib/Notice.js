'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var _Notice = require('react-ui-component').Notice;
var NS = require('./base/constant').NS;
var klassName = require('./base/util').klassName;

var Notice = function Notice(props) {
    return React.createElement(_Notice, _extends({}, props, { className: klassName(props.className, NS) }));
};

module.exports = {
    Notice: Notice
};