const React = require('react')
const Component = React.Component
const PropTypes = require('prop-types')
const NS = require('./base/constant').NS
const klassName = require('./base/util').klassName

// form
class Form extends Component {
    render() {
        let _props = Object.assign({}, this.props)
        let {className, type} = _props
        className = klassName(NS, className, 'form')
        delete _props.className 
        if (type) {
            className = `${type} ${className}`
            if (type === 'trim') {
                className = `inline ${className}`
            }
            delete _props.type
        }
        return (
            <form {..._props} className={className}>
            </form>
        )
    }
}

Form.propTypes = {
    type: PropTypes.oneOf(['inline', 'trim', ''])
}

// field
class Field extends Component {
    render() {
        let _props = Object.assign({}, this.props)
        let {className, type, size, label} = _props
        if (size) {
            className = klassName(NS, className, `field-${size}`)
            delete _props.size 
        } else {
            className = klassName(NS, className, 'field')
        }
        delete _props.className 
        if (type) {
            className = `${type} ${className}`
            delete _props.type
        }
        if (label) {
            delete _props.label
            return (
                <div {..._props} className={className}>
                    <label htmlFor="">{label}</label>
                    {_props.children}
                </div>
            )
        }
        return (
            <div {..._props} className={className}></div>
        )
    }
}

Field.propTypes = {
    type: PropTypes.oneOf(['inline', '']),
    size: PropTypes.number,
}

// fields
class Fields extends Component {
    render() {
        let _props = Object.assign({}, this.props)
        let {className, size} = _props
        if (size) {
            className = klassName(NS, className, `fields-${size}`)
            delete _props.size 
        } else {
            className = klassName(NS, className, 'fields')
        }
        delete _props.className 
        return (
            <div {..._props} className={className}></div>
        )
    }
}

Fields.propTypes = {
    size: PropTypes.number,
}

// group
class Group extends Component {
    render() {
        let _props = Object.assign({}, this.props)
        let {className, label, type} = _props
        className = klassName(NS, className, 'group')
        if (type) {
            delete _props.type
            className = `${className} ${type}`
        }
        if (label) {
            delete _props.label
            return (
                <div {..._props} className={className}>
                    <label htmlFor="">{label}</label>
                    {_props.children}
                </div>
            )
        }
        return (
            <div {..._props} className={className}></div>
        )
    }
}

module.exports = {
    Form,
    Fields,
    Field,
    Group,
}
