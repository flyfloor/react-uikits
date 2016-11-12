'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var _Tooltip = require('react-ui-component').Tooltip;
var NS = require('./base/constant').NS;
var klassName = require('./base/util').klassName;

var Tooltip = React.createClass({
    displayName: 'Tooltip',
    render: function render() {
        var props = this.props;

        var className = klassName(props.className, 'tooltip', NS);
        return React.createElement(_Tooltip, _extends({}, props, { className: className }));
    }
});

module.exports = {
    Tooltip: Tooltip
};