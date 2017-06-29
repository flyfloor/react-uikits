import React, { Component } from 'react';
import {CN, TitleBlock} from '../util/tools';
import {NS, ICONS} from '../constant';
import {Icon} from '../component/Icon';
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
                    return <li key={icon} onClick={() => this.handleClick(icon)} 
                                className={CN('column block truncate field icon-item')}>
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
                {TitleBlock('图标', <span>
                                        图标集, 
                                        <span className={CN('color-brown')}>来自 Google's material icons, 所有图标在此 ==>
                                        <a href="https://github.com/google/material-design-icons" target="_blank"> Google icons</a>
                                        </span>
                                    </span>)}
                <h3>使用方式</h3>
                <CodeView component={
                    <i className={`${NS} icon`}>close</i>
                    }>
                    {`<i className="${NS} icon">close</i>`}
                </CodeView>
                <p>或者</p>
                <CodeView component={
                    <Icon>close</Icon>
                }>
                    {`<Icon>close</Icon>`}
                </CodeView>
                <br/>

                <h3>不同尺寸</h3>
                <CodeView component={
                    <div>
                        <Icon size="small">settings</Icon>
                        <Icon>settings</Icon>
                        <Icon size="large">settings</Icon>
                        <Icon size="huge">settings</Icon>
                    </div>
                }>
{`<Icon size="small">settings</Icon>
<Icon>settings</Icon>
<Icon size="large">settings</Icon>
<Icon size="huge">settings</Icon>
`}
                </CodeView>
                <br/>

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