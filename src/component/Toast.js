const React = require('react')
const _NoticeCenter = require('react-ui-component').NoticeCenter
const NS = require('./base/constant').NS
const DEFAULT_CLASSNAME = `${NS} flash-message`
const DEFAULT_PREFIX = 'flash-message'
const DEFAULT_CONTENT = 'this is a flash message'
const DEFAULT_DELAY = 5000
const POSITIONS = ['top', 'center', 'bottom']
const BADGE_ICONS = {
    success: 'mood',
    info: 'info',
    warning: 'warning',
    error: 'error',
}

let instance = null

const generateNotice = function({ content, position, delay, onClick }){
    position = POSITIONS.indexOf(position) !== -1 ? position : POSITIONS[0]
    content = content || DEFAULT_CONTENT
    delay = delay || DEFAULT_DELAY
    instance = instance || _NoticeCenter.init({
        className: DEFAULT_CLASSNAME,
        prefix: DEFAULT_PREFIX,
    })
    return instance.addNotice({
        content,
        delay,
        close: null,
        className: position,
        onClick,
    })
}

const assembleContent = (type, msg, opt={}) => {
    if (!msg) {
        throw new Error('message is required')
    }
    let content = <div className='_wrap'>
                    <i className={`${NS} icon ${type}`}>{BADGE_ICONS[type]}</i>
                    <p className="_message">{msg}</p>
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
