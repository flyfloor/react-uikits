const React = require('react')
const _Modal = require('react-ui-component').Modal
const NS = require('./base/constant').NS
const klassName = require('./base/util').klassName

const Modal = React.createClass({
    getDefaultProps() {
        return {
            confirm: <button className={`${NS} blue button`}>确认</button>,
            cancel: <button className={`${NS} button`}>取消</button>,
            close: <i className={`${NS} icon`}>close</i>
        }
    },
    open(){
        this.refs.modal.open()
    },
    render() {
        const {props} = this
        let className = klassName(props.className, NS)
        return (
            <_Modal {...props} ref="modal" className={className} />
        )
    }
});

module.exports = {
    Modal
}
