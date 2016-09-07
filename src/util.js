import React from 'react';
import {NS} from './constant';
export const CN = (className='') => {
    return className ? `${NS} ${className}` : NS
}

export const TitleBlock = (name, content) => {
    content = content || `Content about ${name}`
    return (
        <div>
            <h3>{name}</h3>
            <blockquote className={CN('blockquote')}>
                <p>{content}</p>
            </blockquote>
        </div>
    )
}
