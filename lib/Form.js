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

var constant = require('./base/constant');
var FORM_RULE = constant.FORM_RULE,
    DEFAULT_INVALID_MSG = constant.DEFAULT_INVALID_MSG,
    NS = constant.NS;

var klassName = require('./base/util').klassName;
var Schema = require('async-validator/lib');
var vBuilder = null;

/*
Form
*/

var Form = function (_Component) {
    _inherits(Form, _Component);

    function Form(props) {
        _classCallCheck(this, Form);

        var _this = _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).call(this, props));

        _this.handleSubmit = _this.handleSubmit.bind(_this);
        _this.handleKeyDown = _this.handleKeyDown.bind(_this);
        if (props.rules) {
            vBuilder = new Schema(props.rules);
        }
        _this.state = {
            errorFieldsObj: {}
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
        value: function validateField(field, afterCallback) {
            if (!field) {
                throw new Error('validate method need field name');
            }
            this.validate({ name: field, afterCallback: afterCallback });
        }
    }, {
        key: 'validateGlobalAfter',
        value: function validateGlobalAfter() {
            var _this2 = this;

            var afterFilters = this.props.afterFilters;

            var isValid = true;
            var errorFieldsObj = this.state.errorFieldsObj;

            if (!afterFilters) {
                return function (success) {
                    return success && success.call(_this2);
                };
            }
            afterFilters.forEach(function (action) {
                var result = action();
                if (result && result.valid === false) {
                    isValid = false;
                    if (!result.name) throw new Error('after validate function need return specify validate field name');
                    var _errField = [{ name: result.name, message: result.message }];
                    if (errorFieldsObj) {
                        errorFieldsObj[result.name] = _errField;
                    } else {
                        errorFieldsObj = _defineProperty({}, result.name, _errField);
                    }
                } else {
                    // remove errors
                    if (errorFieldsObj) delete errorFieldsObj[result.name];
                }
            });
            this.setState({ errorFieldsObj: errorFieldsObj });
            var errors = [];
            Object.keys(errorFieldsObj).forEach(function (key) {
                if (errorFieldsObj[key]) {
                    var item = errorFieldsObj[key][0];
                    errors.push({ message: item.message, field: item.name });
                }
            });

            return isValid ? function (success) {
                return success && success.call(_this2);
            } : function (fail) {
                return fail && fail.call(_this2, errors);
            };
        }

        // after validate callback, return callback with errors

    }, {
        key: 'validateAfterAction',
        value: function validateAfterAction(_ref) {
            var _this3 = this;

            var field = _ref.field,
                afterCallback = _ref.afterCallback;

            if (!field) {
                return this.validateGlobalAfter();
            }

            // no after callback handler, then success
            if (!afterCallback) {
                return function (success) {
                    return success.call(_this3, null);
                };
            }

            var callbackRtn = afterCallback.call(this);
            // if after callback return nothing, then pass.
            if (!callbackRtn) {
                return function (success) {
                    return success.call(_this3, null);
                };
            }

            var valid = callbackRtn.valid,
                name = callbackRtn.name,
                _callbackRtn$message = callbackRtn.message,
                message = _callbackRtn$message === undefined ? DEFAULT_INVALID_MSG : _callbackRtn$message;

            // need to specify the valid field to show error

            if (!name) {
                throw new Error('after validate function need return specify validate field name, check: ' + afterCallback.name);
            }

            var errorFieldsObj = this.state.errorFieldsObj;
            // if unvalid, push errors

            if (!valid) {
                var _errField = [{ name: field, message: message }];
                if (errorFieldsObj) {
                    errorFieldsObj[name] = _errField;
                } else {
                    errorFieldsObj = _defineProperty({}, name, _errField);
                }
                this.setState({
                    errorFieldsObj: errorFieldsObj
                });
                // return invoke error handler
                return function (fail) {
                    return fail && fail.call(_this3, _errField);
                };
            } else {
                // remove errors
                if (errorFieldsObj) {
                    delete errorFieldsObj[name];
                }
                this.setState({
                    errorFieldsObj: errorFieldsObj
                });
            }
            return function (success) {
                return success.call(_this3, null);
            };
        }
    }, {
        key: 'handleKeyDown',
        value: function handleKeyDown(e) {
            if (e.keyCode === 13 && e.target.type !== 'textarea') {
                e.preventDefault();
                return false;
            }
        }

        // check if name is "a.b.c.d"

    }, {
        key: 'getValidateDataByName',
        value: function getValidateDataByName(store, name) {
            if (!name) {
                return store;
            }
            if (name.indexOf('.') !== -1) {
                var data = {};
                name = name.split('.');
                try {
                    data = name.reduce(function (prev, next) {
                        return prev[next];
                    }, store);
                } catch (e) {
                    throw Error(e);
                }
                return data;
            }
            return store[name];
        }

        // check if rule's key is "a.b.c.d", generate fake store with rule {a: {b: {c: { d: value }}}} => {"a.b.c.d": value}

    }, {
        key: 'convertFakeStore',
        value: function convertFakeStore() {
            var _props2 = this.props,
                store = _props2.store,
                rules = _props2.rules;

            var newStore = Object.assign({}, store);
            Object.keys(rules).map(function (key) {
                if (rules.hasOwnProperty(key) && key.indexOf('.') !== -1) {
                    var names = key.split('.');
                    var value = names.reduce(function (prev, next) {
                        return prev[next];
                    }, newStore);
                    newStore[key] = value;
                }
                return undefined;
            });
            return newStore;
        }
    }, {
        key: 'validate',
        value: function validate() {
            var _this4 = this;

            var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { name: '' },
                name = _ref2.name,
                success = _ref2.success,
                fail = _ref2.fail,
                afterCallback = _ref2.afterCallback;

            var _props3 = this.props,
                store = _props3.store,
                rules = _props3.rules;

            var fakeStore = this.convertFakeStore();
            var submitData = this.getValidateDataByName(store, name);
            if (name && !rules[name]) {
                // field name is given, but rules not found, check if has after validate
                return this.validateAfterAction({ field: name, afterCallback: afterCallback })(function (errors) {
                    return errors ? fail && fail.call(_this4, errors) : success && success.call(_this4, submitData);
                });
            }
            // validator descriptor
            var descriptor = name ? _defineProperty({}, name, rules[name]) : rules;
            var validateData = name ? _defineProperty({}, name, submitData) : fakeStore;

            vBuilder = new Schema(descriptor);
            vBuilder.validate(validateData, function (errors, errObj) {
                var errorFieldsObj = _this4.state.errorFieldsObj;
                // valid special field

                if (name && errorFieldsObj) {
                    errorFieldsObj[name] = errObj ? errObj[name] : null;
                    _this4.setState({
                        errorFieldsObj: errorFieldsObj
                    });
                } else {
                    _this4.setState({
                        errorFieldsObj: errObj
                    });
                }

                if (errors) {
                    return fail && fail.call(_this4, errors);
                }
                return _this4.validateAfterAction({ field: name, afterCallback: afterCallback })(function (errors) {
                    return errors ? fail && fail.call(_this4, errors) : success && success.call(_this4, submitData);
                });
            });
        }
    }, {
        key: 'handleSubmit',
        value: function handleSubmit(e) {
            e.preventDefault();
            var _props4 = this.props,
                store = _props4.store,
                rules = _props4.rules,
                onSubmit = _props4.onSubmit,
                onError = _props4.onError;

            if (!rules) {
                return onSubmit(store, this.props);
            }
            this.validate({
                success: function success() {
                    onSubmit(store, this.props);
                },
                fail: function fail(errors) {
                    if (onError) {
                        onError(errors);
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
            delete _props.afterFilters;

            if (type) {
                className = type + ' ' + className;
                if (type === 'trim') {
                    className = 'inline ' + className;
                }
                delete _props.type;
            }
            return React.createElement('form', _extends({}, _props, { className: className, onSubmit: this.handleSubmit,
                onKeyDown: this.handleKeyDown }));
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
    onError: PropTypes.func,
    afterFilters: PropTypes.array
};

/*
Field
*/

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

/*
Fields
*/

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

/*
Group
*/

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

/*
Validator
*/

var Validator = function (_Component5) {
    _inherits(Validator, _Component5);

    function Validator(props) {
        _classCallCheck(this, Validator);

        return _possibleConstructorReturn(this, (Validator.__proto__ || Object.getPrototypeOf(Validator)).call(this, props));
    }

    _createClass(Validator, [{
        key: 'conbineEvent',
        value: function conbineEvent(props, event) {
            var _this9 = this;

            var _props5 = this.props,
                name = _props5.name,
                after = _props5.after;

            if (props[event]) {
                var oldEvent = props[event];
                props[event] = function (val) {
                    oldEvent(val);
                    _this9.context.validateField(name, after);
                };
            } else {
                props[event] = function () {
                    _this9.context.validateField(name, after);
                };
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this10 = this;

            var _props6 = this.props,
                trigger = _props6.trigger,
                children = _props6.children;

            var _props = Object.assign({}, children.props);
            if (trigger instanceof Array) {
                trigger.forEach(function (e) {
                    return _this10.conbineEvent(_props, e);
                });
            } else {
                this.conbineEvent(_props, trigger);
            }

            return React.createElement(children.type, _props);
        }
    }]);

    return Validator;
}(Component);

Validator.propTypes = {
    children: PropTypes.element.isRequired,
    trigger: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
    name: PropTypes.string.isRequired
};

Validator.contextTypes = {
    validateField: PropTypes.func
};

Validator.defaultProps = {
    trigger: 'onChange'
};

module.exports = {
    Form: Form,
    Fields: Fields,
    Field: Field,
    Group: Group,
    Validator: Validator,
    RULE: FORM_RULE
};