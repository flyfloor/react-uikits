import React, { Component } from 'react';
import {CN, TitleBlock} from '../util/tools';
import {NS} from '../constant';
import {Pagination} from '../component';
import CodeView from './CodeView';

export class PaginationPage extends Component {
    render() {
        return (
            <section>
                {TitleBlock('分页')}

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
                <h4>指定区间</h4>
                <CodeView component={<Pagination range={5}/>}>
                    {`<Pagination range={5}/>`}
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

                <h4>显示跳页</h4>
                <CodeView component={<Pagination showJump={true} />}>
                    {`<Pagination showJump={true} />`}
                </CodeView>
                <br/>

                <h4>自定义首末页</h4>
                <CodeView component={<Pagination showRange={true} start={<span>首页</span>} end={<span>末页</span>} />}>
                    {`<Pagination showRange={true} start={<span>首页</span>} end={<span>末页</span>} />`}
                </CodeView>
                <br/>

                <h4>靠右分页</h4>
                <CodeView component={<Pagination className="right"/>}>
                    {`<Pagination className="right"/>`}
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
                            <td>range</td>
                            <td>总区间</td>
                            <td>整形</td>
                            <td>7</td>
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
                        <tr>
                            <td>prev</td>
                            <td>向前分页按钮内容</td>
                            <td>jsx</td>
                            <td>{`<span>上一页</span>`}</td>
                            <td>否</td>
                        </tr>
                        <tr>
                            <td>next</td>
                            <td>向后分页按钮内容</td>
                            <td>jsx</td>
                            <td>{`<span>下一页</span>`}</td>
                            <td>否</td>
                        </tr>
                        <tr>
                            <td>showJump</td>
                            <td>显示调页</td>
                            <td>Boolean</td>
                            <td>false</td>
                            <td>否</td>
                        </tr>
                        <tr>
                            <td>start</td>
                            <td>首页显示, 需要设置 showRange 为 true</td>
                            <td>jsx</td>
                            <td>false</td>
                            <td>否</td>
                        </tr>
                        <tr>
                            <td>end</td>
                            <td>末页显示, 需要设置 showRange 为 true</td>
                            <td>jsx</td>
                            <td>false</td>
                            <td>否</td>
                        </tr>
                    </tbody>
                </table>
                
            </section>
        );
    }
}
