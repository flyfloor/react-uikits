'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var _FlashMessage = require('react-ui-component').FlashMessage;
var NS = require('./base/constant').NS;
var klassName = require('./base/util').klassName;

var Toast = React.createClass({
    displayName: 'Toast',
    getDefaultProps: function getDefaultProps() {
        return {
            close: React.createElement(
                'i',
                { className: 'dot icon' },
                'close'
            )
        };
    },
    open: function open() {
        this.refs.fm.open();
    },
    render: function render() {
        var props = this.props;

        var className = klassName(props.className, NS);
        return React.createElement(_FlashMessage, _extends({ ref: 'fm' }, props, { className: className }));
    }
});

module.exports = {
    Toast: Toast
};