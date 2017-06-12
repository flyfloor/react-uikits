const NS = require('./base/constant').NS
const noticeLike = require('./high-order/noticeLike').noticeLike

const NoticeCenter = noticeLike({
    PREFIX: 'notice-center',
    CLASSNAME: `${NS} notice-center`,
    CONTENT: 'this is a notice',
    DELAY: 5000,
})

module.exports = {
    NoticeCenter
}
