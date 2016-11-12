import React, { Component } from 'react';
import Radio from '../component/Radio';
import CodeView from '../component/CodeView';

export default class RadioPage extends Component {
    render() {
        return (
            <section>
                <h2>单选框</h2>
                <br/>

                <h4>默认单选框</h4>
                <CodeView component={<Radio>单选框</Radio>}>
                    {`<Radio>单选框</Radio>`}
                </CodeView>
                <br/>

                <h4>选中的单选框</h4>
                <CodeView component={<Radio checked={true}>单选框</Radio>}>
                    {`<Radio checked={true}>单选框</Radio>`}
                </CodeView>
                <br/>

                <h4>存储值</h4>
                <CodeView component={<Radio value={2}>单选框</Radio>}>
                    {`<Radio value={2}>单选框</Radio>`}
                </CodeView>
                <br/>

                <h4>Disabled 单选框</h4>
                <CodeView component={<Radio disabled={true}>单选框</Radio>}>
                    {`<Radio disabled={true}>单选框</Radio>`}
                </CodeView>
                <br/>

                <h4>onChange 事件</h4>
                <CodeView component={<Radio value={2} onChange={(e, value) => alert(`选中状态: ${e.target.checked}, 值为: ${value}`)}>单选框</Radio>}>
                    {`<Radio value={2} onChange={(e, value) => alert(\`选中状态: \${e.target.checked}, 值为: \${value}\`)}>单选框</Radio>`}
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
                            <td>checked</td>
                            <td>选中状态</td>
                            <td>Boolean</td>
                            <td>false</td>
                            <td>否</td>
                        </tr>
                        <tr>
                            <td>value</td>
                            <td>存储值</td>
                            <td></td>
                            <td>无</td>
                            <td>否</td>
                        </tr>
                        <tr>
                            <td>disabled</td>
                            <td>是否失效</td>
                            <td>Boolean</td>
                            <td>false</td>
                            <td>否</td>
                        </tr>
                        <tr>
                            <td>onChange</td>
                            <td>点击切换事件</td>
                            <td>函数(事件对象 event, 存储值 value)</td>
                            <td></td>
                            <td>否</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        );
    }
}
