import React, { Component } from 'react';
import {CN, TitleBlock} from '../util/tools';
import {NS, COLORS, SHAPE_SIZE} from '../constant';
import {CodeView} from '../component/CodeView';

const makeInput = (cn='') => {
    return <div className="field">
                <input type="text" placeholder={cn ? cn : 'input...'} className={CN(`${cn} input`)}/>
            </div>;
};

const actionInputs =  () => {
    let node = [];
    for (var i = 0; i < SHAPE_SIZE.length; i++) {
        node.push(<div className="field" key={`${SHAPE_SIZE[i]}-action-button`}>
                    <div className={CN(`${SHAPE_SIZE[i]} input`)}>
                        <input type="text" placeholder='input...'/>
                        <div className="action">
                            <button>button</button>
                        </div>
                    </div>
                </div>);
    }

    return <div>{node}</div>;
};

export class InputPage extends Component {
    render() {
        return (
            <div>
                {TitleBlock('输入框')}
                <ul>
                    <li>
                        <h4>默认输入框</h4>
                        <CodeView component={
                            makeInput()
                        }>
                           {`<input type="text" className="${NS} input"/>`} 
                        </CodeView>
                        <br/>
                        
                        <h4>直角输入框</h4>
                        <CodeView component={
                            makeInput('angled')
                        }>
                           {`<input type="text" className="${NS} angled input"/>`} 
                        </CodeView>
                        <br/>

                        <h4>文本框</h4>
                        <CodeView component={
                           <textarea className={CN('input')} placeholder='type in something...'></textarea>
                        }>
                            {`<textarea className="${NS} input"></textarea>`}                                
                        </CodeView>
                        <br/>

                        <h4>输入异常输入框</h4>
                        <CodeView component={
                            makeInput('error')
                        }>
{`<div className="${NS} error input">
    <input type="text" />
</div>`}                                
                        </CodeView>
                        <br/>

                        <h4>聚焦输入框</h4>
                        <CodeView component={
                            makeInput('focus')
                        }>
{`<div className="${NS} focus input">
    <input type="text" />
</div>`}                                
                        </CodeView>
                        <br/>

                        <h4>圆角输入框</h4>
                        <CodeView component={
                            makeInput('round')
                        }>
{`<div className="${NS} round input">
    <input type="text" />
</div>`}                                
                        </CodeView>
                        <br/>

                        <h4>圆角带图标输入框</h4>
                        <CodeView component={
                            <div className={CN('round input icon')}>
                                <input type="text"  placeholder="search..."/>
                                <i className="icon">search</i>
                            </div>
                        }>
{`<div className="${NS} round input icon">
    <input type="text" />
    <i className="icon">search</i>
</div>`}                                
                        </CodeView>
                        <br/>
                        

                        <h4>圆角带按钮标输入框</h4>
                        <CodeView component={
                            <div className={CN('input round')}>
                                <input type="text" placeholder='input...'/>
                                <div className="action">
                                    <div className="button">button</div>
                                </div>
                            </div>
                        }>
{`<div className="${NS} input round">
    <input type="text"/>
    <div className="action">
        <div className="button">button</div>
    </div>
</div>`}                                
                        </CodeView>
                        <br/>

                        <h4>Fluid 输入框</h4>
                        <CodeView component={
                            makeInput('fluid')
                        }>
{`<div className="${NS} fluid input">
    <input type="text" />
</div>`}                                
                        </CodeView>
                        <br/>

                        <h4>Disabled 输入框</h4>
                        <CodeView component={
                            makeInput('disabled')
                        }>
{`<div className="${NS} disabled input">
    <input type="text" />
</div>`}                                
                        </CodeView>
                        <br/>
                    </li>
                    <li>
                        <h4>输入框尺寸</h4>
                        <CodeView component={
                            <div>
                                {makeInput('tiny')}
                                {makeInput('small')}
                                {makeInput('')}
                                {makeInput('large')}
                                {makeInput('huge')}
                            </div>
                        }>
{`<div className="${NS} tiny input">
    <input type="text" />
</div>`}                                
                        </CodeView>
                        <br/>
                    </li>
                    <li>
                        <h4>带按钮输入框</h4>
                        <CodeView component={
                            <div>
                                {actionInputs()}
                                <br/>
                                <div className={CN('fluid input')}>
                                    <input type="text" placeholder='input...'/>
                                    <div className="action">
                                        <div className="button">button</div>
                                    </div>
                                </div>
                                <br/>
                                <div className={CN('fluid huge input')}>
                                    <div className="action">
                                        <div className="button">button</div>
                                    </div>
                                    <input type="text" placeholder='input...'/>
                                </div>
                            </div>
                        }>
{`<div className="${NS} input">
    <input type="text" />
    <button className="button">button</button>
</div>

<div className="${NS} fluid input">
    <input type="text" />
    <div className="action">
        <div className="button">button</div>
    </div>
</div>

<div className="${NS} fluid input">
    <div className="action">
        <div className="button">button</div>
    </div>
    <input type="text" />
</div>
`}                         
                        </CodeView>
                        <br/>
                    </li>
                    <li>
                        <h4>带图标输入法</h4>
                        <CodeView component={
                            <div>
                                <div className={CN('input icon')}>
                                    <input type="text" placeholder="input..."/>
                                    <i className="icon">search</i>
                                </div>
                                <br/>
                                <div className={CN('huge input icon')}>
                                    <input type="text" placeholder="input..."/>
                                    <i className="icon">search</i>
                                </div>
                                <br/>
                                <div className={CN('input icon')}>
                                    <i className="icon">search</i>
                                    <input type="text" placeholder="input..."/>
                                </div>
                                <br/>
                                <div className={CN('fluid input icon')}>
                                    <input type="text" placeholder="input..."/>
                                    <i className="icon">search</i>
                                </div>
                            </div>
                        }>
{`<div className="${NS} input icon">
    <input type="text" />
    <i className="icon">search</i>
</div>

<div className="${NS} huge input icon">
    <input type="text" />
    <i className="icon">search</i>
</div>

<div className="${NS} input icon">
    <i className="icon">search</i>
    <input type="text" />
</div>

<div className="${NS} fluid input icon">
    <input type="text" />
    <i className="icon">search</i>
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