const React = require('react')
const _Carousel = require('react-ui-component').Carousel
const NS = require('./base/constant').NS
const klassName = require('./base/util').klassName

const Carousel = props => {
    return (
        <_Carousel {...props} className={klassName(props.className, NS)} />
    )
}

module.exports = {
    Carousel
}
