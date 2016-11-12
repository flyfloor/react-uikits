'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var _Carousel = require('react-ui-component').Carousel;
var NS = require('./base/constant').NS;
var klassName = require('./base/util').klassName;

var Carousel = React.createClass({
    displayName: 'Carousel',
    render: function render() {
        var props = this.props;

        var className = klassName(props.className, NS);
        return React.createElement(_Carousel, _extends({}, props, { className: className }));
    }
});

module.exports = {
    Carousel: Carousel
};