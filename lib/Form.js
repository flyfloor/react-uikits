'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var PropTypes = React.PropTypes;
var NS = require('./base/constant').NS;
var klassName = require('./base/util').klassName;

// form
var Form = React.createClass({
    displayName: 'Form',

    propTypes: {
        type: PropTypes.oneOf(['inline', ''])
    },
    render: function render() {
        var _props = Object.assign({}, this.props);
        var className = _props.className,
            type = _props.type;

        className = klassName(NS, className, 'form');
        delete _props.className;
        if (type) {
            className = type + ' ' + className;
            delete _props.type;
        }
        return React.createElement('form', _extends({}, _props, { className: className }));
    }
});

// field
var Field = React.createClass({
    displayName: 'Field',

    propTypes: {
        type: PropTypes.oneOf(['inline', '']),
        size: PropTypes.number
    },
    render: function render() {
        var _props = Object.assign({}, this.props);
        var className = _props.className,
            type = _props.type,
            size = _props.size,
            label = _props.label;

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
                _props.children
            );
        }
        return React.createElement('div', _extends({}, _props, { className: className }));
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
            label = _props.label;

        className = klassName(NS, className, 'group');
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