import React, { Component } from 'react';
import {CN, TitleBlock, formatDate} from '../util/tools';
import {NS} from '../constant';
import {DateTimePicker} from '../component/DateTimePicker';
import {CodeView} from '../component/CodeView';

export class DateTimePickerPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: new Date('2016-11-08T12:02:45')
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
                {TitleBlock('日期时间选择', <span>
                                            <span>本章关于日期时间选择，</span>
                                            <span className={`${NS} color-red`}>注意：safari下 new Date() 的使用</span>
                                        </span>)}
                
                <h4>默认日期时间选择</h4>
                <CodeView component={<DateTimePicker onChange={value => {}}/>}>
                    {`<DateTimePicker onChange={onChangeFunction}/>`}  
                </CodeView>
                <br/>

                <h4>带默认值的默认日期时间选择</h4>
                <CodeView component={<DateTimePicker value={new Date('2016-11-08T12:02:45')} onChange={value => {}}/>}>
                    {`<DateTimePicker value={new Date('2016-11-08T12:02:45')} onChange={onChangeFunction}/>`}  
                </CodeView>
                <br/>

                <h4>自定义格式化日期时间选择</h4>
                <CodeView component={<DateTimePicker format="yyyy/MM/dd" 
                    value={new Date('2016-11-08T12:02:45')} onChange={value => {}}/>}>
                    {`<DateTimePicker format="yyyy/MM/dd" value={new Date('2016-11-08T12:02:45')} onChange={onChangeFunction}/>`}  
                </CodeView>
                <br/>

                <h4>onChange 事件</h4>
                <CodeView component={
                    <div>
                        <p>选择的时间是 {formatDate(this.state.value, 'yyyy-MM-dd hh:mm:ss')}</p>
                        <DateTimePicker value={this.state.value} onChange={this.handleTimeChange.bind(this)}/>
                    </div>
                }>
                    {`<DateTimePicker value={new Date('2016-11-08T12:02:45')} onChange={onChangeFunction}/>`}  
                </CodeView>
                <br/>

                <h4>开始、结束日期范围</h4>
                <CodeView component={<DateTimePicker begin={new Date('2016-11-08')}
                     end={new Date('2016-12-20')} onChange={value => {}}/>}>
                    {`<DateTimePicker begin={new Date('2016-11-08')} end={new Date('2016-12-20')}  onChange={onChangeFunction}/>`}  
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
                            <td>日历默认值</td>
                            <td>Date 类型(例如：new Date('2016-10-02 12:00:08'))</td>
                            <td>今天日期</td>
                            <td>否</td>
                        </tr>
                        <tr>
                            <td>format</td>
                            <td>日期格式化</td>
                            <td>字符串, 例如: yyyy年MM月dd日</td>
                            <td>yyyy-MM-dd</td>
                            <td>否</td>
                        </tr>
                        <tr>
                            <td>onChange</td>
                            <td>日历日期变化触发事件</td>
                            <td>函数(日期对象)</td>
                            <td>{`onChange(date){}`}</td>
                            <td>是</td>
                        </tr>
                        <tr>
                            <td>begin</td>
                            <td>日期起始范围</td>
                            <td>Date 对象(例如：new Date('2016-10-02'))</td>
                            <td>无</td>
                            <td>否</td>
                        </tr>
                        <tr>
                            <td>end</td>
                            <td>日期结束范围</td>
                            <td>Date 对象(例如：new Date('2016-10-02'))</td>
                            <td>无</td>
                            <td>否</td>
                        </tr>
                    </tbody>
                </table>

            </section>
        );
    }
}
