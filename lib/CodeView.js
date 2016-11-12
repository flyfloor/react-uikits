'use strict';

var React = require('react');
var Hightlight = require("react-highlight");
var NS = require('./base/constant').NS;

var CodeView = React.createClass({
    displayName: 'CodeView',
    getInitialState: function getInitialState() {
        return {
            display: false
        };
    },
    handleDisplay: function handleDisplay() {
        var display = this.state.display;

        this.setState({
            display: !display
        });
    },
    render: function render() {
        var _props = this.props,
            children = _props.children,
            component = _props.component;
        var display = this.state.display;

        return React.createElement(
            'section',
            { className: NS + ' code-view' },
            React.createElement(
                'div',
                { className: 'code-component' },
                component
            ),
            React.createElement('br', null),
            React.createElement(
                'div',
                { className: display ? 'code-detail active' : 'code-detail' },
                React.createElement(
                    'h5',
                    null,
                    '\u4F7F\u7528:'
                ),
                React.createElement(
                    Hightlight,
                    { className: 'javascript' },
                    children
                )
            ),
            React.createElement(
                'a',
                { className: 'code-trigger', href: 'javascript:;', onClick: this.handleDisplay },
                React.createElement(
                    'span',
                    { className: NS + ' basic center table' },
                    React.createElement(
                        'span',
                        { className: 'row' },
                        React.createElement(
                            'i',
                            { className: NS + ' icon cell' },
                            display ? 'expand_less' : 'expand_more'
                        ),
                        React.createElement(
                            'span',
                            { className: 'cell' },
                            display ? '隐藏代码' : '显示代码'
                        )
                    )
                )
            )
        );
    }
});

module.exports = {
    CodeView: CodeView
};