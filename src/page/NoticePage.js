import React, { Component } from 'react';
import {NS} from '../constant';
import NoticeCenter from '../component/NoticeCenter';
import CodeView from '../component/CodeView';

const handleNoticeClick = (props) => {
    if (props.link) {
        window.open(props.link)
    }
}

export default class NoticePage extends Component {
    showNotice(type = ''){
        let notice = {
            title: '通知: ' + type,
            link: 'http://braavos.me',
            content: <p>内容</p>,
        }
        if (type === 'delay') {
            notice.delay = 1000
        }
        if (type === 'onClick') {
            notice.onClick = handleNoticeClick
        }
        if (type === 'manually') {
            notice.delay = 0;
        }

        let node = this.refs.noticeCenter
        node.addNotice(notice)
    }

    render() {
        return (
            <section>
                <h2>通知中心</h2>
                <h4>首先引入：</h4>
                <pre>
                    <code>
                        {`<NoticeCenter ref="notice_center"/>`}                    
                    </code>
                </pre>
                <br/>

                <h4>默认通知</h4>
                <CodeView component={<button className={`${NS} button`} onClick={() => this.showNotice('normal')}>点击</button>}>
{`this.refs.notice_center.addNotice({
    title,
    content,
    ...
})`}
                </CodeView>
                <br/>

                <h4>延迟时间</h4>
                <CodeView component={<button className={`${NS} button`} onClick={() => this.showNotice('delay')}>点击</button>}>
{`this.refs.notice_center.addNotice({
    ...
    delay: 2000,
})`}
                </CodeView>
                <br/>
                
                <h4>手动关闭</h4>
                <CodeView component={<button className={`${NS} button`} onClick={() => this.showNotice('manually')}>点击</button>}>
{`this.refs.notice_center.addNotice({
    ...
    delay: 0,
})`}
                </CodeView>
                <br/>

                <h4>onClick 事件</h4>
                <CodeView component={<button className={`${NS} button`} onClick={() => this.showNotice('onClick')}>点击</button>}>
{`this.refs.notice_center.addNotice({
    ...
    link: 'http://braavos.me',
    onClick: function(notice){
        window.open(notice.link)
    },
})`}
                </CodeView>
                <br/>

                <NoticeCenter ref="noticeCenter"/>

                <h4>notice 对象属性</h4>
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
                            <td>title</td>
                            <td>通知标题</td>
                            <td>jsx</td>
                            <td>无</td>
                            <td>否</td>
                        </tr>
                        <tr>
                            <td>content</td>
                            <td>内容</td>
                            <td>jsx</td>
                            <td>无</td>
                            <td>否</td>
                        </tr>
                        <tr>
                            <td>delay</td>
                            <td>延迟时间，时间为 0 时则为手动关闭</td>
                            <td>毫秒</td>
                            <td>5000</td>
                            <td>否</td>
                        </tr>
                        <tr>
                            <td>onClick</td>
                            <td>点击事件</td>
                            <td>函数(notice对象)</td>
                            <td>无</td>
                            <td>否</td>
                        </tr>
                        <tr>
                            <td>close</td>
                            <td>关闭按钮</td>
                            <td>jsx</td>
                            <td>{`<i className="${NS}">close</i>`}</td>
                            <td>否</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        );
    }
}
