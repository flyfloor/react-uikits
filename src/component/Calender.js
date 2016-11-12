const React = require('react')
const _Calender = require('react-ui-component').Calender
const NS = require('./base/constant').NS
const klassName = require('./base/util').klassName

const Calender = React.createClass({
    render() {
        const {props} = this
        let className = klassName(props.className, NS)
        return (
            <_Calender {...props} className={className} />
        )
    }
});

module.exports = {
    Calender
}
