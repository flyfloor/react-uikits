const React = require('react')
const _Carousel = require('react-ui-component').Carousel
const NS = require('./base/constant').NS
const klassName = require('./base/util').klassName

const Carousel = React.createClass({
    render() {
        const {props} = this
        let className = klassName(props.className, NS)
        return (
            <_Carousel {...props} className={className} />
        )
    }
});

module.exports = {
    Carousel
}
