import React, { Component } from 'react';
import {NS} from '../constant';
import Pagination from '../component/Pagination';
import CodeView from '../component/CodeView';

export default class PaginationPage extends Component {
    render() {
        return (
            <section>
                <h2>分页</h2>
                <br/>

                <h4>默认分页</h4>
                <CodeView component={<Pagination/>}>
                    {`<Pagination/>`}
                </CodeView>
                <br/>

                <h4>指定某页</h4>
                <CodeView component={<Pagination current={2}/>}>
                    {`<Pagination current={2}/>`}
                </CodeView>
                <br/>

                <h4>全部页数</h4>
                <CodeView component={<Pagination total={10}/>}>
                    {`<Pagination total={10}/>`}
                </CodeView>
                <br/>

                <h4>显示分页范围</h4>
                <CodeView component={<Pagination showRange={true}/>}>
                    {`<Pagination showRange={true}/>`}
                </CodeView>
                <br/>

                <h4>显示分页导航</h4>
                <CodeView component={<Pagination showNav={true}/>}>
                    {`<Pagination showNav={true}/>`}
                </CodeView>
                <br/>

                <h4>页码 onChange 事件</h4>
                <CodeView component={<Pagination onChange={page => alert('第'+ page + '页')}/>}>
                    {`<Pagination onChange={page => alert(page)}/>`}
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
                            <td>current</td>
                            <td>当前页</td>
                            <td>整形</td>
                            <td>1</td>
                            <td>否</td>
                        </tr>
                        <tr>
                            <td>onChange</td>
                            <td>选中页变化触发事件</td>
                            <td>函数(选中页)</td>
                            <td>
                            {`onChange(page){

                            }`}
                            </td>
                            <td>否</td>
                        </tr>
                        <tr>
                            <td>total</td>
                            <td>总页数</td>
                            <td>整形</td>
                            <td>30</td>
                            <td>否</td>
                        </tr>
                        <tr>
                            <td>showRange</td>
                            <td>显示分页范围</td>
                            <td>Boolean</td>
                            <td>false</td>
                            <td>否</td>
                        </tr>
                        <tr>
                            <td>showNav</td>
                            <td>显示分页导航</td>
                            <td>Boolean</td>
                            <td>false</td>
                            <td>否</td>
                        </tr>
                    </tbody>
                </table>
                
            </section>
        );
    }
}
