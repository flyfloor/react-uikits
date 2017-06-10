const React = require('react')
const _NoticeCenter = require('react-ui-component').NoticeCenter
const NS = require('./base/constant').NS
const DEFAULT_CLASSNAME = `${NS} flash-message`
const DEFAULT_PREFIX = 'flash-message'
const DEFAULT_CONTENT = 'this is a flash message'
const DEFAULT_DELAY = 5000
const BADGE_ICONS = {
    success: 'check',
    info: 'info',
    warning: 'warning',
    error: 'error',
}

let instance = null

const generateNotice = function({ content, delay, showClose, onClick, onClose }){
    content = content || DEFAULT_CONTENT
    delay = delay || DEFAULT_DELAY
    instance = instance || _NoticeCenter.init({
        className: DEFAULT_CLASSNAME,
        prefix: DEFAULT_PREFIX,
    })
    return instance.addNotice({
        content,
        delay,
        close: onClose || showClose ? <i className={`${NS} icon`}>close</i> : null,
        onClick,
        onClose,
    })
}

const assembleContent = (type, msg, opt={}) => {
    if (!msg) {
        throw new Error('message is required')
    }
    opt = opt || {}

    let content = <div className='_wrap'>
                    <i className={`${NS} icon ${type}`}>{BADGE_ICONS[type]}</i>
                    <span className="_message">{msg}</span>
                </div>
    opt.content = content
    generateNotice(opt)
}

const Toast = function(){
    return {
        show(msgObj){
            return generateNotice(msgObj)
        },
        success(msg, opt){
            return assembleContent('success', msg, opt)
        },
        info(msg, opt){
            return assembleContent('info', msg, opt)
        },
        warning(msg, opt){
            return assembleContent('warning', msg, opt)
        },
        error(msg, opt){
            return assembleContent('error', msg, opt)
        }
    }
}()

module.exports = {
    Toast
}
