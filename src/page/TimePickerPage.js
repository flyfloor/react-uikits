import React, { Component } from 'react';
import {CN, TitleBlock} from '../util/tools';
import {TimePicker} from '../component/TimePicker';
import {CodeView} from '../component/CodeView';

export class TimePickerPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '01:23:01'
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
                {TitleBlock('时间选择')}

                <h4>默认时间选择</h4>
                <CodeView component={<TimePicker onChange={value => {}} />}>
                    {`<TimePicker onChange={onChangeFunction} />`}
                </CodeView>
                <br/>
                
                <h4>带默认值的时间选择</h4>
                <CodeView component={<TimePicker value="03:23:37" onChange={value => {}} />}>
                    {`<TimePicker value="03:23:37" onChange={onChangeFunction} />`}
                </CodeView>
                <br/>
                
                <h4>onChange 事件</h4>
                <CodeView component={
                    <div>
                        <p>选择的时间是 {this.state.value}</p>
                        <TimePicker value={this.state.value} onChange={this.handleTimeChange.bind(this)} />
                    </div>
                }>
                    {`<TimePicker value="03:23:37" onChange={onChangeFunction} />`}
                </CodeView>
                <br/>
                
                <h4>简单的时间选择</h4>
                <CodeView component={<TimePicker simple={true} onChange={value => {}} />}>
                    {`<TimePicker simple={true} onChange={onChangeFunction} />`}
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
                            <td>是</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        );
    }
}
