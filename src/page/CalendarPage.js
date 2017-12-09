import React, { Component } from 'react';
import {Calendar} from '../component';
import {CN, TitleBlock} from '../util/tools';
import CodeView from './CodeView';

const onChangeFunction = value => value

export class CalendarPage extends Component {
    render() {
        return (
            <section>
                {TitleBlock('日历')}
                <h4>默认日历</h4>
                <CodeView component={<Calendar onChange={onChangeFunction}/>}>
                    {`<Calendar onChange={onChangeFunction} />`}
                </CodeView>
                <br/>
                
                <h4>日历初始值</h4>
                <CodeView component={<Calendar value={new Date("2016-08-12")} onChange={onChangeFunction}/>}>
                    {`<Calendar value={new Date("2016-08-12")} onChange={onChangeFunction} />`}
                </CodeView>
                <br/>

                <h4>日历日期 onChange </h4>
                <CodeView component={<Calendar onChange={value => alert('日期为：' + value)}/>}>
                    {`<Calendar onChange="(date) => onChangeFunction(date)" />`}
                </CodeView>
                <br/>
                
                <h4>日历日期范围</h4>
                <CodeView component={<Calendar begin={new Date("2016-10-12")} 
                    end={new Date("2016-11-20")} onChange={onChangeFunction} />}>
                    {`<Calendar begin={new Date("2016-10-12")} end={new Date("2016-11-20")} onChange={onChangeFunction} />`}
                </CodeView>
                <br/>

                <h4>不显示预览</h4>
                <CodeView component={<Calendar showPreview={false} onChange={onChangeFunction}/>}>
                    {`<Calendar showPreview={false} onChange={onChangeFunction}/>`}
                </CodeView>
                <br/>

                <h4>日历类型</h4>
                <CodeView component={<div>
                        <h5>日:</h5>
                        <Calendar type="day" onChange={onChangeFunction} />
                    </div>}>
                    {`<Calendar type="day" onChange={onChangeFunction} />`}
                </CodeView>

                <CodeView component={<div>
                    <h5>月:</h5>    
                    <Calendar type="month" onChange={onChangeFunction}/>
                </div>
                }>
                    {`<Calendar type="month" onChange={onChangeFunction}/>`}
                </CodeView>
                
                <CodeView component={<div>
                    <h5>年:</h5>
                    <Calendar type="year" onChange={onChangeFunction}/>
                </div>
                }>
                    {`<Calendar type="year" onChange={onChangeFunction}/>`}
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
                            <td>Date 类型(例如：new Date('2016-12-08'))</td>
                            <td>今天的日期</td>
                            <td>否</td>
                        </tr>
                        <tr>
                            <td>onChange</td>
                            <td>日历日期变化触发事件</td>
                            <td>函数(日期对象)</td>
                            <td>
                            {`onChange(date){

                            }`}
                            </td>
                            <td>否</td>
                        </tr>
                        <tr>
                            <td>begin</td>
                            <td>日期起始范围</td>
                            <td>Date 类型(例如：new Date('2016-10-02'))</td>
                            <td>无</td>
                            <td>否</td>
                        </tr>
                        <tr>
                            <td>end</td>
                            <td>日期结束范围</td>
                            <td>Date 类型(例如：new Date('2016-10-02'))</td>
                            <td>无</td>
                            <td>否</td>
                        </tr>
                        <tr>
                            <td>showPreview</td>
                            <td>是否显示预览</td>
                            <td>Boolean</td>
                            <td>true</td>
                            <td>否</td>
                        </tr>
                        <tr>
                            <td>type</td>
                            <td>日历类型</td>
                            <td>['day', 'month', 'year']</td>
                            <td>day</td>
                            <td>否</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        );
    }
}
