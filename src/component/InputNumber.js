const React = require('react')
const PropTypes = require('prop-types')
const Component = React.Component

class InputNumber extends Component {
    constructor(props) {
        super(props);
        this.handleKeyDown = this.handleKeyDown.bind(this)
        this.handleValueChange = this.handleValueChange.bind(this)
    }

    handleKeyDown(e){
        if (e.keyCode === 69) {
            e.preventDefault()
            return false
        }
    }

    trimValue(value){
        let {int} = this.props
        value = Number(value)
        if (int) {
            value = parseInt(value)
        }
        return value
    }

    handleValueChange(e) {
        this.trimValue(e.target.value)
    }

    render() {
        const {value} = this.props
        return (
            <input type="number" className="dot input"
                onKeyDown={this.handleKeyDown} onChange={value => value}
                value={value} />
        );
    }
}

InputNumber.propTypes = {
    value: PropTypes.number,
    onChange: PropTypes.func.isRequired,
    int: PropTypes.bool,
}

InputNumber.defaultProps = {
    int: false,
}
module.exports = InputNumber