import React, { Component } from 'react';
import {Calender} from '../component/Calender';
import {CodeView} from '../component/CodeView';

export class CalenderPage extends Component {
    render() {
        return (
            <section>
                <h2>日历</h2>
                <br/>
                
                <h4>默认日历</h4>
                <CodeView component={<Calender />}>
                    {`<Calender/>`}
                </CodeView>
                <br/>
                
                <h4>日历初始值</h4>
                <CodeView component={<Calender value="2016-08-12"/>}>
                    {`<Calender value="2016-08-12" />`}
                </CodeView>
                <br/>

                <h4>日历日期 onChange </h4>
                <CodeView component={<Calender onChange={value => alert('日期为：' + value)}/>}>
                    {`<Calender onChange="(date) => onChangeFunction(date)" />`}
                </CodeView>
                <br/>
                
                <h4>日历日期范围</h4>
                <CodeView component={<Calender begin="2016-10-12" end="2016-11-20"/>}>
                    {`<Calender begin="2016-10-12" end="2016-11-20"/>`}
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
                            <td>日历默认值</td>
                            <td>字符串(例如：2016-10-02)</td>
                            <td>今天的日期</td>
                            <td>否</td>
                        </tr>
                        <tr>
                            <td>onChange</td>
                            <td>日历日期变化触发事件</td>
                            <td>函数(日期字符串)</td>
                            <td>
                            {`onChange(date){

                            }`}
                            </td>
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
