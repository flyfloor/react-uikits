const React = require('react')
const wrapComponent = require('./base/util').wrapComponent
const Cmp = require('react-ui-component').Pagination

let Pagination = wrapComponent(Cmp)

Pagination.defaultProps = {
    prev: <span>上一页</span>,
    next: <span>下一页</span>,
}

module.exports = {
    Pagination
}
