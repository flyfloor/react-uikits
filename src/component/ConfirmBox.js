const React = require('react')
const _ConfirmBox = require('react-ui-component').ConfirmBox
const NS = require('./base/constant').NS
const klassName = require('./base/util').klassName

const ConfirmBox = React.createClass({
    getDefaultProps() {
        return {
            confirm: <button className={`${NS} tiny blue button`}>确认</button>,
            cancel: <button className={`${NS} tiny button`}>取消</button>,
        }
    },
    render() {
        const {props} = this
        let className = klassName(props.className, NS)
        return (
            <_ConfirmBox {...props} className={className} />
        )
    }
});

module.exports = {
    ConfirmBox
}