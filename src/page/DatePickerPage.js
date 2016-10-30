import React, { Component } from 'react';
import {NS} from '../constant';
import DatePicker from '../component/DatePicker';
import CodeView from '../component/CodeView';

export default class DatePickerPage extends Component {
    render() {
        return (
            <section>
                <h2>日期选择</h2>
                <br/>

                <h4>默认日期选择</h4>
                <CodeView component={<DatePicker/>}>
                    {`<DatePicker/>`}             
                </CodeView>
                <br/>

                <h4>默认值</h4>
                <CodeView component={<DatePicker value='2014-10-05'/>}>
                    {`<DatePicker value='2014-10-05'/>`}             
                </CodeView>
                <br/>
                
                <h4>onChange 事件</h4>
                <CodeView component={<DatePicker onChange={date => alert(date)}/>}>
                    {`<DatePicker onChange={date => alert(date)}/>`}             
                </CodeView>
                <br/>
                
                <h4>日期范围</h4>
                <CodeView component={<DatePicker begin="2016-10-20" end="2016-11-23"/>}>
                    {`<DatePicker begin="2016-10-20" end="2016-11-23"/>`}             
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
                            <td>字符串(例如：2016-10-02)</td>
                            <td>今天日期</td>
                            <td>否</td>
                        </tr>
                        <tr>
                            <td>onChange</td>
                            <td>日历日期变化触发事件</td>
                            <td>函数(日期字符串)</td>
                            <td>{`onChange(date){}`}</td>
                            <td>否</td>
                        </tr>
                        <tr>
                            <td>begin</td>
                            <td>日期起始范围</td>
                            <td>字符串(例如：2016-10-02)</td>
                            <td>无</td>
                            <td>否</td>
                        </tr>
                        <tr>
                            <td>end</td>
                            <td>日期结束范围</td>
                            <td>字符串(例如：2016-10-02)</td>
                            <td>无</td>
                            <td>否</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        );
    }
}
