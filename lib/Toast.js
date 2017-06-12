'use strict';

var NS = require('./base/constant').NS;
var noticeLike = require('./high-order/noticeLike').noticeLike;

var Toast = noticeLike({
    PREFIX: 'toast',
    CLASSNAME: NS + ' toast',
    CONTENT: 'this is a toast',
    DELAY: 5000
});

module.exports = {
    Toast: Toast
};