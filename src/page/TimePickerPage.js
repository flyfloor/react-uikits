import React, { Component } from 'react';
import {CN, TitleBlock} from '../util/tools';
import {TimePicker} from '../component';
import CodeView from './CodeView';

export class TimePickerPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 4981
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
                <CodeView component={<TimePicker value={12217} onChange={value => {}} />}>
                    {`<TimePicker value={12217} onChange={onChangeFunction} />`}
                </CodeView>
                <br/>
                
                <h4>onChange 事件</h4>
                <CodeView component={
                    <div>
                        <p>选择的时间秒数为 {this.state.value}</p>
                        <TimePicker value={this.state.value} onChange={this.handleTimeChange.bind(this)} />
                    </div>
                }>
                    {`<TimePicker value={4981} onChange={onChangeFunction} />`}
                </CodeView>
                <br/>
                
                <h4>简单的时间选择</h4>
                <CodeView component={<TimePicker simple={true} onChange={value => {}} />}>
                    {`<TimePicker simple={true} onChange={onChangeFunction} />`}
                </CodeView>
                <br/>
                
                <h4>时间选择位置</h4>
                <CodeView component={<div>
                    <TimePicker position="top" onChange={value => {}}/>
                </div>}>
                    {`<TimePicker position="top" onChange={onChangeFunction}/>`}
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
                            <td>值(秒数 0 ~ 86399)</td>
                            <td>整形(例如：4981 代表 '03:23:37')</td>
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
                            <td>position</td>
                            <td>展开位置</td>
                            <td>'top', 'bottom' 中的一个</td>
                            <td>bottom</td>
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
