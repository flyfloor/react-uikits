import React, { Component } from 'react';
import Progress from '../component/Progress';
import {NS} from '../constant';
import CodeView from '../component/CodeView';

export default class ProgressPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            progress: 30,
        }
    }
    handleProgressChange(action){
        let {progress} = this.state
        if (action === 'add') {
            if (progress <= 90) {
                this.setState({
                    progress: progress + 10
                });
            }
        }
        if (action === 'remove') {
            if (progress >= 10) {
                this.setState({
                    progress: progress - 10
                });
            }
        }
    }
    render() {
        return (
            <section>
                <h2>进度条</h2>
                <br/>
                
                <h4>默认进度条</h4>
                <CodeView component={<div>
                                        <Progress value={this.state.progress}/>
                                        <button className={`${NS} circle button`} onClick={this.handleProgressChange.bind(this, 'remove')}>
                                            <i className={`${NS} icon`}>remove</i>
                                        </button>
                                        <button className={`${NS} blue circle button`} onClick={this.handleProgressChange.bind(this, 'add')}>
                                            <i className={`${NS} icon`}>add</i>
                                        </button>
                                    </div>}>
                    {`<Progress value={20}/>`}
                </CodeView>
                <br/>
                
                <h4>成功的进度条</h4>
                <CodeView component={<Progress value={100}/>}>
                    {`<Progress value={100} />`}
                </CodeView>
                <br/>

                <h4>失败进度条 </h4>
                <CodeView component={<Progress value={30} status="failed"/>}>
                    {`<Progress value={30} status="failed" />`}
                </CodeView>
                <br/>
                
                <h4>Disabled 状态</h4>
                <CodeView component={<Progress value={30} disabled={true} />}>
                    {`<Progress value={30} disabled={true} />`}
                </CodeView>
                <br/>

                <h4>警告进度条</h4>
                <CodeView component={<Progress value={30} status="warning"/>}>
                    {`<Progress value={30} status="warning" />`}
                </CodeView>
                <br/>

                <h4>尺寸</h4>
                <CodeView component={<div>
                                        <h5>小号</h5>
                                        <Progress value={30} size="small"/>
                                        <h5>默认</h5>
                                        <Progress value={30}/>
                                        <h5>大号</h5>
                                        <Progress value={30} size="large"/>
                                    </div>}>
{`<Progress value={30} size="small"/>
<Progress value={30}/>
<Progress value={30} size="large"/>
`}
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
                            <td>进度条默认值</td>
                            <td>百分比x100(例如：20)</td>
                            <td>0</td>
                            <td>否</td>
                        </tr>
                        <tr>
                            <td>status</td>
                            <td>状态</td>
                            <td>failed, warning, success</td>
                            <td>无</td>
                            <td>否</td>
                        </tr>
                        <tr>
                            <td>size</td>
                            <td>显示不同尺寸</td>
                            <td>small, normal, large</td>
                            <td>'normal'</td>
                            <td>否</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        );
    }
}
