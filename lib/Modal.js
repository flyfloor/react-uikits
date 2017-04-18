'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var Component = React.Component;
var _Modal = require('react-ui-component').Modal;
var NS = require('./base/constant').NS;
var klassName = require('./base/util').klassName;

var Modal = function (_Component) {
    _inherits(Modal, _Component);

    function Modal() {
        _classCallCheck(this, Modal);

        return _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).apply(this, arguments));
    }

    _createClass(Modal, [{
        key: 'open',
        value: function open() {
            this.refs.modal.open();
        }
    }, {
        key: 'close',
        value: function close() {
            this.refs.modal.close();
        }
    }, {
        key: 'render',
        value: function render() {
            var props = this.props;

            var className = klassName(props.className, NS);
            return React.createElement(_Modal, _extends({}, props, { ref: 'modal', className: className }));
        }
    }]);

    return Modal;
}(Component);

Modal.defaultProps = {
    confirm: React.createElement(
        'button',
        { className: NS + ' blue button' },
        '\u786E\u8BA4'
    ),
    cancel: React.createElement(
        'button',
        { className: NS + ' button' },
        '\u53D6\u6D88'
    ),
    close: React.createElement(
        'i',
        { className: NS + ' icon' },
        'close'
    )
};

module.exports = {
    Modal: Modal
};