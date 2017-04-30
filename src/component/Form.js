const React = require('react')
const Component = React.Component
const PropTypes = require('prop-types')
const constant = require('./base/constant')
const {FORM_RULE, DEFAULT_INVALID_MSG, NS} = constant
const klassName = require('./base/util').klassName
const Schema = require('async-validator');
let vBuilder = null

// form
class Form extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this)
        if (props.rules) {
            vBuilder = new Schema(props.rules)
        }
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
    validateField(name, afterCallback){
        if (!name) {
            throw new Error('validate method need field name')
        }
        this.validate({ name, afterCallback })
    }
    // after validate callback, return callback with errors
    afterValidateError(callback){
        if (!callback instanceof Function) {
            return
        }
        let callbackRtn = callback.call(this)
        if (!callbackRtn) {
            return success => success.call(this, null)
        }
        let { valid, name, message=DEFAULT_INVALID_MSG } = callbackRtn
        if (!name) {
            throw new Error(`after validate function need return specify validate field name, check: ${callback.name}`)
        }

        let {errorFieldsObj} = this.state
        if (!valid) {
            let _errField = [{ field: [name], message }]
            if (errorFieldsObj) {
                errorFieldsObj[name] = _errField
            } else {
                errorFieldsObj = { [name]: _errField }
            }
            this.setState({
                errorFieldsObj
            });
            return fail => fail && fail.call(this, _errField)
        } else {
            if (errorFieldsObj) {
                delete errorFieldsObj[name]
            }
            this.setState({
                errorFieldsObj
            });
        }
        return success => success.call(this, null)
    }

    validate({ name, success, fail, afterCallback } = { name: '' } ){
        const {store, rules, after} = this.props
        // after callback or after from props
        afterCallback = afterCallback || after
        let submitData = name ? store[name] : store
        // field name is given, but rules not found, check if has after validate
        if (name && !rules[name]) {
            return this.afterValidateError(afterCallback)(errors => {
                return errors ? fail && fail.call(this, errors) : success && success.call(this, submitData)
            })
        }
        // validator descriptor
        let descriptor = name ? { [name]: rules[name] } : rules
        let storeData = name ? { [name]: store[name] } : store

        vBuilder = new Schema(descriptor)
        vBuilder.validate(storeData, (errors, errObj) => {
            let {errorFieldsObj} = this.state
            // valid special field
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
                return
            }
            if (afterCallback) {
                return this.afterValidateError(afterCallback)(errors => {
                    return errors ? fail && fail.call(this, errors) : success && success.call(this, submitData)
                })
            }
            return success && success.call(this, submitData)
        })
    }
    handleSubmit(e){
        e.preventDefault()
        const {store, rules, onSubmit, onError} = this.props
        if (!rules) {
            return onSubmit(store, this.props)
        }
        this.validate({
            success(){
                onSubmit(store, this.props)
            },
            fail(errors){
                if (onError) {
                    onError(errors)
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
        delete _props.after 

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
    conbineEvent(props, event){
        let {name, after} = this.props
        if (props[event]) {
            let oldEvent = props[event]
            props[event] = val => {
                oldEvent(val)
                this.context.validateField(name, after)
            }
        } else {
            props[event] = () => {
                this.context.validateField(name, after)
            }
        }
    }
    render() {
        let {trigger, children} = this.props
        let _props = Object.assign({}, children.props)
        if (trigger instanceof Array) {
            trigger.forEach(e => this.conbineEvent(_props, e))
        } else {
            this.conbineEvent(_props, trigger)
        }

        return (
            <children.type {..._props}/>
        );
    }
}

Validator.propTypes = {
    children: PropTypes.element.isRequired,
    trigger: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
    name: PropTypes.string.isRequired,
}

Validator.contextTypes = {
    validateField: PropTypes.func,
}

Validator.defaultProps = {
    trigger: 'onChange',
}


module.exports = {
    Form,
    Fields,
    Field,
    Group,
    Validator,
    RULE: FORM_RULE,
}
