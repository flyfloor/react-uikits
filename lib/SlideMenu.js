'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var _SlideMenu = require('react-ui-component').SlideMenu;
var NS = require('./base/constant').NS;
var klassName = require('./base/util').klassName;

var SlideMenu = React.createClass({
    displayName: 'SlideMenu',
    open: function open() {
        this.refs.slide.open();
    },
    close: function close() {
        this.refs.slide.close();
    },
    render: function render() {
        var props = this.props;

        var className = klassName(props.className, NS);
        return React.createElement(_SlideMenu, _extends({}, props, { ref: 'slide', className: className }));
    }
});

module.exports = {
    SlideMenu: SlideMenu
};