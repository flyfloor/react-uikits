'use strict';

var NS = require('./base/constant').NS;
var noticeLike = require('./high-order/noticeLike').noticeLike;

var NoticeCenter = noticeLike({
    PREFIX: 'notice-center',
    CLASSNAME: NS + ' notice-center',
    CONTENT: 'this is a notice',
    DELAY: 5000
});

module.exports = {
    NoticeCenter: NoticeCenter
};