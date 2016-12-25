import React from 'react';
import {NS} from '../constant';
export const CN = (className='') => {
    return className ? `${NS} ${className}` : NS
}

export const TitleBlock = (name, content) => {
    content = content || <span>本文档内容主要关于 <span className={`${NS} color-red`}>{name}</span></span>
    return (
        <div>
            <h2>{name}</h2>
            <blockquote className={CN('blockquote')}>
                <p>{content}</p>
            </blockquote>
        </div>
    )
}

export const formatDate = (date, fmt="yyyy-MM-dd") => {
    if (!date) {
        date = new Date()
    }
    let obj = {
        "M+": date.getMonth() + 1,
        "d+": date.getDate(),
        "h+": date.getHours(), 
        "m+": date.getMinutes(),
        "s+": date.getSeconds(),
        "q+": Math.floor((date.getMonth() + 3) / 3),
        "S": date.getMilliseconds(),
    };
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, String(date.getFullYear()).substr(4 - RegExp.$1.length));
    }
    for (let k in obj) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? obj[k] : `00${obj[k]}`.substr(String(obj[k]).length));
        }
    }
    return fmt;
}