import React, { Component } from 'react';
import {CN, TitleBlock} from '../util/tools';
import {NS, COLORS} from '../constant';
import {CodeView} from '../component/CodeView';

export class LoaderPage extends Component {
    render() {
        return (
            <div>
                {TitleBlock('加载器')}
                <ul>
                    <li>
                        <h4>默认加载器</h4>
                        <CodeView component={
                            <div className={CN('small loader')}>
                            </div>
                        }>
                            {`<div class="${CN('small loader')}"></div>`}
                        </CodeView>
                        <br/>

                        <CodeView component={
                            <div className={CN('loader')}></div>
                        }>
                            {`<div class="${CN('loader')}"></div>`}
                        </CodeView>
                        <br/>

                        <CodeView component={
                            <div className={CN('large loader')}></div>
                        }>
                            {`<div class="${CN('large loader')}"></div>`}
                        </CodeView>
                        <br/>

                        <h4>反色加载器</h4>
                        <CodeView component={
                            <div className={CN('bg-deep_gray block')}>
                                <div className={CN('inverted loader')}></div>
                            </div>
                        }>
                            {`<div class="${CN('inverted loader')}"></div>`}
                        </CodeView>
                        <br/>


                    </li>
                    <li>
                        <h4>反弹加载器</h4>
                        <CodeView component={
                            <div>
                                <div className={CN('small bounce loader')}>
                                    <div className="bounce"></div>
                                    <div className="bounce"></div>
                                    <div className="bounce"></div>
                                </div>
                                <br/>
                                <div className={CN('bounce loader')}>
                                    <div className="bounce"></div>
                                    <div className="bounce"></div>
                                    <div className="bounce"></div>
                                </div>
                                <br/>
                                <div className={CN('large bounce loader')}>
                                    <div className="bounce"></div>
                                    <div className="bounce"></div>
                                    <div className="bounce"></div>
                                </div>
                            </div>
                        }>
{`<div class="${CN('bounce loader')}">
    <div class="bounce"></div>
    <div class="bounce"></div>
    <div class="bounce"></div>
</div>
`}                                
                        </CodeView>
                        <br/>
                    </li>
                    <li>
                        <h4>Google 加载器</h4>
                        <CodeView component={
                            <div>
                                <div className={CN('small google spinner')}></div>
                                <br/>
                                <div className={CN('google spinner')}></div>
                                <br/>
                                <div className={CN('large google spinner')}></div>
                            </div>
                        }>
                            {`<div class="${CN('google spinner')}"></div>`}
                        </CodeView>
                        <br/>
                    </li>
                </ul>
            </div>
        );
    }
}