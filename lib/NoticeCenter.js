'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var _NoticeCenter = require('react-ui-component').NoticeCenter;
var NS = require('./base/constant').NS;
var klassName = require('./base/util').klassName;

var NoticeCenter = React.createClass({
    displayName: 'NoticeCenter',
    addNotice: function addNotice(notice) {
        if (!notice.close) {
            notice.close = React.createElement(
                'i',
                { className: NS + ' icon' },
                'close'
            );
        }
        this.refs.notice.addNotice(notice);
    },
    render: function render() {
        var props = this.props;

        var className = klassName(props.className, NS);
        return React.createElement(_NoticeCenter, _extends({}, props, { className: className, ref: 'notice' }));
    }
});

module.exports = {
    NoticeCenter: NoticeCenter
};