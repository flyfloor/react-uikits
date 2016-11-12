import React, { Component } from 'react';
import RadioGroup from '../component/RadioGroup';
import Radio from '../component/Radio';
import CodeView from '../component/CodeView';

const options = [
    {name: 'apple', value: 'apple'},
    {name: 'banana', value: 'banana'},
    {name: 'cat', value: 'cat', disabled: true},
    {name: 'dog', value: 'dog'},
    {name: 'egg', value: 'egg'},
    {name: 'frog', value: 'frog'},
    {name: 'god', value: 'god'},
    {name: 'henrry', value: 'henrry'},
    {name: 'ice', value: 'ice'},
];

export default class RadioGroupPage extends Component {
    render() {
        return (
            <section>
                <h2>单选框组</h2>
                <br/>

                <h4>默认单选框组</h4>
                <CodeView component={<RadioGroup options={options}>
                                    </RadioGroup>}>
{`<RadioGroup options={[
        {name: 'apple', value: 'apple'},
        {name: 'cat', value: 'cat', disabled: true},
        ...
    ]} labalName="name" valueName="value">
</RadioGroup>`}
                </CodeView>

                <h4>默认选中第一个</h4>
                <br/>
                <CodeView component={<RadioGroup options={options} defaultChecked={true}></RadioGroup>}>
                        {`<RadioGroup options={options} defaultChecked={true}></RadioGroup>`}
                </CodeView>
                <br/>

                <h4>默认选中值</h4>
                <br/>
                <CodeView component={<RadioGroup options={options} value={'dog'}></RadioGroup>}>
                        {`<RadioGroup options={options} value={'dog'}></RadioGroup>`}
                </CodeView>
                <br/>

                <h4>onChange 事件</h4>
                <br/>
                <CodeView component={<RadioGroup options={options} onChange={value => alert('选中:' + value)}></RadioGroup>}>
                        {`<RadioGroup options={options} onChange={value => alert('选中:' + value)}></RadioGroup>`}
                </CodeView>
                <br/>

                <h4>Yield children</h4>
                <br/>
                <CodeView component={<RadioGroup value="b">
                                        <Radio value="a">apple</Radio>
                                        <Radio value="b">banana</Radio>
                                        <Radio value="c">cat</Radio>
                                        <Radio value="d" disabled={true}>dog</Radio>
                                    </RadioGroup>}>
{`<RadioGroup value="b">
    <Radio value="a">apple</Radio>
    <Radio value="b">banana</Radio>
    <Radio value="c">cat</Radio>
    <Radio value="d" disabled={true}>dog</Radio>
</RadioGroup>`}
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
                            <td>options</td>
                            <td>单选框组数据来源</td>
                            <td>数组</td>
                            <td>[]</td>
                            <td>children 与 options 二选一</td>
                        </tr>
                        <tr>
                            <td>labelName</td>
                            <td>数据源显示的key</td>
                            <td>字符串</td>
                            <td>'name'</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>valueName</td>
                            <td>数据源值的key</td>
                            <td>字符串</td>
                            <td>'value'</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>defaultChecked</td>
                            <td>默认选中第一项</td>
                            <td>Boolean</td>
                            <td>false</td>
                            <td>否</td>
                        </tr>
                        <tr>
                            <td>value</td>
                            <td>选中值</td>
                            <td></td>
                            <td>无</td>
                            <td>否</td>
                        </tr>
                        <tr>
                            <td>onChange</td>
                            <td>值切换触发事件</td>
                            <td>函数(值 value)</td>
                            <td>无</td>
                            <td>否</td>
                        </tr>
                        <tr>
                            <td>children</td>
                            <td>yield children 方式</td>
                            <td>jsx</td>
                            <td>无</td>
                            <td>否</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        );
    }
}
