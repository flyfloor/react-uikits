'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var Component = React.Component;
var PropTypes = require('prop-types');
var NS = require('./base/constant').NS;
var FORM_RULE = require('./base/constant').FORM_RULE;
var klassName = require('./base/util').klassName;
var Schema = require('async-validator');
var vBuilder = null;

// form

var Form = function (_Component) {
    _inherits(Form, _Component);

    function Form(props) {
        _classCallCheck(this, Form);

        var _this = _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).call(this, props));

        _this.handleSubmit = _this.handleSubmit.bind(_this);
        if (props.rules) {
            vBuilder = new Schema(props.rules);
        }
        _this.state = {
            errorFieldsObj: null
        };
        return _this;
    }

    _createClass(Form, [{
        key: 'getChildContext',
        value: function getChildContext() {
            return {
                errorFieldsObj: this.state.errorFieldsObj,
                validateField: this.validateField.bind(this)
            };
        }
    }, {
        key: 'validateField',
        value: function validateField(name) {
            if (!name) {
                throw new Error('validate method need field name');
            }
            this.validate({ name: name });
        }
    }, {
        key: 'validate',
        value: function validate() {
            var _this2 = this;

            var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { name: '', success: '', fail: '' },
                name = _ref.name,
                success = _ref.success,
                fail = _ref.fail;

            var _props2 = this.props,
                store = _props2.store,
                rules = _props2.rules;
            // field name is given, but rules not found

            if (name && !rules[name]) {
                return false;
            }
            var descriptor = name ? _defineProperty({}, name, rules[name]) : rules;
            var value = name ? _defineProperty({}, name, store[name]) : store;

            vBuilder = new Schema(descriptor);
            vBuilder.validate(value, function (errors, errObj) {
                var errorFieldsObj = _this2.state.errorFieldsObj;

                if (name && errorFieldsObj) {
                    errorFieldsObj[name] = errObj ? errObj[name] : null;
                    _this2.setState({
                        errorFieldsObj: errorFieldsObj
                    });
                } else {
                    _this2.setState({
                        errorFieldsObj: errObj
                    });
                }

                if (errors) {
                    fail && fail.call(_this2, errors);
                } else {
                    success && success.call(_this2, name ? _this2.props.store[name] : _this2.props.store);
                }
            });
        }
    }, {
        key: 'handleSubmit',
        value: function handleSubmit(e) {
            e.preventDefault();
            this.validate({
                success: function success() {
                    this.props.onSubmit(this.props.store, this.props);
                },
                fail: function fail(errors) {
                    if (this.props.onError) {
                        this.props.onError(errors);
                    }
                }
            });
            return false;
        }
    }, {
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

Form.childContextTypes = {
    errorFieldsObj: PropTypes.object,
    validateField: PropTypes.func
};

Form.propTypes = {
    type: PropTypes.oneOf(['inline', 'trim', '']),
    onSubmit: PropTypes.func.isRequired,
    onError: PropTypes.func
};

// field

var Field = function (_Component2) {
    _inherits(Field, _Component2);

    function Field(props) {
        _classCallCheck(this, Field);

        return _possibleConstructorReturn(this, (Field.__proto__ || Object.getPrototypeOf(Field)).call(this, props));
    }

    _createClass(Field, [{
        key: 'render',
        value: function render() {
            var _props = Object.assign({}, this.props);
            var className = _props.className,
                type = _props.type,
                size = _props.size,
                label = _props.label,
                validate = _props.validate,
                children = _props.children;
            var errorFieldsObj = this.context.errorFieldsObj;

            delete _props.validate;
            delete _props.children;

            // validate node
            var errorNode = null;
            if (errorFieldsObj && errorFieldsObj[validate]) {
                className = klassName(className, 'error');
                errorNode = React.createElement(
                    'span',
                    { className: 'text-extra error-hint color-red' },
                    errorFieldsObj[validate][0].message
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
                    children,
                    errorNode
                );
            }
            return React.createElement(
                'div',
                _extends({}, _props, { className: className }),
                children,
                errorNode
            );
        }
    }]);

    return Field;
}(Component);

Field.contextTypes = {
    errorFieldsObj: PropTypes.object
};

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

var Validator = function (_Component5) {
    _inherits(Validator, _Component5);

    function Validator(props) {
        _classCallCheck(this, Validator);

        return _possibleConstructorReturn(this, (Validator.__proto__ || Object.getPrototypeOf(Validator)).call(this, props));
    }

    _createClass(Validator, [{
        key: 'render',
        value: function render() {
            var _this7 = this;

            var _props3 = this.props,
                on = _props3.on,
                children = _props3.children,
                name = _props3.name;

            var _props = Object.assign({}, children.props);
            if (_props[on]) {
                var oldChange = _props[on];
                _props[on] = function (val) {
                    oldChange(val);
                    _this7.context.validateField(name);
                };
            } else {
                _props[on] = function () {
                    _this7.context.validateField(name);
                };
            }

            return React.createElement(children.type, _props);
        }
    }]);

    return Validator;
}(Component);

Validator.propTypes = {
    children: PropTypes.element.isRequired,
    on: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};

Validator.contextTypes = {
    validateField: PropTypes.func
};

Validator.defaultProps = {
    on: 'onChange'
};

module.exports = {
    Form: Form,
    Fields: Fields,
    Field: Field,
    Group: Group,
    Validator: Validator,
    RULE: FORM_RULE
};