import React, { Component } from 'react';
import {CheckBox} from '../component/CheckBox';
import {CodeView} from '../component/CodeView';

export class CheckBoxPage extends Component {
    render() {
        return (
            <section>
                <h2>复选框</h2>
                <br/>

                <h4>复选框</h4>
                <CodeView component={<CheckBox>复选框</CheckBox>}>
                    {`<CheckBox>复选框</CheckBox>`}
                </CodeView>
                <br/>

                <h4>默认选中</h4>
                <CodeView component={<CheckBox checked={true}>复选框</CheckBox>}>
                    {`<CheckBox checked={true}>复选框</CheckBox>`}
                </CodeView>
                <br/>

                <h4>存储值</h4>
                <CodeView component={<CheckBox value="apple">复选框</CheckBox>}>
                    {`<CheckBox value="apple">复选框</CheckBox>`}
                </CodeView>
                <br/>

                <h4>Disabled</h4>
                <CodeView component={<CheckBox disabled={true}>复选框</CheckBox>}>
                    {`<CheckBox disabled={true}>复选框</CheckBox>`}
                </CodeView>
                <br/>

                <h4>onChange 事件</h4>
                <CodeView component={<CheckBox value="apple" 
                                    onChange={(e, value) => alert('选中状态:' + e.target.checked + ' 值为:' + value)}>
                                    复选框
                                    </CheckBox>}>
                    {`<CheckBox onChange={(e, value) => alert('选中状态:' + e.target.checked + ' 值为:' + value)}>复选框</CheckBox>`}
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
                            <td>value</td>
                            <td>存储值</td>
                            <td></td>
                            <td>无</td>
                            <td>否</td>
                        </tr>
                        <tr>
                            <td>onChange</td>
                            <td>选中状态切换事件</td>
                            <td>函数(事件对象 event, 存储值 value)</td>
                            <td>
                            {`onChange(e, value){
                            }`}
                            </td>
                            <td>否</td>
                        </tr>
                        <tr>
                            <td>checked</td>
                            <td>选中状态</td>
                            <td>Boolean</td>
                            <td>false</td>
                            <td>否</td>
                        </tr>
                        <tr>
                            <td>disabled</td>
                            <td>是否失效</td>
                            <td>Boolean</td>
                            <td>false</td>
                            <td>否</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        );
    }
}
