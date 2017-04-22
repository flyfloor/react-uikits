'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var Component = React.Component;
var PropTypes = require('prop-types');
var NS = require('./base/constant').NS;
var klassName = require('./base/util').klassName;
// const Schema = require('async-validator');
// let validator = null

// form

var Form = function (_Component) {
    _inherits(Form, _Component);

    function Form() {
        _classCallCheck(this, Form);

        return _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).apply(this, arguments));
    }

    _createClass(Form, [{
        key: 'render',
        value: function render() {
            var _props = Object.assign({}, this.props);
            var className = _props.className,
                type = _props.type;

            className = klassName(NS, className, 'form');
            delete _props.className;
            delete _props.rules;
            delete _props.store;

            if (type) {
                className = type + ' ' + className;
                if (type === 'trim') {
                    className = 'inline ' + className;
                }
                delete _props.type;
            }
            return React.createElement('form', _extends({}, _props, { className: className, onSubmit: this.handleSubmit }));
        }
    }]);

    return Form;
}(Component);

Form.propTypes = {
    type: PropTypes.oneOf(['inline', 'trim', ''])
};

// field

var Field = function (_Component2) {
    _inherits(Field, _Component2);

    function Field() {
        _classCallCheck(this, Field);

        return _possibleConstructorReturn(this, (Field.__proto__ || Object.getPrototypeOf(Field)).apply(this, arguments));
    }

    _createClass(Field, [{
        key: 'render',
        value: function render() {
            var _props = Object.assign({}, this.props);
            var className = _props.className,
                type = _props.type,
                size = _props.size,
                label = _props.label,
                validate = _props.validate;
            var errorFields = this.context.errorFields;

            delete _props.validate;

            // validate node
            var errorNode = null;
            if (errorFields && errorFields[validate]) {
                className = className + ' error';
                errorNode = React.createElement(
                    'span',
                    { className: 'text-extra color-red' },
                    errorFields[validate]
                );
            }

            if (size) {
                className = klassName(NS, className, 'field-' + size);
                delete _props.size;
            } else {
                className = klassName(NS, className, 'field');
            }
            delete _props.className;
            if (type) {
                className = type + ' ' + className;
                delete _props.type;
            }
            if (label) {
                delete _props.label;
                return React.createElement(
                    'div',
                    _extends({}, _props, { className: className }),
                    React.createElement(
                        'label',
                        { htmlFor: '' },
                        label
                    ),
                    _props.children,
                    errorNode
                );
            }
            return React.createElement(
                'div',
                _extends({}, _props, { className: className }),
                _props.children,
                errorNode
            );
        }
    }]);

    return Field;
}(Component);

Field.propTypes = {
    type: PropTypes.oneOf(['inline', '']),
    size: PropTypes.number
};

// fields

var Fields = function (_Component3) {
    _inherits(Fields, _Component3);

    function Fields() {
        _classCallCheck(this, Fields);

        return _possibleConstructorReturn(this, (Fields.__proto__ || Object.getPrototypeOf(Fields)).apply(this, arguments));
    }

    _createClass(Fields, [{
        key: 'render',
        value: function render() {
            var _props = Object.assign({}, this.props);
            var className = _props.className,
                size = _props.size;

            if (size) {
                className = klassName(NS, className, 'fields-' + size);
                delete _props.size;
            } else {
                className = klassName(NS, className, 'fields');
            }
            delete _props.className;
            return React.createElement('div', _extends({}, _props, { className: className }));
        }
    }]);

    return Fields;
}(Component);

Fields.propTypes = {
    size: PropTypes.number
};

// group

var Group = function (_Component4) {
    _inherits(Group, _Component4);

    function Group() {
        _classCallCheck(this, Group);

        return _possibleConstructorReturn(this, (Group.__proto__ || Object.getPrototypeOf(Group)).apply(this, arguments));
    }

    _createClass(Group, [{
        key: 'render',
        value: function render() {
            var _props = Object.assign({}, this.props);
            var className = _props.className,
                label = _props.label,
                type = _props.type;

            className = klassName(NS, className, 'group');
            if (type) {
                delete _props.type;
                className = className + ' ' + type;
            }
            if (label) {
                delete _props.label;
                return React.createElement(
                    'div',
                    _extends({}, _props, { className: className }),
                    React.createElement(
                        'label',
                        { htmlFor: '' },
                        label
                    ),
                    _props.children
                );
            }
            return React.createElement('div', _extends({}, _props, { className: className }));
        }
    }]);

    return Group;
}(Component);

module.exports = {
    Form: Form,
    Fields: Fields,
    Field: Field,
    Group: Group
};