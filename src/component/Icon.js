const React = require('react')
const Component = React.Component
const klassName = require('./base/util').klassName
const NS = require('./base/constant').NS
const PropTypes = require('prop-types')

class Icon extends Component {
    render() {
        let {size} = this.props
        return (
            <i className={klassName(NS, size, 'icon')} {...this.props}></i>
        );
    }
}

Icon.propTypes = {
    size: PropTypes.oneOf(['small', '', 'large', 'huge'])
}

Icon.defaultProps = {
    size: '',
}

module.exports = {
    Icon
}