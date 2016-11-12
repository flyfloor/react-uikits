import React, { Component } from 'react';
import TimeInput from '../component/TimeInput';
import CodeView from '../component/CodeView';

export default class TimeInputPage extends Component {
    render() {
        return (
            <section>
                <h2>时间输入</h2>
                <br/>

                <h4>默认时间输入</h4>
                <CodeView component={<TimeInput/>}>
                    {`<TimeInput/>`}
                </CodeView>
                <br/>

                <h4>带默认值的时间输入</h4>
                <CodeView component={<TimeInput value={'12:32:21'}/>}>
                    {`<TimeInput value={'12:32:23'}/>`}
                </CodeView>
                <br/>

                <h4>onChange 事件</h4>
                <CodeView component={<TimeInput onChange={value => alert(value)} />}>
                    {`<TimeInput onChange={value => alert(value)}/>`}
                </CodeView>
                <br/>

                <h4>简洁版</h4>
                <CodeView component={<TimeInput simple={true} />}>
                    {`<TimeInput simple={true}/>`}
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
                            <td>value</td>
                            <td>默认值</td>
                            <td>字符串(例如：11:22:32)</td>
                            <td>00:00:00</td>
                            <td>否</td>
                        </tr>
                        <tr>
                            <td>simple</td>
                            <td>简洁版</td>
                            <td>Boolean</td>
                            <td>false</td>
                            <td>否</td>
                        </tr>
                        <tr>
                            <td>onChange</td>
                            <td>时间变化触发事件</td>
                            <td>函数(时间字符串)</td>
                            <td>
                            {`onChange(time){

                            }`}
                            </td>
                            <td>否</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        );
    }
}
