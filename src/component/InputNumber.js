const React = require('react')
const PropTypes = require('prop-types')
const Component = React.Component
const NS = require('./base/constant').NS
const Icon = require('./Icon').Icon

class InputNumber extends Component {
    constructor(props) {
        super(props);
        this.handleInput = this.handleInput.bind(this)
        this.handleBlur = this.handleBlur.bind(this)
        this.handleMinus = this.handleMinus.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        const value = this.trimValue()
        this.state = {
            displayValue: value,
        }
    }

    handleBlur(e) {
        let value = this.trimValue(e.target.value)
        this.setState({
            displayValue: value,
        }, () => this.props.onChange(value));
    }

    trimValue(value = this.props.value){
        let {int, min, max} = this.props
        value = Number(value)
        if (isNaN(value)) {
            value = min || 0
        }
        if (value < min) {
            value = min
        }
        if (value > max) {
            value = max
        }

        if (int) {
            value = parseInt(value)
        }
        return value
    }

    handleAdd(){
        let {step, max} = this.props
        const {displayValue} = this.state
        if (step + displayValue > max) {
            this.setState({
                displayValue: max,
            });
            return false
        }
        this.setState({
            displayValue: Number((displayValue + step).toFixed(2))
        });
    }

    handleMinus(){
        let {step, min} = this.props
        const {displayValue} = this.state
        if (displayValue - step < min) {
            this.setState({
                displayValue: min,
            });
            return false
        }
        this.setState({
            displayValue: Number((displayValue - step).toFixed(2))
        });
    }

    handleInput(e) {
        this.setState({
            displayValue: e.target.value
        });
    }

    render() {
        const {displayValue} = this.state
        return (
            <span className={`${NS} input-number`}>
                <input type="text" className={`${NS} input`} 
                    onBlur={this.handleBlur}
                    value={displayValue}
                    onChange={this.handleInput}/>
                <span className="_counter" 
                    onClick={this.handleAdd}>
                    <Icon>expand_less</Icon>
                </span>
                <span className="_counter" 
                    onClick={this.handleMinus}>
                    <Icon>expand_more</Icon>
                </span>
            </span>
        );
    }
}

InputNumber.propTypes = {
    value: PropTypes.number,
    onChange: PropTypes.func.isRequired,
    int: PropTypes.bool,
    min: PropTypes.number,
    max: PropTypes.number,
    step: PropTypes.number,
}

InputNumber.defaultProps = {
    int: false,
    value: 0,
    max: Infinity,
    min: -Infinity,
    step: 1,
}
module.exports = InputNumber