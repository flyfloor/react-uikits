const React = require('react')
const _FlashMessage = require('react-ui-component').FlashMessage
const NS = require('./base/constant').NS
const klassName = require('./base/util').klassName

const Toast = React.createClass({
    getDefaultProps() {
        return {
            close: <i className="dot icon">close</i>
        }
    },
    open(){
        this.refs.fm.open()
    },
    render() {
        const {props} = this
        let className = klassName(props.className, NS)
        return (
            <_FlashMessage ref="fm" {...props} className={className} />
        )
    }
});

module.exports = {
    Toast
}
