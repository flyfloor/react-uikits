'use strict';

var React = require('react');
var wrapComponent = require('./base/util').wrapComponent;
var Cmp = require('react-ui-component').Pagination;

var Pagination = wrapComponent(Cmp);

Pagination.defaultProps = {
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

module.exports = {
    Pagination: Pagination
};