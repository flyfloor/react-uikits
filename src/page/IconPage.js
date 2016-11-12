import React, { Component } from 'react';
import {CN, TitleBlock} from '../util/tools';
import {NS, ICONS} from '../constant';
import {CodeView} from '../component/CodeView';

export class IconPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            display: 'account_circle'
        };
    }
    
    handleClick(icon){
        this.setState({
            display: icon
        });
    }

    makeIcons(){
        return (
            <ul className={CN('grid grid-5 text-center text-extra')}>
                {ICONS.map(icon => {
                    return <li key={icon} onClick={() => this.handleClick(icon)} className={CN('column block truncate field icon-item')}>
                                <i className={CN('icon')}>{icon}</i>
                                <p>{icon}</p>
                            </li>
                })}
            </ul>
        );
    };
    render() {
        return (
            <div className="icon-example">
                {TitleBlock('Icon', <span>
                                        图标集, 
                                        <span className={CN('color-brown')}>来自 Google's material icons, 所有图标在此 ==>
                                        <a href="https://material.io/icons/" target="_blank"> Google icons</a>
                                        </span>
                                    </span>)}
                <CodeView component={
                    this.makeIcons()
                }>
                    {`<i class="${NS} icon">${this.state.display}</i>`}
                    
                </CodeView>
                <br/>

                <h4>图标颜色</h4>
                <CodeView component={<div>
                    <i className={CN('color-red icon')}>favorite</i>
                    <span> </span>
                    <i className={CN('color-green icon')}>all_inclusive</i>
                </div>
                }>
                    {`<i class="${NS} color-red icon">favorite</i>`}
                </CodeView>
                <br/>

            </div>
        );
    }
}