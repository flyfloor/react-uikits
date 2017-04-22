const React = require('react')
const { Component } = React
const NS = require('./constant').NS

const klassName = function() {
    if (arguments.length === 0) {
        return ''
    }
    let cls = Array.prototype.slice.call(arguments)
    return cls.filter(l => l).join(' ')
}

const wrapComponent = Cmp => {
    return class extends Component {
        render() {
            const {props} = this
            return (
                <Cmp {...props} className={klassName(props.className, NS)} />
            )
        }
    }
}

module.exports = {
    klassName,
    wrapComponent,
}