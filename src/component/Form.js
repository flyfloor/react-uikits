const React = require('react')
const Component = React.Component
const PropTypes = require('prop-types')

const constant = require('./base/constant')
const {FORM_RULE, DEFAULT_INVALID_MSG, NS} = constant
const klassName = require('./base/util').klassName
const Schema = require('async-validator/lib');
let vBuilder = null

/*
Form
*/

class Form extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleKeyDown = this.handleKeyDown.bind(this)
        if (props.rules) {
            vBuilder = new Schema(props.rules)
        }
        this.state = {
            errorFieldsObj: {},
        }
    }
    getChildContext(){
        return {
            errorFieldsObj: this.state.errorFieldsObj,
            validateField: this.validateField.bind(this),
        }
    }
    validateField(field, afterCallback){
        if (!field) {
            throw new Error('validate method need field name')
        }
        this.validate({ name: field, afterCallback })
    }

    validateGlobalAfter(){
        let {afterFilters} = this.props
        let isValid = true
        let {errorFieldsObj} = this.state
        if (!afterFilters) {
            return success => success && success.call(this)
        }
        afterFilters.forEach(action => {
            let result = action()
            if (result && result.valid === false) {
                isValid = false
                if (!result.name) throw new Error(`after validate function need return specify validate field name`)
                let _errField = [{ name: result.name, message: result.message }]
                if (errorFieldsObj) {
                    errorFieldsObj[result.name] = _errField
                } else {
                    errorFieldsObj = { [result.name]: _errField }
                }
            } else {
                // remove errors
                if (errorFieldsObj) delete errorFieldsObj[result.name]
            }
        })
        this.setState({ errorFieldsObj })
        let errors = []
        Object.keys(errorFieldsObj).forEach(key => {
            if (errorFieldsObj[key]) {
                let item = errorFieldsObj[key][0]
                errors.push({ message: item.message, field: item.name })
            }
        })

        return isValid ? success => success && success.call(this) : fail => fail && fail.call(this, errors)
    }

    // after validate callback, return callback with errors
    validateAfterAction({ field, afterCallback}){
        if (!field) {
            return this.validateGlobalAfter()
        }
        
        // no after callback handler, then success
        if (!afterCallback) {
            return success => success.call(this, null)
        }
        
        let callbackRtn = afterCallback.call(this);
        // if after callback return nothing, then pass.
        if (!callbackRtn) {
            return success => success.call(this, null)
        }

        let { valid, name, message=DEFAULT_INVALID_MSG } = callbackRtn

        // need to specify the valid field to show error
        if (!name) {
            throw new Error(`after validate function need return specify validate field name, check: ${afterCallback.name}`)
        }

        let {errorFieldsObj} = this.state
        // if unvalid, push errors
        if (!valid) {
            let _errField = [{ name: field, message }]
            if (errorFieldsObj) {
                errorFieldsObj[name] = _errField
            } else {
                errorFieldsObj = { [name]: _errField }
            }
            this.setState({
                errorFieldsObj
            });
            // return invoke error handler
            return fail => fail && fail.call(this, _errField)
        } else {
            // remove errors
            if (errorFieldsObj) {
                delete errorFieldsObj[name]
            }
            this.setState({
                errorFieldsObj
            });
        }
        return success => success.call(this, null)
        
    }

    handleKeyDown(e){
        if (e.keyCode === 13 && e.target.type !== 'textarea') {
            e.preventDefault()
            return false
        }
    }

    // check if name is "a.b.c.d"
    getValidateDataByName(store, name){
        if (!name) {
            return store
        }
        if (name.indexOf('.') !== -1) {
            let data = {}
            name = name.split('.')
            try {
                data = name.reduce((prev, next) => {
                    return prev[next]
                }, store)
            } catch (e) { 
                throw Error(e)
            }
            return data
        }
        return store[name]
    }
    
    // check if rule's key is "a.b.c.d", generate fake store with rule {a: {b: {c: { d: value }}}} => {"a.b.c.d": value}
    convertFakeStore(){
        let {store, rules} = this.props
        let newStore = Object.assign({}, store)
        Object.keys(rules).map(key => {
            if (rules.hasOwnProperty(key) && key.indexOf('.') !== -1) {
                let names = key.split('.')
                let value = names.reduce((prev, next) => {
                    return prev[next]
                }, newStore)
                newStore[key] = value
            }
            return undefined
        })
        return newStore
    }

    validate({ name, success, fail, afterCallback } = { name: '' } ){
        const {store, rules} = this.props
        let fakeStore = this.convertFakeStore()
        let submitData = this.getValidateDataByName(store, name)
        if (name && !rules[name]) {
            // field name is given, but rules not found, check if has after validate
            return this.validateAfterAction({ field: name, afterCallback })(errors => {
                return errors ? fail && fail.call(this, errors) : success && success.call(this, submitData)
            })
        }
        // validator descriptor
        let descriptor = name ? { [name]: rules[name] } : rules
        let validateData = name ? { [name]: submitData } : fakeStore

        vBuilder = new Schema(descriptor)
        vBuilder.validate(validateData, (errors, errObj) => {
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
                return fail && fail.call(this, errors)
            }
            return this.validateAfterAction({ field: name, afterCallback })(errors => {
                return errors ? fail && fail.call(this, errors) : success && success.call(this, submitData)
            })
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
        delete _props.afterFilters 

        if (type) {
            className = `${type} ${className}`
            if (type === 'trim') {
                className = `inline ${className}`
            }
            delete _props.type
        }
        return (
            <form {..._props} className={className} onSubmit={this.handleSubmit}
                 onKeyDown={this.handleKeyDown}>
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
    afterFilters: PropTypes.array,
};

/*
Field
*/

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
};

/*
Fields
*/

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
};

/*
Group
*/

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

/*
Validator
*/

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
