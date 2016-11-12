'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var _CheckBox = require('react-ui-component').CheckBox;
var NS = require('./base/constant').NS;
var klassName = require('./base/util').klassName;

var CheckBox = React.createClass({
    displayName: 'CheckBox',
    render: function render() {
        var props = this.props;

        var className = klassName(props.className, NS);
        return React.createElement(_CheckBox, _extends({}, props, { className: className }));
    }
});

module.exports = {
    CheckBox: CheckBox
};