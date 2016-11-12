'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var _ConfirmBox = require('react-ui-component').ConfirmBox;
var NS = require('./base/constant').NS;
var klassName = require('./base/util').klassName;

var ConfirmBox = React.createClass({
    displayName: 'ConfirmBox',
    getDefaultProps: function getDefaultProps() {
        return {
            confirm: React.createElement(
                'button',
                { className: NS + ' tiny blue button' },
                '\u786E\u8BA4'
            ),
            cancel: React.createElement(
                'button',
                { className: NS + ' tiny button' },
                '\u53D6\u6D88'
            )
        };
    },
    render: function render() {
        var props = this.props;

        var className = klassName(props.className, NS);
        return React.createElement(_ConfirmBox, _extends({}, props, { className: className }));
    }
});

module.exports = {
    ConfirmBox: ConfirmBox
};