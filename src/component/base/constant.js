const NS = 'dot';

const FORM_RULE = {
    required: {
        required: true, message: '不能为空',
    },
    textRequired: {
        required: true, message: '不能为空', whitespace: true,
    },
    email: {
        type: 'pattern', pattern: /^[a-z_0-9.-]{1,64}@([a-z0-9-]{1,200}.){1,5}[a-z]{1,6}$/i, message: '非法邮箱格式',
    },
    chinese: {
        type: 'pattern', pattern: /^[\u4e00-\u9fa5]+$/, message: '非法中文格式',
    },
    passtiveInt: {
        type: 'pattern', pattern: /^[1-9]\d*$/, message: '非法正整数格式',
    },
    money: {
        type: 'pattern', pattern: /^[0-9]+(.[0-9]{1,2})?$/, message: '非法金额格式',
    },
    passtiveNumber: {
        type: 'pattern', pattern: /^[+]?([0-9]+(?:[\.][0-9]*)?|\.[0-9]+)$/, message: '非法正数格式',
    },
    word: {
        type: 'pattern', pattern: /^[a-zA-Z]+$/, message: '非法英文字符',
    },
    alphanumeric: {
        type: 'pattern', pattern: /^[a-z0-9]+$/i, message: '只允许输入英文及数字',
    },
    idCard: {
        type: 'pattern', pattern: /(^\d{15}$)|(^\d{17}([0-9]|X)$)/i, message: '非法身份证号',
    },
    phone: {
        type: 'pattern', 
        pattern: /(^(0[0-9]{2,3}-?)?([2-9][0-9]{6,7})+(-[0-9]{1,4})?$)|(^(0|\\+86|\\+17951)?-?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$)/i, 
        message: '非法电话号码',
    },
    url: {
        type: 'pattern', 
        pattern: /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/, 
        message: '非法链接',
    },
}

const DEFAULT_INVALID_MSG = '校验失败'

module.exports = {
    NS,
    FORM_RULE,
    DEFAULT_INVALID_MSG,
}