'use strict';

var React = require('react');
var _NoticeCenter = require('react-ui-component').NoticeCenter;
var NS = require('./base/constant').NS;
var DEFAULT_CLASSNAME = NS + ' flash-message';
var DEFAULT_PREFIX = 'flash-message';
var DEFAULT_CONTENT = 'this is a flash message';
var DEFAULT_DELAY = 5000;
var POSITIONS = ['top', 'center', 'bottom'];
var BADGE_ICONS = {
    success: 'mood',
    info: 'info',
    warning: 'warning',
    error: 'error'
};

var instance = null;

var generateNotice = function generateNotice(_ref) {
    var content = _ref.content,
        position = _ref.position,
        delay = _ref.delay,
        onClick = _ref.onClick;

    position = POSITIONS.indexOf(position) !== -1 ? position : POSITIONS[0];
    content = content || DEFAULT_CONTENT;
    delay = delay || DEFAULT_DELAY;
    instance = instance || _NoticeCenter.init({
        className: DEFAULT_CLASSNAME,
        prefix: DEFAULT_PREFIX
    });
    return instance.addNotice({
        content: content,
        delay: delay,
        close: null,
        className: position,
        onClick: onClick
    });
};

var assembleContent = function assembleContent(type, msg) {
    var opt = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    if (!msg) {
        throw new Error('message is required');
    }
    var content = React.createElement(
        'div',
        { className: '_wrap' },
        React.createElement(
            'i',
            { className: NS + ' icon ' + type },
            BADGE_ICONS[type]
        ),
        React.createElement(
            'p',
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