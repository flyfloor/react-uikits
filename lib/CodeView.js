'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var Component = React.Component;
var Hightlight = require("react-highlight");
var NS = require('./base/constant').NS;

var CodeView = function (_Component) {
    _inherits(CodeView, _Component);

    function CodeView(props) {
        _classCallCheck(this, CodeView);

        var _this = _possibleConstructorReturn(this, (CodeView.__proto__ || Object.getPrototypeOf(CodeView)).call(this, props));

        _this.handleDisplay = _this.handleDisplay.bind(_this);
        _this.state = {
            display: false
        };
        return _this;
    }

    _createClass(CodeView, [{
        key: 'handleDisplay',
        value: function handleDisplay() {
            var display = this.state.display;

            this.setState({
                display: !display
            });
        }
    }, {
        key: 'render',
        value: function render() {
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
                        '\u4EE3\u7801:'
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
    }]);

    return CodeView;
}(Component);

module.exports = {
    CodeView: CodeView
};