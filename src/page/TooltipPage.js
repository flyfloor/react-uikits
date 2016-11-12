import React, { Component } from 'react';
import {CN, TitleBlock} from '../util/tools';
import {NS} from '../constant';
import {Tooltip} from '../component/Tooltip';
import {CodeView} from '../component/CodeView';

export class TooltipPage extends Component {
    render() {
        return (
            <section>
                {TitleBlock('提示框')}

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
                
                <h4>属性</h4>
                <table className="dot table">
                    <thead>
                        <tr>
                            <th>名称</th>
                            <th>描述</th>
                            <th>类型</th>
                            <th>默认值</th>
                            <th>required</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>position</td>
                            <td>弹出位置</td>
                            <td>left, right, top, bottom</td>
                            <td>top</td>
                            <td>否</td>
                        </tr>
                        <tr>
                            <td>mode</td>
                            <td>弹出模式</td>
                            <td>click, hover</td>
                            <td>hover</td>
                            <td>否</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        );
    }
}
