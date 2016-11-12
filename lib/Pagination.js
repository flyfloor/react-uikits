'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var _Pagination = require('react-ui-component').Pagination;
var NS = require('./base/constant').NS;
var klassName = require('./base/util').klassName;

var Pagination = React.createClass({
    displayName: 'Pagination',
    getDefaultProps: function getDefaultProps() {
        return {
            prev: React.createElement(
                'span',
                null,
                '\u4E0A\u4E00\u9875'
            ),
            next: React.createElement(
                'span',
                null,
                '\u4E0B\u4E00\u9875'
            )
        };
    },
    render: function render() {
        var props = this.props;

        var className = klassName(props.className, NS);
        return React.createElement(_Pagination, _extends({}, props, { className: className }));
    }
});

module.exports = {
    Pagination: Pagination
};