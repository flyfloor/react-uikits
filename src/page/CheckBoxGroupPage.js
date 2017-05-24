import React, { Component } from 'react';
import Hightlight from 'react-highlight';
import {CN, TitleBlock} from '../util/tools';
import {CheckBoxGroup} from '../component/CheckBoxGroup';
import {CheckBox} from '../component/CheckBox';
import {CodeView} from '../component/CodeView';

const options = [
    {'name': 'apple', 'value': 'a'},
    {'name': 'banana', 'value': 'b', disabled: true},
    {'name': 'cat', 'value': 'c'},
    {'name': 'dog', 'value': 'd'},
];

export class CheckBoxGroupPage extends Component {
    render() {
        return (
            <section>
                {TitleBlock('复选框组')}

                <h4>默认复选框组</h4>
                <CodeView component={<CheckBoxGroup options={options} labelName='name' 
                            valueName='value' onChange={value => console.log(value)} />}>
{`<CheckBoxGroup options={[
        {'name': 'apple', 'value': 'a'},
        {'name': 'banana', 'value': 'b', disabled: true},
        ...
    ]} labelName='name' 
    valueName='value' />
`}
                </CodeView>
                <br/>

                <h4>默认值</h4>
                <CodeView component={<CheckBoxGroup value={['c', 'd']} options={options} onChange={value => console.log(value)} />}>
{`<CheckBoxGroup value={['c', 'd']} options={[
        {'name': 'apple', 'value': 'a'},
        {'name': 'banana', 'value': 'b', disabled: true},
        ...
    ]} />
`}
                </CodeView>
                <br/>

                <h4>onChange 事件</h4>
                <CodeView component={<CheckBoxGroup options={options} onChange={value => alert(value)} />}>
{`<CheckBoxGroup value={['c']} onChange={value => alert(value)} 
    options={[
        {'name': 'apple', 'value': 'a'},
        {'name': 'banana', 'value': 'b', disabled: true},
        ...
    ]}  />
`}
                </CodeView>
                <br/>

                <h4>Yield Children</h4>
                <CodeView component={<CheckBoxGroup value={['banana']} onChange={value => console.log(value)}>
                            <CheckBox value="apple">apple</CheckBox>
                            <CheckBox value="banana">banana</CheckBox>
                            <CheckBox value="cat" disabled={true}>cat</CheckBox>
                        </CheckBoxGroup>}>
{`<CheckBoxGroup value={['banana']}>
    <CheckBox value="apple">apple</CheckBox>
    <CheckBox value="banana">banana</CheckBox>
    <CheckBox value="cat" disabled={true}>cat</CheckBox>
</CheckBoxGroup>}
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
                            <td>options</td>
                            <td>组成复选框组内容的键值对</td>
                            <td>
                                数组, 例如：
                                <Hightlight className="javascript">
{`[
    {'name': 'apple', 'value': 'a'},
    {'name': 'banana', 'value': 'b', disabled: true},
    {'name': 'cat', 'value': 'c'},
    {'name': 'dog', 'value': 'd'},
]`}                                    
                                </Hightlight>
                            </td>
                            <td>
                                []
                            </td>
                            <td>否</td>
                        </tr>
                        <tr>
                            <td>value</td>
                            <td>复选框组的值</td>
                            <td>数组</td>
                            <td>[]</td>
                            <td>否</td>
                        </tr>
                        <tr>
                            <td>labelName</td>
                            <td>options 对应的复选框显示名</td>
                            <td>字符串</td>
                            <td>"name"</td>
                            <td>否</td>
                        </tr>
                        <tr>
                            <td>valueName</td>
                            <td>options 对应的复选框值</td>
                            <td></td>
                            <td>"value"</td>
                            <td>否</td>
                        </tr>
                        <tr>
                            <td>value</td>
                            <td>复选框的值</td>
                            <td></td>
                            <td>无</td>
                            <td>否</td>
                        </tr>
                        <tr>
                            <td>onChange</td>
                            <td>复选框组值变化事件</td>
                            <td>函数(复选框的值)</td>
                            <td>
                            {`onChange(value){}`}
                            </td>
                            <td>否</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        );
    }
}
