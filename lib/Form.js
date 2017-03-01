'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var PropTypes = React.PropTypes;
var NS = require('./base/constant').NS;
var klassName = require('./base/util').klassName;
var Schema = require('async-validator');
var validator = null;

// form
var Form = React.createClass({
    displayName: 'Form',

    propTypes: {
        type: PropTypes.oneOf(['inline', 'trim', '']),
        onSubmit: PropTypes.func.isRequired
    },
    getInitialState: function getInitialState() {
        return {
            errorFields: {}
        };
    },
    getChildContext: function getChildContext() {
        return {
            rules: this.props.rules,
            errorFields: this.state.errorFields
        };
    },

    childContextTypes: {
        rules: PropTypes.object,
        errorFields: PropTypes.object
    },
    validateAll: function validateAll(succFunc, errFunc) {
        var _this = this;

        var _props2 = this.props,
            rules = _props2.rules,
            store = _props2.store;

        if (rules && store) {
            validator = validator || new Schema(rules);
            validator.validate(store, function (errors) {
                if (errors) {
                    var errorFields = errors.reduce(function (prev, err) {
                        prev[err.field] = err.message;
                        return prev;
                    }, {});
                    _this.setState({ errorFields: errorFields });

                    return errFunc && errFunc(errors);
                }
                _this.setState({
                    errorFields: {}
                }, function () {
                    return succFunc(store);
                });
            });
        }
    },
    handleSubmit: function handleSubmit(e) {
        e.preventDefault();
        var _props3 = this.props,
            onSubmit = _props3.onSubmit,
            rules = _props3.rules,
            store = _props3.store,
            onError = _props3.onError;

        if (rules && store) {
            this.validateAll(onSubmit, function (errors) {
                // on error handler
                onError && onError(errors);
            });
        } else {
            // submit value
            onSubmit(store);
        }
        return false;
    },
    render: function render() {
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
});

// field
var Field = React.createClass({
    displayName: 'Field',

    propTypes: {
        type: PropTypes.oneOf(['inline', '']),
        size: PropTypes.number
    },
    contextTypes: {
        rules: PropTypes.object,
        errorFields: PropTypes.object
    },
    render: function render() {
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
});

// fields
var Fields = React.createClass({
    displayName: 'Fields',

    propTypes: {
        size: PropTypes.number
    },
    render: function render() {
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
});

// group
var Group = React.createClass({
    displayName: 'Group',
    render: function render() {
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
});

module.exports = {
    Form: Form,
    Fields: Fields,
    Field: Field,
    Group: Group
};