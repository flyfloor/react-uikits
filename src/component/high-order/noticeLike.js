const React = require('react')
const _NoticeCenter = require('react-ui-component').NoticeCenter
const NS = require('../base/constant').NS

const BADGE_ICONS = {
    success: 'check',
    info: 'info',
    warning: 'warning',
    error: 'error',
}

let instance = null

const noticeLike = function(_config = {}){
    return {
        _config,
        generateNotice(notice){
            let { content, delay, close, onClose, showClose } = notice
            const { CONTENT, DELAY, CLASSNAME, PREFIX } = this._config
            notice.content = content || CONTENT
            if (delay === undefined) {
                notice.delay = DELAY
            }

            notice.close = (delay === 0 || onClose || showClose) ? 
                                close || <i className={`${NS} icon`}>close</i>
                                : null

            instance = instance && instance.key === PREFIX ? instance : _NoticeCenter.init({
                className: CLASSNAME,
                prefix: PREFIX,
            })

            return instance.addNotice(notice)
        },

        assembleContent(type, msg, opt = {}){
            if (!msg) {
                throw new Error('message is required')
            }
            opt = opt || {}

            opt.icon = <i className={`${NS} icon ${type}`}>{BADGE_ICONS[type]}</i>

            let content = <span className="_message">{msg}</span>

            opt.content = content
            this.generateNotice(opt)
        },

        show(msgObj){
            return this.generateNotice(msgObj)
        },
        success(msg, opt){
            return this.assembleContent('success', msg, opt)
        },
        info(msg, opt){
            return this.assembleContent('info', msg, opt)
        },
        warning(msg, opt){
            return this.assembleContent('warning', msg, opt)
        },
        error(msg, opt){
            return this.assembleContent('error', msg, opt)
        }
    }
}

module.exports = {
    noticeLike
}
