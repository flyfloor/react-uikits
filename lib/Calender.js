'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var _Calender = require('react-ui-component').Calender;
var NS = require('./base/constant').NS;
var klassName = require('./base/util').klassName;

var Calender = React.createClass({
    displayName: 'Calender',
    render: function render() {
        var props = this.props;

        var className = klassName(props.className, NS);
        return React.createElement(_Calender, _extends({}, props, { className: className }));
    }
});

module.exports = {
    Calender: Calender
};