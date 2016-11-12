import React, { Component } from 'react';
import {NS} from '../constant';
import {Pin} from '../component/Pin';
import {CodeView} from '../component/CodeView';

const cardDOM = (name) => {
    return (
        <div className="pin-card">
            <h4>{name}</h4>
            <p>内容</p>
        </div>
    )
}

export class PinPage extends Component {
    render() {
        return (
            <section className="pin-page">
                <h2>大头针</h2>
                <br/>

                <h4>默认大头针</h4>
                <CodeView component={<Pin>
                                        {cardDOM('第一')}
                                    </Pin>}>
{`<Pin>
    ...
</Pin>`}
                </CodeView>
                <br/>

                <h4>距上方固定高度</h4>
                <CodeView component={<Pin top={200}>
                                        {cardDOM('第二')}
                                    </Pin>}>
{`<Pin top={200}>
    ...
</Pin>`}
                </CodeView>
                <br/>

                <h4>滚动到某个位置，固定在顶端 200px</h4>
                <CodeView component={<Pin begin={800} top={100}>
                                        {cardDOM('第三')}
                                    </Pin>}>
{`<Pin begin={800} top={200}>
    ...
</Pin>`}
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
                            <td>top</td>
                            <td>固定在距顶部高度</td>
                            <td>整形</td>
                            <td>0</td>
                            <td>否</td>
                        </tr>
                        <tr>
                            <td>begin</td>
                            <td>页面滚动到某个位置，开始固定</td>
                            <td>整形</td>
                            <td>0</td>
                            <td>否</td>
                        </tr>
                    </tbody>
                </table>
                
            </section>
        );
    }
}
