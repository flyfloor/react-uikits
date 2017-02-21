import React, { Component } from 'react';
import {CN, TitleBlock} from '../util/tools';
import {NS} from '../constant';
import {Toast} from '../component/Toast';
import {CodeView} from '../component/CodeView';

const onClick = () => {
    alert('消息点击')
    window.open('http://braavos.me')
}
export class ToastPage extends Component {
    handleToast(props){
        props.content = <p>this is the message</p>
        Toast.show(props)
    }
    handleToast1(type, opt){
        Toast[type]('this is the message', opt)
    }
    render() {
        return (
            <section>
                {TitleBlock('消息')}

                <h4>首先引入：</h4>
                <pre>
                    <code>
                        {`import {Toast} from 'react-uikits'`}
                    </code>
                </pre>
                <br/>

                <h4>默认消息</h4>
                <CodeView component={
                    <div>
                        <button className={`${NS} button`} onClick={this.handleToast.bind(this, {})}>点击</button>
                    </div>}>
{`Toast.show({
    content: <p>content</p>,
})`}
                </CodeView>
                <br/>

                <h4>消息位置</h4>
                <CodeView component={
                    <div>
                        <button className={`${NS} button`} onClick={this.handleToast.bind(this, { position: 'top' })}>上</button>
                        <button className={`${NS} button`} onClick={this.handleToast.bind(this, { position: 'center' })}>中</button>
                        <button className={`${NS} button`} onClick={this.handleToast.bind(this, { position: 'bottom' })}>下</button>
                    </div>}>
{`Toast.show({
    content: <p>content</p>,
    position: 'top',
})

Toast.show({
    content: <p>content</p>,
    position: 'center',
})

Toast.show({
    content: <p>content</p>,
    position: 'bottom',
})
`}
                </CodeView>
                <br/>

                <h4>持续时间</h4>
                <CodeView component={
                    <div>
                        <button className={`${NS} button`} onClick={this.handleToast.bind(this, { delay: 1000 })}>点击</button>
                    </div>}>
{`Toast.show({
    content: <p>content</p>,
    delay: 1000,
})
`}
                </CodeView>
                <br/>

                <h4>onClick 事件</h4>
                <CodeView component={
                    <div>
                        <button className={`${NS} button`} onClick={this.handleToast.bind(this, { onClick })}>点击</button>
                    </div>}>
{`Toast.show({
    content: <p>content</p>,
    onClick: clickFunction,
})
`}
                </CodeView>
                <br/>
                
                <h4>不同级别 Toast</h4>
                <CodeView component={
                    <div>
                        <button className={`${NS} button`} onClick={this.handleToast1.bind(this, 'success', {})}>success</button>
                        <button className={`${NS} button`} onClick={this.handleToast1.bind(this, 'info', {})}>info</button>
                        <button className={`${NS} button`} onClick={this.handleToast1.bind(this, 'warning', {})}>warning</button>
                        <button className={`${NS} button`} onClick={this.handleToast1.bind(this, 'error', { delay: 1000, onClick: () => alert('click') })}>error</button>
                    </div>}>
{`Toast.success('this is message', options)
Toast.info('this is message', options)
Toast.warning('this is message', options)
Toast.error('this is message', {
    delay: 1000,
    onClick: () => alert('click')
})
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
                            <td>onClick</td>
                            <td>消息体点击事件</td>
                            <td>函数</td>
                            <td>
                            {`onClick(){}`}
                            </td>
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


