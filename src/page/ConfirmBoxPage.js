import React, { Component } from 'react';
import {NS} from '../constant';
import {ConfirmBox} from '../component/ConfirmBox';
import {CodeView} from '../component/CodeView';

export class ConfirmBoxPage extends Component {
    render() {
        return (
            <section>
                <h2>确认框</h2>
                <br/>

                <h4>默认确认框</h4>
                <CodeView component={<ConfirmBox content={<p>确认删除用户?</p>}>
                                        <button className={`${NS} small button`}>删除用户</button>
                                    </ConfirmBox>}>
{`<ConfirmBox content={<p>确认删除用户?</p>}>
    <button className="${NS} small button">删除用户</button>
</ConfirmBox>
`}
                </CodeView>
                <br/>

                <h4>自定义事件</h4>
                <CodeView component={<ConfirmBox content={<p>确认删除用户?</p>}
                                        onConfirm={() => confirm('再次确认删除？') }
                                        onCancel={() => !alert('取消') }>
                                        <button className={`${NS} small button`}>删除用户</button>
                                    </ConfirmBox>}>
{`<ConfirmBox content={<p>确认删除用户?</p>}
    onConfirm={() => confirm('再次确认删除？')}
    onCancel={() => confirm('删除用户？')}>
    <button className="${NS} small button">删除用户</button>
</ConfirmBox>
`}
                </CodeView>
                <br/>

                <h4>自定义弹出位置</h4>
                <CodeView component={
                    <section>
                        <ConfirmBox content={<p>确认删除用户?</p>} position="left">
                            <button className={`${NS} small button`}>左</button>
                        </ConfirmBox>
                        <br/>
                        <ConfirmBox content={<p>确认删除用户?</p>} position="right">
                            <button className={`${NS} small button`}>右</button>
                        </ConfirmBox>
                        <br/>
                        <ConfirmBox content={<p>确认删除用户?</p>} position="top">
                            <button className={`${NS} small button`}>上</button>
                        </ConfirmBox>
                        <br/>
                        <ConfirmBox content={<p>确认删除用户?</p>} position="bottom">
                            <button className={`${NS} small button`}>下</button>
                        </ConfirmBox>
                    </section>
                }>
{`<ConfirmBox content={<p>确认删除用户?</p>} position="left">
    <button className="${NS} small button">删除用户</button>
</ConfirmBox>
`}
                </CodeView>
                <br/>

                <h4>强制确认关闭</h4>
                <p className="text-extra color-red">点击确认框之外区域无法关闭</p>
                <CodeView component={<ConfirmBox content={<p>确认删除用户?</p>} force={true}>
                                        <button className={`${NS} small button`}>删除用户</button>
                                    </ConfirmBox>}>
{`<ConfirmBox content={<p>确认删除用户?</p>} force={true}>
    <button className="${NS} small button">删除用户</button>
</ConfirmBox>
`}
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
                            <th>Required</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>content</td>
                            <td>内容</td>
                            <td>jsx</td>
                            <td>无</td>
                            <td>是</td>
                        </tr>
                        <tr>
                            <td>onConfirm</td>
                            <td>确认事件</td>
                            <td>函数, 根据函数返回值(true || false) 判断是否关闭确认框</td>
                            <td>
                            {`onConfirm(){}`}
                            </td>
                            <td>否</td>
                        </tr>
                        <tr>
                            <td>onCancel</td>
                            <td>取消事件</td>
                            <td>函数, 根据函数返回值(true || false) 判断是否关闭确认框</td>
                            <td>
                            {`onCancel(){}`}
                            </td>
                            <td>否</td>
                        </tr>
                        <tr>
                            <td>position</td>
                            <td>弹出方位</td>
                            <td>(left, right, bottom, top)</td>
                            <td>"top"</td>
                            <td>否</td>
                        </tr>
                        <tr>
                            <td>force</td>
                            <td>强制确认关闭</td>
                            <td>Boolean</td>
                            <td>false</td>
                            <td>否</td>
                        </tr>
                        <tr>
                            <td>confirm</td>
                            <td>自定义确认按钮</td>
                            <td>jsx</td>
                            <td>{"<div>ok</div>"}</td>
                            <td>否</td>
                        </tr>
                        <tr>
                            <td>cancel</td>
                            <td>自定义取消按钮</td>
                            <td>jsx</td>
                            <td>{"<div>cancel</div>"}</td>
                            <td>否</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        );
    }
}
