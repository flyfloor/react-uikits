const React = require('react')
const Component = React.Component
const _Pagination = require('react-ui-component').Pagination
const NS = require('./base/constant').NS
const klassName = require('./base/util').klassName

class Pagination extends Component {
    render() {
        const {props} = this
        let className = klassName(props.className, NS)
        return (
            <_Pagination {...props} className={className} />
        )
    }
}

Pagination.defaultProps = {
    prev: <span>上一页</span>,
    next: <span>下一页</span>,
}

module.exports = {
    Pagination
}
