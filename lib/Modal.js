'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var _Modal = require('react-ui-component').Modal;
var NS = require('./base/constant').NS;
var klassName = require('./base/util').klassName;

var Modal = React.createClass({
    displayName: 'Modal',
    getDefaultProps: function getDefaultProps() {
        return {
            confirm: React.createElement(
                'button',
                { className: NS + ' blue button' },
                '\u786E\u8BA4'
            ),
            cancel: React.createElement(
                'button',
                { className: NS + ' button' },
                '\u53D6\u6D88'
            ),
            close: React.createElement(
                'i',
                { className: NS + ' icon' },
                'close'
            )
        };
    },
    open: function open() {
        this.refs.modal.open();
    },
    render: function render() {
        var props = this.props;

        var className = klassName(props.className, NS);
        return React.createElement(_Modal, _extends({}, props, { ref: 'modal', className: className }));
    }
});

module.exports = {
    Modal: Modal
};