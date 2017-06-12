import React, { Component } from 'react';
import {CN, TitleBlock} from '../util/tools';
import {NS} from '../constant';
import {Toast} from '../component/Toast';
import {CodeView} from '../component/CodeView';

const onClick = () => {
    Toast.success('消息点击')
}

const onClose = () => {
    Toast.success('消息关闭')
}

export class ToastPage extends Component {
    handleToast(props){
        props.content = 'this is the message'
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
                        <button className={`${NS} button`} 
                            onClick={this.handleToast.bind(this, {})}>点击</button>
                    </div>}>
{`Toast.show({
    content: 'message',
})`}
                </CodeView>
                <br/>

                <h4>可关闭消息</h4>
                <CodeView component={
                    <div>
                        <button className={`${NS} button`} 
                            onClick={this.handleToast.bind(this, { showClose: true })}>点击</button>
                    </div>}>
{`Toast.show({
    content: 'message',
    showClose: true,
})
`}
                </CodeView>
                <br/>

                <h4>持续时间</h4>
                <CodeView component={
                    <div>
                        <button className={`${NS} button`} 
                            onClick={this.handleToast.bind(this, { delay: 1000 })}>点击</button>
                    </div>}>
{`Toast.show({
    content: 'message',
    delay: 1000,
})
`}
                </CodeView>
                <br/>

                <h4>onClick 事件</h4>
                <CodeView component={
                    <div>
                        <button className={`${NS} button`} 
                            onClick={this.handleToast.bind(this, { onClick })}>点击</button>
                    </div>}>
{`Toast.show({
    content: 'message',
    onClick: clickFunction,
})
`}
                </CodeView>
                <br/>

                <h4>onClose 事件</h4>
                <CodeView component={
                    <div>
                        <button className={`${NS} button`} 
                            onClick={this.handleToast.bind(this, { onClose })}>点击</button>
                    </div>}>
{`Toast.show({
    content: 'message',
    onClose: closeFunction,
})
`}
                </CodeView>
                <br/>
                
                <h4>不同级别 Toast</h4>
                <CodeView component={
                    <div>
                        <button className={`${NS} button`} 
                            onClick={this.handleToast1.bind(this, 'success', null)}>
                            success
                        </button>
                        <button className={`${NS} button`} 
                            onClick={this.handleToast1.bind(this, 'info', null)}>
                            info
                        </button>
                        <button className={`${NS} button`} 
                            onClick={this.handleToast1.bind(this, 'warning', null)}>
                            warning
                        </button>
                        <button className={`${NS} button`} 
                            onClick={this.handleToast1.bind(this, 'error', { 
                                // delay: 1000, 
                                showClose: true,
                                onClick: () => alert('click') 
                            })}>
                            error
                        </button>
                    </div>}>
{`Toast.success('this is message')
Toast.info('this is message')
Toast.warning('this is message')
Toast.error('this is message', {
    delay: 1000,
    showClose: true,
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
                            <td>onClick</td>
                            <td>消息体点击事件</td>
                            <td>函数</td>
                            <td>
                            {`onClick(){}`}
                            </td>
                            <td>否</td>
                        </tr>
                        <tr>
                            <td>onClose</td>
                            <td>消息体关闭事件(手动、自动皆会触发)</td>
                            <td>函数</td>
                            <td>
                            {`onClose(){}`}
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


