const NS = require('./base/constant').NS
const noticeLike = require('./high-order/noticeLike').noticeLike

const Toast = noticeLike({
    PREFIX: 'toast',
    CLASSNAME: `${NS} toast`,
    CONTENT: 'this is a toast',
    DELAY: 5000,
})

module.exports = {
    Toast
}
