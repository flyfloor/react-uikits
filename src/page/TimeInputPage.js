import React, { Component } from 'react';
import {CN, TitleBlock} from '../util/tools';
import {TimeInput} from '../component/TimeInput';
import {CodeView} from '../component/CodeView';

export class TimeInputPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        }
    }
    handleTimeChange(value){
        this.setState({
            value
        });
    }
    render() {
        return (
            <section>
                {TitleBlock('时间输入')}

                <h4>默认时间输入</h4>
                <CodeView component={<TimeInput onChange={value => {}} />}>
                    {`<TimeInput onChange={onChangeFunction} />`}
                </CodeView>
                <br/>

                <h4>带默认值的时间输入</h4>
                <CodeView component={<TimeInput value={45141} onChange={value => {}} />}>
                    {`<TimeInput value={45141} onChange={onChangeFunction} />`}
                </CodeView>
                <br/>

                <h4>onChange 事件</h4>
                <CodeView component={
                    <div>
                        <p>输入的时间秒数为 {this.state.value} 秒</p>
                        <br/>
                        <TimeInput onChange={this.handleTimeChange.bind(this)} />
                    </div>
                }>
                    {`<TimeInput onChange={onChangeFunction}/>`}
                </CodeView>
                <br/>

                <h4>简洁版</h4>
                <CodeView component={<TimeInput simple={true} onChange={value => {}} />}>
                    {`<TimeInput simple={true} onChange={onChangeFunction} />`}
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
                            <td>值(从0点至 23:59:59 的秒数 0 ~ 86399)</td>
                            <td>整形(例如：45141 代表 '12:32:21')</td>
                            <td>0</td>
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
                            <td>是</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        );
    }
}
