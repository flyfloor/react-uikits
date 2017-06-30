'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var PropTypes = require('prop-types');
var Component = React.Component;

var InputNumber = function (_Component) {
    _inherits(InputNumber, _Component);

    function InputNumber(props) {
        _classCallCheck(this, InputNumber);

        var _this = _possibleConstructorReturn(this, (InputNumber.__proto__ || Object.getPrototypeOf(InputNumber)).call(this, props));

        _this.handleKeyDown = _this.handleKeyDown.bind(_this);
        _this.handleValueChange = _this.handleValueChange.bind(_this);
        return _this;
    }

    _createClass(InputNumber, [{
        key: 'handleKeyDown',
        value: function handleKeyDown(e) {
            if (e.keyCode === 69) {
                e.preventDefault();
                return false;
            }
        }
    }, {
        key: 'trimValue',
        value: function trimValue(value) {
            var int = this.props.int;

            value = Number(value);
            if (int) {
                value = parseInt(value);
            }
            return value;
        }
    }, {
        key: 'handleValueChange',
        value: function handleValueChange(e) {
            this.trimValue(e.target.value);
        }
    }, {
        key: 'render',
        value: function render() {
            var value = this.props.value;

            return React.createElement('input', { type: 'number', className: 'dot input',
                onKeyDown: this.handleKeyDown, onChange: function onChange(value) {
                    return value;
                },
                value: value });
        }
    }]);

    return InputNumber;
}(Component);

InputNumber.propTypes = {
    value: PropTypes.number,
    onChange: PropTypes.func.isRequired,
    int: PropTypes.bool
};

InputNumber.defaultProps = {
    int: false
};
module.exports = InputNumber;