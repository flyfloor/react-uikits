import React from 'react';
import {NS} from '../constant';
export const CN = (className='') => {
    return className ? `${NS} ${className}` : NS
}

export const TitleBlock = (name, content) => {
    content = content || <span>文档内容关于 <span className={`${NS} color-red`}>{name}</span></span>
    return (
        <div>
            <h2>{name}</h2>
            <blockquote className={CN('blockquote')}>
                <p>{content}</p>
            </blockquote>
        </div>
    )
}
