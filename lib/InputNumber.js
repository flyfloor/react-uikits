'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var PropTypes = require('prop-types');
var Component = React.Component;
var NS = require('./base/constant').NS;
var Icon = require('./Icon').Icon;

var InputNumber = function (_Component) {
    _inherits(InputNumber, _Component);

    function InputNumber(props) {
        _classCallCheck(this, InputNumber);

        var _this = _possibleConstructorReturn(this, (InputNumber.__proto__ || Object.getPrototypeOf(InputNumber)).call(this, props));

        _this.handleInput = _this.handleInput.bind(_this);
        _this.handleBlur = _this.handleBlur.bind(_this);
        _this.handleMinus = _this.handleMinus.bind(_this);
        _this.handleAdd = _this.handleAdd.bind(_this);
        var value = _this.trimValue();
        _this.state = {
            displayValue: value
        };
        return _this;
    }

    _createClass(InputNumber, [{
        key: 'handleBlur',
        value: function handleBlur(e) {
            var _this2 = this;

            var value = this.trimValue(e.target.value);
            this.setState({
                displayValue: value
            }, function () {
                return _this2.props.onChange(value);
            });
        }
    }, {
        key: 'trimValue',
        value: function trimValue() {
            var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props.value;
            var _props = this.props,
                int = _props.int,
                min = _props.min,
                max = _props.max;

            value = Number(value);
            if (isNaN(value)) {
                value = min || 0;
            }
            if (value < min) {
                value = min;
            }
            if (value > max) {
                value = max;
            }

            if (int) {
                value = parseInt(value);
            }
            return value;
        }
    }, {
        key: 'handleAdd',
        value: function handleAdd() {
            var _props2 = this.props,
                step = _props2.step,
                max = _props2.max;
            var displayValue = this.state.displayValue;

            if (step + displayValue > max) {
                this.setState({
                    displayValue: max
                });
                return false;
            }
            this.setState({
                displayValue: Number((displayValue + step).toFixed(2))
            });
        }
    }, {
        key: 'handleMinus',
        value: function handleMinus() {
            var _props3 = this.props,
                step = _props3.step,
                min = _props3.min;
            var displayValue = this.state.displayValue;

            if (displayValue - step < min) {
                this.setState({
                    displayValue: min
                });
                return false;
            }
            this.setState({
                displayValue: Number((displayValue - step).toFixed(2))
            });
        }
    }, {
        key: 'handleInput',
        value: function handleInput(e) {
            this.setState({
                displayValue: e.target.value
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var displayValue = this.state.displayValue;

            return React.createElement(
                'span',
                { className: NS + ' input-number' },
                React.createElement('input', { type: 'text', className: NS + ' input',
                    onBlur: this.handleBlur,
                    value: displayValue,
                    onChange: this.handleInput }),
                React.createElement(
                    'span',
                    { className: '_counter',
                        onClick: this.handleAdd },
                    React.createElement(
                        Icon,
                        null,
                        'expand_less'
                    )
                ),
                React.createElement(
                    'span',
                    { className: '_counter',
                        onClick: this.handleMinus },
                    React.createElement(
                        Icon,
                        null,
                        'expand_more'
                    )
                )
            );
        }
    }]);

    return InputNumber;
}(Component);

InputNumber.propTypes = {
    value: PropTypes.number,
    onChange: PropTypes.func.isRequired,
    int: PropTypes.bool,
    min: PropTypes.number,
    max: PropTypes.number,
    step: PropTypes.number
};

InputNumber.defaultProps = {
    int: false,
    value: 0,
    max: Infinity,
    min: -Infinity,
    step: 1
};
module.exports = InputNumber;