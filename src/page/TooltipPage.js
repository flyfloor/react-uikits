import React, { Component } from 'react';
import Tooltip from '../component/Tooltip';
import {NS} from '../constant';
import CodeView from '../component/CodeView';

export default class TooltipPage extends Component {
    render() {
        return (
            <section>
                <h2>提示框</h2>
                <br/>

                <h4>默认提示框</h4>
                <CodeView component={<Tooltip content={<div>
                                                            <h4>标题</h4>
                                                            <p>内容详情</p>
                                                        </div>}>
                                        <button className={`${NS} button`}>提示框</button>
                                    </Tooltip>}>
{`<Tooltip content={<div>
                        <h4>标题</h4>
                        <p>内容详情</p>
                    </div>}>
    <button className="${NS} button">提示框</button>
</Tooltip>`}
                    
                </CodeView>
                <br/>

                <h4>提示框位置</h4>
                <CodeView component={<div>
                                        <Tooltip position="left" content={<p>内容</p>}>
                                            <button className={`${NS} button`}>左</button>
                                        </Tooltip>
                                        <br/>
                                        <Tooltip position="right" content={<p>内容</p>}>
                                            <button className={`${NS} button`}>右</button>
                                        </Tooltip>
                                        <br/>
                                        <Tooltip position="top" content={<p>内容</p>}>
                                            <button className={`${NS} button`}>上</button>
                                        </Tooltip>
                                        <br/>
                                        <Tooltip position="bottom" content={<p>内容</p>}>
                                            <button className={`${NS} button`}>下</button>
                                        </Tooltip>
                                    </div>}>
{`<Tooltip content={<p>内容详情</p>} position="left">
    <button className="${NS} button">提示框</button>
</Tooltip>`}
                    
                </CodeView>
                <br/>

                <h4>点击模式</h4>
                <CodeView component={<Tooltip content={<p>内容详情</p>} mode="click">
                                        <button className={`${NS} button`}>提示框</button>
                                    </Tooltip>}>
{`<Tooltip content={<p>内容详情</p>} mode="click">
    <button className="${NS} button">提示框</button>
</Tooltip>`}
                    
                </CodeView>
                <br/>

            </section>
        );
    }
}
