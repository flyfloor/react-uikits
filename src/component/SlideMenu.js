const React = require('react')
const _SlideMenu = require('react-ui-component').SlideMenu
const NS = require('./base/constant').NS
const klassName = require('./base/util').klassName

const SlideMenu = React.createClass({
    open(){
        this.refs.slide.open()
    },
    close(){
        this.refs.slide.close()
    },
    render() {
        const {props} = this
        let className = klassName(props.className, NS)
        return (
            <_SlideMenu {...props} ref="slide" className={className} />
        )
    }
});

module.exports = {
    SlideMenu
}
