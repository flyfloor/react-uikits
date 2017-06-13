'use strict';

var React = require('react');
var _NoticeCenter = require('react-ui-component').NoticeCenter;
var NS = require('../base/constant').NS;

var BADGE_ICONS = {
    success: 'check',
    info: 'info',
    warning: 'warning',
    error: 'error'
};

var instance = null;

var noticeLike = function noticeLike() {
    var _config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    return {
        _config: _config,
        generateNotice: function generateNotice(notice) {
            var content = notice.content,
                delay = notice.delay,
                close = notice.close,
                onClose = notice.onClose,
                showClose = notice.showClose;
            var _config2 = this._config,
                CONTENT = _config2.CONTENT,
                DELAY = _config2.DELAY,
                CLASSNAME = _config2.CLASSNAME,
                PREFIX = _config2.PREFIX;

            notice.content = content || CONTENT;
            if (delay === undefined) {
                notice.delay = DELAY;
            }

            notice.close = delay === 0 || onClose || showClose ? close || React.createElement(
                'i',
                { className: NS + ' icon' },
                'close'
            ) : null;

            instance = instance && instance.key === PREFIX ? instance : _NoticeCenter.init({
                className: CLASSNAME,
                prefix: PREFIX
            });

            return instance.addNotice(notice);
        },
        assembleContent: function assembleContent(type, msg) {
            var opt = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

            if (!msg) {
                throw new Error('message is required');
            }
            opt = opt || {};

            opt.icon = React.createElement(
                'i',
                { className: NS + ' icon ' + type },
                BADGE_ICONS[type]
            );

            var content = React.createElement(
                'span',
                { className: '_message' },
                msg
            );

            opt.content = content;
            this.generateNotice(opt);
        },
        show: function show(msgObj) {
            return this.generateNotice(msgObj);
        },
        success: function success(msg, opt) {
            return this.assembleContent('success', msg, opt);
        },
        info: function info(msg, opt) {
            return this.assembleContent('info', msg, opt);
        },
        warning: function warning(msg, opt) {
            return this.assembleContent('warning', msg, opt);
        },
        error: function error(msg, opt) {
            return this.assembleContent('error', msg, opt);
        }
    };
};

module.exports = {
    noticeLike: noticeLike
};