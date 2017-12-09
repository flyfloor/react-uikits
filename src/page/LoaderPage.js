import React, { Component } from 'react';
import {CN, TitleBlock} from '../util/tools';
import {NS, COLORS} from '../constant';
import CodeView from './CodeView';

export class LoaderPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loader: false,
            loader1: false,
            loader2: false,
            invertLoader: false,
            invertLoader1: false,
            invertLoader2: false,
        }
    }
    render() {
        return (
            <div>
                {TitleBlock('加载器')}
                <ul>
                    <li>
                        <h4>默认加载器</h4>
                        <CodeView component={
                            <div className={CN('small loader')}></div>
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
{`<div class="${CN('small bounce loader')}">
    <div class="bounce"></div>
    <div class="bounce"></div>
    <div class="bounce"></div>
</div>

<div class="${CN('bounce loader')}">
    <div class="bounce"></div>
    <div class="bounce"></div>
    <div class="bounce"></div>
</div>

<div class="${CN('large bounce loader')}">
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
                    <li>
                        <h4>居中加载器</h4>
                        <CodeView component={
                            <div>
                                <div className={CN('center loader')}></div>
                                <br/>
                                <div className={CN('center bounce loader')}>
                                    <div className="bounce"></div>
                                    <div className="bounce"></div>
                                    <div className="bounce"></div>
                                </div>
                                <br/>
                                <div className={CN('center google spinner')}></div>
                            </div>
                        }>
{`<div class="${CN('center loader')}"></div>
<div class="${CN('center bounce loader')}">
    <div class="bounce"></div>
    <div class="bounce"></div>
    <div class="bounce"></div>
</div>
size: small, large
<div class="${CN('google spinner')}"></div>`}
                        </CodeView>
                        <br/>
                    </li>

                    <h4 className={CN('warning large message')}>不同尺寸(small, large)同样适用于局部及全局加载器</h4>
                    <br/>

                    <li>
                        <h4>局部加载器</h4>
                        <CodeView component={
                            <div className={`${CN('loader-wrap')}`}>
                                <div className="loader"></div>
                            </div>
                            }>
{`<div className="${CN('loader-wrap')}">
    <div className="loader"></div>
</div>`}                            
                        </CodeView>
                        <br/>

                        <CodeView component={
                            <div className={`${CN('loader-wrap')}`}>
                                <div className="google spinner"></div>
                            </div>
                            }>
{`<div className="${CN('loader-wrap')}">
    <div className="google spinner"></div>
</div>`}                            
                        </CodeView>

                        <br/>

                        <CodeView component={
                            <div className={`${CN('loader-wrap')}`}>
                                <div className="bounce loader">
                                    <div className="bounce"></div>
                                    <div className="bounce"></div>
                                    <div className="bounce"></div>
                                </div>
                            </div>
                            }>
{`<div className="${CN('loader-wrap')}">
    <div className="bounce loader">
        <div className="bounce"></div>
        <div className="bounce"></div>
        <div className="bounce"></div>
    </div>
</div>`}                            
                        </CodeView>
                        <br/>
                        
                        <h4>反色局部加载器</h4>
                        <CodeView component={
                            <div className={`${CN('inverted loader-wrap')}`}>
                                <div className="google spinner"></div>
                            </div>
                            }>
{`<div className="${CN('inverted loader-wrap')}">
    <div className="google spinner"></div>
</div>`}                            
                        </CodeView>
                        <br/>

                        <CodeView component={
                            <div className={`${CN('inverted loader-wrap')}`}>
                                <div className="loader"></div>
                            </div>
                            }>
{`<div className="${CN('inverted loader-wrap')}">
    <div className="loader"></div>
</div>`}                            
                        </CodeView>
                        <br/>

                        <CodeView component={
                            <div className={`${CN('inverted loader-wrap')}`}>
                                <div className="bounce loader">
                                    <div className="bounce"></div>
                                    <div className="bounce"></div>
                                    <div className="bounce"></div>
                                </div>
                            </div>
                            }>
{`<div className="${CN('inverted loader-wrap')}">
    <div className="bounce loader">
        <div className="bounce"></div>
        <div className="bounce"></div>
        <div className="bounce"></div>
    </div>
</div>`}                            
                        </CodeView>
                        <br/>

                        <h4>全局加载器</h4>
                        <CodeView component={
                            <div>
                                <button onClick={() => this.setState({
                                   loader: true
                                })}>显示</button>
                                {this.state.loader ? 
                                    <div className={`${CN('full loader-wrap')}`} onClick={() => this.setState({
                                        loader: false
                                        })}>
                                        <div className="loader"></div>
                                    </div>
                                    : null}
                            </div>
                            }>
{`<div className="full loader-wrap">
    <div className="loader"></div>
</div>`}                    
                        </CodeView>
                        <br/>  

                        <CodeView component={
                            <div>
                                <button onClick={() => this.setState({
                                   loader1: true
                                })}>显示</button>
                                {this.state.loader1 ? 
                                    <div className={`${CN('full loader-wrap')}`} onClick={() => this.setState({
                                        loader1: false
                                        })}>
                                        <div className="google spinner"></div>
                                    </div>
                                    : null}
                            </div>
                            }>
{`<div className="full loader-wrap">
    <div className="google spinner"></div>
</div>`}                    
                        </CodeView>
                        <br/> 

                        <CodeView component={
                            <div>
                                <button onClick={() => this.setState({
                                   loader2: true
                                })}>显示</button>
                                {this.state.loader2 ? 
                                    <div className={`${CN('full loader-wrap')}`} onClick={() => this.setState({
                                        loader2: false
                                        })}>
                                        <div className="bounce loader">
                                            <div className="bounce"></div>
                                            <div className="bounce"></div>
                                            <div className="bounce"></div>
                                        </div>
                                    </div>
                                    : null}
                            </div>
                            }>
{`<div className="full loader-wrap">
    <div className="bounce loader">
        <div className="bounce"></div>
        <div className="bounce"></div>
        <div className="bounce"></div>
    </div>
</div>`}                    
                        </CodeView>
                        <br/>  

                        <h4>反色全局加载器</h4>
                        <CodeView component={
                            <div>
                                <button onClick={() => this.setState({
                                   invertLoader: true
                                })}>显示</button>
                                {this.state.invertLoader ? 
                                    <div className={`${CN('full inverted loader-wrap')}`} onClick={() => this.setState({
                                        invertLoader: false
                                        })}>
                                        <div className="loader"></div>
                                    </div>
                                    : null}
                            </div>
                            }>
{`<div className="full inverted loader-wrap">
    <div className="loader"></div>
</div>`}                    
                        </CodeView>
                        <br/>   

                        <CodeView component={
                            <div>
                                <button onClick={() => this.setState({
                                   invertLoader1: true
                                })}>显示</button>
                                {this.state.invertLoader1 ? 
                                    <div className={`${CN('full inverted loader-wrap')}`} onClick={() => this.setState({
                                        invertLoader1: false
                                        })}>
                                        <div className="google spinner"></div>
                                    </div>
                                    : null}
                            </div>
                            }>
{`<div className="full inverted loader-wrap">
    <div className="google spinner"></div>
</div>`}                    
                        </CodeView>
                        <br/>      
                        
                        <CodeView component={
                            <div>
                                <button onClick={() => this.setState({
                                   invertLoader2: true
                                })}>显示</button>
                                {this.state.invertLoader2 ? 
                                    <div className={`${CN('full inverted loader-wrap')}`} onClick={() => this.setState({
                                        invertLoader2: false
                                        })}>
                                        <div className="bounce loader">
                                            <div className="bounce"></div>
                                            <div className="bounce"></div>
                                            <div className="bounce"></div>
                                        </div>
                                    </div>
                                    : null}
                            </div>
                            }>
{`<div className="full inverted loader-wrap">
    <div className="bounce loader">
        <div className="bounce"></div>
        <div className="bounce"></div>
        <div className="bounce"></div>
    </div>
</div>`}                    
                        </CodeView>
                        <br/>        
                    </li>
                </ul>
            </div>
        );
    }
}