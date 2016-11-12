const React = require('react')
const _Pagination = require('react-ui-component').Pagination
const NS = require('./base/constant').NS
const klassName = require('./base/util').klassName

const Pagination = React.createClass({
    getDefaultProps() {
        return {
            prev: <span>上一页</span>,
            next: <span>下一页</span>,
        }
    },
    render() {
        const {props} = this
        let className = klassName(props.className, NS)
        return (
            <_Pagination {...props} className={className} />
        )
    }
});

module.exports = {
    Pagination
}
