import React, { Component } from 'react';
import {CN, TitleBlock} from '../util/tools';
import {NS, COLORS} from '../constant';
import CodeView from './CodeView';

export class ItemPage extends Component {
    render() {
        return (
            <div>
                {TitleBlock('条目')}
                <ul>
                    <li>
                        <h4>默认条目, 垂直居中</h4>
                        <CodeView component={
                            <div className={CN('item')}>
                                <div className={CN('mini image')}>
                                    <img src="http://braavos.me/dot-css/dist/img/avatar.png"/>
                                </div>
                                <div className="content">
                                    <div className="header">Jerry</div>
                                    <div className="extra">just push 3 commit to dot-css</div>
                                </div>
                            </div>
                        }>
{`<div className="${CN('item')}">
    <div className="${CN('mini image')}">
        <img src="http://braavos.me/dot-css/dist/img/avatar.png"/>
    </div>
    <div className="content">
        <div className="header">Jerry</div>
        <div className="extra">just push 3 commit to dot-css</div>
    </div>
</div>
`}                                        
                        </CodeView>
                        <br/>
                    </li>
                    <li>
                        <h4>内容居上</h4>
                        <CodeView component={
                            <div className={CN('item top')}>
                                <div className={CN('small image')}>
                                    <img src="http://braavos.me/dot-css/dist/img/img.png"/>
                                </div>
                                <div className="content">
                                    <div className="header">Jerry</div>
                                    <div className="extra">just push 3 commit to dot-css</div>
                                </div>
                            </div>
                        }>
{`<div className="${CN('item top')}">
    ...
</div>
`}                                        
                        </CodeView>
                        <br/>
                    </li>
                    <li className="item">
                        <h4>内容居下</h4>
                        <CodeView component={
                            <div className={CN('item bottom')}>
                                <div className={CN('small image')}>
                                    <img src="http://braavos.me/dot-css/dist/img/img.png"/>
                                </div>
                                <div className="content">
                                    <div className="header">Jerry</div>
                                    <div className="extra">just push 3 commit to dot-css</div>
                                </div>
                            </div>
                        }>
{`<div className="${CN('item bottom')}">
    ...
</div>
`}                                        
                        </CodeView>
                        <br/>
                    </li>
                </ul>
            </div>
        );
    }
}