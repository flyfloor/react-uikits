import React, { Component } from 'react';
import {NS} from '../constant';
import Toast from '../component/Toast';
import CodeView from '../component/CodeView';

export default class ToastPage extends Component {
    handleToast(ref){
        this.refs[ref].open()
    }
    render() {
        return (
            <section>
                <h2>消息</h2>
                <br/>

                <h4>默认消息</h4>
                <CodeView component={
                    <div>
                        <button className={`${NS} button`} onClick={this.handleToast.bind(this, 'toast0')}>点击</button>
                        <Toast ref="toast0">
                            <p>this is the toast</p>
                        </Toast>
                    </div>}>
{`<button className="${NS} button" onClick={openToast}>点击</button>
<Toast ref="toast">
    ...
</Toast>
openToast(){
    this.refs.toast.open()
}
`}
                </CodeView>
                <br/>

                <h4>消息位置</h4>
                <CodeView component={
                    <div>
                        <button className={`${NS} button`} onClick={this.handleToast.bind(this, 'toast1')}>上</button>
                        <Toast ref="toast1" position="top">
                            <p>this is the toast</p>
                        </Toast>
                        <button className={`${NS} button`} onClick={this.handleToast.bind(this, 'toast2')}>中</button>
                        <Toast ref="toast2" position="center">
                            <p>this is the toast</p>
                        </Toast>
                        <button className={`${NS} button`} onClick={this.handleToast.bind(this, 'toast3')}>下</button>
                        <Toast ref="toast3" position="bottom">
                            <p>this is the toast</p>
                        </Toast>
                    </div>}>
{`<button className="${NS} button" onClick={openToast}>点击</button>
<Toast ref="toast" position="center">
    ...
</Toast>
openToast(){
    this.refs.toast.open()
}
`}
                </CodeView>
                <br/>

                <h4>持续时间</h4>
                <CodeView component={
                    <div>
                        <button className={`${NS} button`} onClick={this.handleToast.bind(this, 'toast4')}>点击</button>
                        <Toast ref="toast4" delay={1000}>
                            <p>this is the toast</p>
                        </Toast>
                    </div>}>
{`<button className="${NS} button" onClick={openToast}>点击</button>
<Toast ref="toast" delay={1000}>
    ...
</Toast>
openToast(){
    this.refs.toast.open()
}
`}
                </CodeView>
                <br/>

                <h4>带关闭选项的Toast</h4>
                <CodeView component={
                    <div>
                        <button className={`${NS} button`} onClick={this.handleToast.bind(this, 'toast5')}>点击</button>
                        <Toast ref="toast5" onClose={() => alert('关闭')}>
                            <p>this is the toast</p>
                        </Toast>
                    </div>}>
{`<button className="${NS} button" onClick={openToast}>点击</button>
<Toast ref="toast" onClose={handleClose}>
    ...
</Toast>
openToast(){
    this.refs.toast.open()
}
`}
                </CodeView>
                <br/>

                <h4>自定义关闭按钮</h4>
                <CodeView component={
                    <div>
                        <button className={`${NS} button`} onClick={this.handleToast.bind(this, 'toast6')}>点击</button>
                        <Toast ref="toast6" close={<p>关闭</p>} onClose={() => alert('关闭')}>
                            <p>this is the toast</p>
                        </Toast>
                    </div>}>
{`<button className="${NS} button" onClick={openToast}>点击</button>
<Toast ref="toast" close={<p>关闭</p>} onClose={handleClose}>
    ...
</Toast>
openToast(){
    this.refs.toast.open()
}
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
                            <td>position</td>
                            <td>位置</td>
                            <td>['top', 'center', 'bottom']</td>
                            <td>'top'</td>
                            <td>否</td>
                        </tr>
                        <tr>
                            <td>onClose</td>
                            <td>关闭事件</td>
                            <td>函数</td>
                            <td>
                            {`onClose(){}`}
                            </td>
                            <td>否</td>
                        </tr>
                        <tr>
                            <td>close</td>
                            <td>关闭按钮</td>
                            <td>jsx</td>
                            <td>无</td>
                            <td>否</td>
                        </tr>
                        <tr>
                            <td>delay</td>
                            <td>延续时间(毫秒)</td>
                            <td>数字</td>
                            <td>5000</td>
                            <td>否</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        );
    }
}


