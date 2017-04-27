const NS = 'dot';

const FORM_RULE = {
    required: {
        type: "string", required: true, message: '不能为空',
    },
    email: {
        type: 'pattern', pattern: /^[a-z_0-9.-]{1,64}@([a-z0-9-]{1,200}.){1,5}[a-z]{1,6}$/i, message: '非法邮箱格式',
    },
    chinese: {
        type: 'pattern', pattern: /^[\u4e00-\u9fa5]+$/, message: '非法中文格式',
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

module.exports = {
    NS,
    FORM_RULE,
}