const React = require('react')
const Component = React.Component
const PropTypes = require('prop-types')
const NS = require('./base/constant').NS
const klassName = require('./base/util').klassName
const Schema = require('async-validator');
let vBuilder = null

// form
class Form extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this)
        vBuilder = new Schema(this.props.rules)
        this.state = {
            errorFieldsObj: null,
        }
    }
    getChildContext(){
        return {
            errorFieldsObj: this.state.errorFieldsObj,
            validateField: this.validateField.bind(this),
        }
    }
    validateField(name){
        if (!name) {
            throw new Error('validate method need field name')
        }
        this.validate({ name })
    }
    validate({ name, success, fail } = { name: '', success: '', fail: '' } ){
        const {store, rules} = this.props
        let descriptor = name ? { [name]: rules[name] } : rules
        let value = name ? { [name]: store[name] } : store

        vBuilder = new Schema(descriptor)
        vBuilder.validate(value, (errors, errObj) => {
            let {errorFieldsObj} = this.state
            if (name && errorFieldsObj) {
                errorFieldsObj[name] = errObj ? errObj[name] : null
                this.setState({
                    errorFieldsObj,
                });
            } else {
                this.setState({
                    errorFieldsObj: errObj
                });
            }

            if (errors) {
                fail && fail.call(this, errors)
            } else {
                success && success.call(this, name ? this.props.store[name] : this.props.store)
            }
        })
    }
    handleSubmit(e){
        e.preventDefault()
        this.validate({
            success(){
                this.props.onSubmit(this.props.store, this.props)
            },
            fail(errors){
                if (this.props.onError) {
                    this.props.onError(errors)
                }
            }
        })
        return false
    }
    render() {
        let _props = Object.assign({}, this.props)
        let {className, type} = _props
        className = klassName(NS, className, 'form')
        delete _props.className 
        delete _props.rules 
        delete _props.store 

        if (type) {
            className = `${type} ${className}`
            if (type === 'trim') {
                className = `inline ${className}`
            }
            delete _props.type
        }
        return (
            <form {..._props} className={className} onSubmit={this.handleSubmit}>
            </form>
        )
    }
}

Form.childContextTypes = {
    errorFieldsObj: PropTypes.object,
    validateField: PropTypes.func,
}

Form.propTypes = {
    type: PropTypes.oneOf(['inline', 'trim', '']),
    onSubmit: PropTypes.func.isRequired,
    onError: PropTypes.func,
}

// field
class Field extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let _props = Object.assign({}, this.props)
        let {className, type, size, label, validate, children} = _props
        let {errorFieldsObj} = this.context
        delete _props.validate
        delete _props.children
        
        // validate node
        let errorNode = null
        if (errorFieldsObj && errorFieldsObj[validate]) {
            className = klassName(className, 'error')
            errorNode = <span className="text-extra error-hint color-red">{errorFieldsObj[validate][0].message}</span>
        }


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
                    {children}
                    {errorNode}
                </div>
            )
        }
        return (
            <div {..._props} className={className}>
                {children}
                {errorNode}
            </div>
        )
    }
}

Field.contextTypes = {
    errorFieldsObj: PropTypes.object,
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

class Validator extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let {on, children, name} = this.props
        let _props = Object.assign({}, children.props)
        if (_props[on]) {
            let oldChange = _props[on]
            _props[on] = val => {
                oldChange(val)
                this.context.validateField(name)
            }
        } else {
            _props[on] = () => {
                this.context.validateField(name)
            }
        }

        return (
            <children.type {..._props}/>
        );
    }
}

Validator.propTypes = {
    children: PropTypes.element.isRequired,
    on: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}

Validator.contextTypes = {
    validateField: PropTypes.func,
}

Validator.defaultProps = {
    on: 'onChange',
}


module.exports = {
    Form,
    Fields,
    Field,
    Group,
    Validator,
}
