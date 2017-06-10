'use strict';

var React = require('react');
var _NoticeCenter = require('react-ui-component').NoticeCenter;
var NS = require('./base/constant').NS;
var DEFAULT_CLASSNAME = NS + ' flash-message';
var DEFAULT_PREFIX = 'flash-message';
var DEFAULT_CONTENT = 'this is a flash message';
var DEFAULT_DELAY = 5000;
var BADGE_ICONS = {
    success: 'check',
    info: 'info',
    warning: 'warning',
    error: 'error'
};

var instance = null;

var generateNotice = function generateNotice(_ref) {
    var content = _ref.content,
        delay = _ref.delay,
        showClose = _ref.showClose,
        onClick = _ref.onClick,
        onClose = _ref.onClose;

    content = content || DEFAULT_CONTENT;
    delay = delay || DEFAULT_DELAY;
    instance = instance || _NoticeCenter.init({
        className: DEFAULT_CLASSNAME,
        prefix: DEFAULT_PREFIX
    });
    return instance.addNotice({
        content: content,
        delay: delay,
        close: onClose || showClose ? React.createElement(
            'i',
            { className: NS + ' icon' },
            'close'
        ) : null,
        onClick: onClick,
        onClose: onClose
    });
};

var assembleContent = function assembleContent(type, msg) {
    var opt = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    if (!msg) {
        throw new Error('message is required');
    }
    opt = opt || {};

    var content = React.createElement(
        'div',
        { className: '_wrap' },
        React.createElement(
            'i',
            { className: NS + ' icon ' + type },
            BADGE_ICONS[type]
        ),
        React.createElement(
            'span',
            { className: '_message' },
            msg
        )
    );
    opt.content = content;
    generateNotice(opt);
};

var Toast = function () {
    return {
        show: function show(msgObj) {
            return generateNotice(msgObj);
        },
        success: function success(msg, opt) {
            return assembleContent('success', msg, opt);
        },
        info: function info(msg, opt) {
            return assembleContent('info', msg, opt);
        },
        warning: function warning(msg, opt) {
            return assembleContent('warning', msg, opt);
        },
        error: function error(msg, opt) {
            return assembleContent('error', msg, opt);
        }
    };
}();

module.exports = {
    Toast: Toast
};