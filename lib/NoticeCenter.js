'use strict';

var React = require('react');
var _NoticeCenter = require('react-ui-component').NoticeCenter;
var NS = require('./base/constant').NS;
var klassName = require('./base/util').klassName;

var NoticeCenter = function NoticeCenter(props) {
    return React.createElement(_NoticeCenter, props);
};

NoticeCenter.init = function () {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    props.className = klassName(props.className, NS, 'notice-center');
    props.prefix = 'notice';
    return _NoticeCenter.init(props);
};

module.exports = {
    NoticeCenter: NoticeCenter
};