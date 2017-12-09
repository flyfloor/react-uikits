import React, { Component } from 'react';
import {CN, TitleBlock} from '../util/tools';
import {NS, COLORS} from '../constant';
import CodeView from './CodeView';

const makeCard = (cn='card') => {
    return (
        <div className={cn}>
            <div className={CN('image')}>
                <img src="http://braavos.me/dot-css/dist/img/img.png"/>
            </div>
            <div className="header">
                Header
            </div>
            <div className="content">
                <p>This is content</p>
            </div>
            <div className="extra">
                <p>This is extra data</p>
            </div>
        </div>
    );
};

export class CardPage extends Component {
    render() {
        return (
            <div>
                {TitleBlock('卡片')}
                <ul>
                    <li>
                        <h4>单卡片</h4>
                        <CodeView component={
                            <div className={CN('card')}>
                                <div className={CN('image')}>
                                    <img src="http://braavos.me/dot-css/dist/img/avatar.png"/>
                                </div>
                                <div className="content">
                                    <p>This is content</p>
                                </div>
                                <div className="extra">
                                    <p>This is extra data</p>
                                </div>
                            </div>
                        }>
{`<div className="${CN('card')}">
    <div className="${CN('image')}">
        <img src="http://braavos.me/dot-css/dist/img/avatar.png"/>
    </div>
    <div className="content">
        <p>This is content</p>
    </div>
    <div className="extra">
        <p>This is extra data</p>
    </div>
</div>`}                                
                        </CodeView>
                        <br/>
                    </li>
                    <li>
                        <h4>卡片集</h4>
                        <CodeView component={
                            <div className={CN('cards')}>
                                {makeCard()}
                                {makeCard()}
                                {makeCard()}
                                {makeCard()}
                                {makeCard()}
                            </div>
                        }>
{`<div className="${CN('cards')}">
    <div className="card">
        ...
    </div>
</div>
`}                                    
                        </CodeView>
                        <br/>
                    </li>
                    <li>
                        <h4>固定栏数的卡片集</h4>
                        <CodeView component={
                            <div className={CN('cards cards-5')}>
                                {makeCard()}
                                {makeCard()}
                                {makeCard()}
                                {makeCard()}
                                {makeCard()}
                            </div>
                        }>
{`<div className="${CN('cards cards-5')}">
    <div className="card">
        ...
    </div>
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
