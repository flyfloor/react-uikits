const React = require('react')
const PropTypes = React.PropTypes
const NS = require('./base/constant').NS
const klassName = require('./base/util').klassName
const Schema = require('async-validator');
let validator = null

// form
const Form = React.createClass({
    propTypes: {
        type: PropTypes.oneOf(['inline', 'trim', '']),
        onSubmit: PropTypes.func.isRequired,
    },
    getInitialState() {
        return {
            errorFields: {},
        };
    },
    getChildContext(){
        return {
            rules: this.props.rules,
            errorFields: this.state.errorFields
        }
    },
    childContextTypes: {
        rules: PropTypes.object,
        errorFields: PropTypes.object,
    },
    validateAll(succFunc, errFunc){
        let {rules, store} = this.props
        if (rules && store) {
            validator = validator || new Schema(rules)
            validator.validate(store, errors => {
                if (errors) {
                    let errorFields = errors.reduce((prev, err)=> {
                        prev[err.field] = err.message
                        return prev
                    }, {})
                    this.setState({ errorFields })

                    return errFunc && errFunc(errors)
                }
                this.setState({
                    errorFields: {}
                }, () => succFunc(store))
            })
        }
    },
    handleSubmit(e){
        e.preventDefault()
        let {onSubmit, rules, store, onError} = this.props
        if (rules && store) {
            this.validateAll(onSubmit, errors =>{
                // on error handler
                onError && onError(errors)
            })
        } else {
            // submit value
            onSubmit(store)
        }
        return false
    },
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
})

// field
const Field = React.createClass({
    propTypes: {
        type: PropTypes.oneOf(['inline', '']),
        size: PropTypes.number,
    },
    contextTypes: {
        rules: PropTypes.object,
        errorFields: PropTypes.object,
    },
    render() {
        let _props = Object.assign({}, this.props)
        let {className, type, size, label, validate} = _props
        let {errorFields} = this.context
        delete _props.validate
        
        // validate node
        let errorNode = null
        if (errorFields && errorFields[validate]) {
            className = `${className} error`
            errorNode = <span className="text-extra color-red">{errorFields[validate]}</span>
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
                    {_props.children}
                    {errorNode}
                </div>
            )
        }
        return (
            <div {..._props} className={className}>
                {_props.children}
                {errorNode}
            </div>
        )
    }
})

// fields
const Fields = React.createClass({
    propTypes: {
        size: PropTypes.number,
    },
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
})

// group
const Group = React.createClass({
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
})

module.exports = {
    Form,
    Fields,
    Field,
    Group,
}
