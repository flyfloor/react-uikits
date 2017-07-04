const React = require('react')
const Component = React.Component
const _Modal = require('react-ui-component').Modal
const NS = require('./base/constant').NS
const klassName = require('./base/util').klassName

class Modal extends Component {
    open(){
        this.modal.open()
    }
    close(){
        this.modal.close()
    }
    render() {
        const {props} = this
        let className = klassName(props.className, NS)
        return (
            <_Modal {...props} ref={ modal => { this.modal = modal } } className={className} />
        )
    }
}

Modal.defaultProps = {
    confirm: <button className={`${NS} blue button`}>确认</button>,
    cancel: <button className={`${NS} button`}>取消</button>,
    close: <i className={`${NS} icon`}>close</i>
}

module.exports = {
    Modal
}
