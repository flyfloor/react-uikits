const React = require('react')
const Component = React.Component
const klassName = require('./base/util').klassName
const NS = require('./base/constant').NS
const PropTypes = require('prop-types')

class Icon extends Component {
    render() {
        let { size, color } = this.props
        if (color) {
          color = `color-${color}`
        }
        return (
            <i className={klassName(NS, size, color, 'icon')} {...this.props}></i>
        );
    }
}

Icon.propTypes = {
    size: PropTypes.oneOf(['small', '', 'large', 'huge']),
    color: PropTypes.string
}

Icon.defaultProps = {
    size: '',
    color: '',
}

module.exports = {
    Icon
}