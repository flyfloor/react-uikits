import React, { Component } from 'react';
import {CN, TitleBlock, formatDate} from '../util/tools';
import {NS} from '../constant';
import {DatePicker} from '../component/DatePicker';
import {CodeView} from '../component/CodeView';

export class DatePickerPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: new Date()
        }
    }
    handleDateChange(value){
        this.setState({
            value
        });
    }
    render() {
        return (
            <section>
                {TitleBlock('日期选择')}
                <h4>默认日期选择</h4>
                <CodeView component={<DatePicker onChange={value => {}}/>}>
                    {`<DatePicker onChange={onChangeFunction}/>`}  
                </CodeView>
                <br/>

                <h4>默认值</h4>
                <CodeView component={<DatePicker value={new Date('2015-10-05')} onChange={value => {}} />}>
                    {`<DatePicker value={new Date('2015-10-05')} onChange={onChangeFunction} />`}             
                </CodeView>
                <br/>

                <h4>自定义格式化</h4>
                <CodeView component={<DatePicker value={new Date('2015-10-05')} 
                    format={'yyyy/MM/dd'} onChange={value => {}}/>}>
                    {`<DatePicker value={new Date('2015-10-05')} format={'yyyy/MM/dd'} onChange={onChangeFunction}/>`}  
                </CodeView>
                <br/>
                
                <h4>onChange 事件</h4>
                <CodeView component={
                    <div>
                        <p>选择的日期是 {formatDate(this.state.value)}</p>
                        <br/>
                        <DatePicker value={this.state.value} onChange={this.handleDateChange.bind(this)}/>
                    </div>
                }>
                    {`<DatePicker onChange={date => onChangeFunction}/>`}             
                </CodeView>
                <br/>
                
                <h4>日期范围</h4>
                <CodeView component={<DatePicker begin={new Date("2016-10-20")} 
                    end={new Date("2016-11-23")} onChange={value => {}}/>}>
                    {`<DatePicker begin={new Date("2016-10-20")} end={new Date("2016-11-23")} onChange={onChangeFunction}/>`}
                </CodeView>
                <br/>

                <h4>日期选择类型</h4>
                <CodeView component={<div>
                    <h5>日:</h5>
                    <DatePicker type="day" onChange={value => {}}/>
                </div>}>
                    {`<DatePicker type="day" onChange={onChangeFunction}/>`}
                </CodeView>
                <br/>

                <CodeView component={<div>
                    <h5>月:</h5>
                    <DatePicker type="month" onChange={value => {}}/>
                </div>}>
                    {`<DatePicker type="month" onChange={onChangeFunction}/>`}
                </CodeView>
                <br/>

                <CodeView component={<div>
                    <h5>年:</h5>
                    <DatePicker type="year" onChange={value => {}}/>
                </div>}>
                    {`<DatePicker type="year" onChange={onChangeFunction}/>`}
                </CodeView>
                <br/>
                <h4>日期选择位置</h4>
                <CodeView component={<div>
                    <DatePicker position="top" onChange={value => {}}/>
                </div>}>
                    {`<DatePicker position="top" onChange={onChangeFunction}/>`}
                </CodeView>
                <br/>

                <CodeView component={<div>
                    <DatePicker position="left" onChange={value => {}}/>
                </div>}>
                    {`<DatePicker position="left" onChange={onChangeFunction}/>`}
                </CodeView>
                <br/>

                <CodeView component={<div>
                    <DatePicker position="right" onChange={value => {}}/>
                </div>}>
                    {`<DatePicker position="right" onChange={onChangeFunction}/>`}
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
                            <td>Date 类型(例如：new Date('2016-10-02'))</td>
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
                            <td>type</td>
                            <td>日期选择类型</td>
                            <td>['day', 'month', 'year']</td>
                            <td>day</td>
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
