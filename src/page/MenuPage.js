import React, { Component } from 'react';
import {CN, TitleBlock} from '../util/tools';
import {Menu} from '../component/Menu';
import {Item} from '../component/Item';
import {CodeView} from '../component/CodeView';

const formatChild = ({current=null, accordion=false, onChange=null, style, popped=false, mode='click', horizontal=false, activeFirst=false}) => {
    return (
        <Menu current={current} accordion={accordion} onChange={onChange} horizontal={horizontal} popped={popped} mode={mode}>
            <Item index='sub0' sub={true} active={activeFirst} title={<p>二级菜单</p>}>
                <Menu className="second-menu">
                    <Item index="0">
                        <p>二级节点</p>
                    </Item>
                    <Item index="1">
                        <p>二级节点</p>
                    </Item>
                    <Item index="2" disabled={true}>
                        <p>二级节点</p>
                    </Item>
                    <Item sub={true} index="sub0_1" title={<p>三级菜单</p>}>
                        <Menu className="third-menu">
                            <Item index="10">
                                <p>三级节点</p>
                            </Item>
                            <Item index="11">
                                <p>三级节点</p>
                            </Item>
                        </Menu>
                    </Item>
                </Menu>
            </Item>
            <Item index="sub1" sub={true} title={<p>二级菜单</p>}>
                <Menu className="second-menu">
                    <Item index="sub1_0" sub={true} title={<p>三级菜单</p>}>
                        <Menu className="third-menu">
                            <Item index="6" disabled={true}>
                                <p>三级节点</p>
                            </Item>
                            <Item index="7">
                                <p>三级节点</p>
                            </Item>
                        </Menu>
                    </Item>
                    <Item index="sub1_1" sub={true} title={<p>三级菜单</p>}>
                        <Menu className="third-menu">
                            <Item index="8">
                                <p>三级节点</p>
                            </Item>
                            <Item index="9">
                                <p>三级节点</p>
                            </Item>
                        </Menu>
                    </Item>
                    <Item index="5">
                        <p>二级节点</p>
                    </Item>
                </Menu>
            </Item>
            <Item index="4">
                <p>一级节点 <a target="_blank" href="http://braavos.me" style={{'color': '#f00'}}>链接</a></p>
            </Item>
        </Menu>
    )
}

export class MenuPage extends Component {
    render() {
        return (
            <section>
                {TitleBlock('菜单')}

                <h4>默认菜单</h4>
                <CodeView component={ formatChild({}) }>
{`<Menu>
    <Item index='sub0' sub={true} active={activeFirst} title={<p>二级菜单</p>}>
        <Menu className="second-menu">
            <Item index="0">
                <p>二级节点</p>
            </Item>
            <Item index="1">
                <p>二级节点</p>
            </Item>
            <Item index="2" disabled={true}>
                <p>二级节点</p>
            </Item>
            <Item sub={true} index="sub0_1" title={<p>三级菜单</p>}>
                <Menu className="third-menu">
                    <Item index="10">
                        <p>三级节点</p>
                    </Item>
                    <Item index="11">
                        <p>三级节点</p>
                    </Item>
                </Menu>
            </Item>
        </Menu>
    </Item>
    <Item index="sub1" sub={true} title={<p>二级菜单</p>}>
        <Menu className="second-menu">
            <Item index="sub1_0" sub={true} title={<p>三级菜单</p>}>
                <Menu className="third-menu">
                    <Item index="6" disabled={true}>
                        <p>三级节点</p>
                    </Item>
                    <Item index="7">
                        <p>三级节点</p>
                    </Item>
                </Menu>
            </Item>
            <Item index="sub1_1" sub={true} title={<p>三级菜单</p>}>
                <Menu className="third-menu">
                    <Item index="8">
                        <p>三级节点</p>
                    </Item>
                    <Item index="9">
                        <p>三级节点</p>
                    </Item>
                </Menu>
            </Item>
            <Item index="5">
                <p>二级节点</p>
            </Item>
        </Menu>
    </Item>
    <Item index="4">
        <p>Item <a target="_blank" href="http://braavos.me" style={{'color': '#f00'}}>blog</a></p>
    </Item>
</Menu>
`}
                </CodeView>
                <br/>

                <h4>手风琴</h4>
                <CodeView component={ formatChild({ accordion: true }) }>
{`<Menu accordion={true}>
    ...
</Menu>`}                    
                </CodeView>
                <br/>
                <h4>菜单默认值</h4>
                <CodeView component={ formatChild({ current: '4' }) }>
{`<Menu current={'1'}>
    <Item index="1">
        ...
    </Item>
    ...
</Menu>`}                    
                </CodeView>
                <br/>

                <h4>展开某一项菜单</h4>
                <CodeView component={ formatChild({ activeFirst: true }) }>
{`<Menu>
    <Item active={true}>
        ...
    </Item>
    ...
</Menu>`}                    
                </CodeView>
                <br/>

                <h4>弹出式菜单</h4>
                <CodeView component={ formatChild({ popped: true }) }>
{`<Menu popped={true}>
    <Item>
        ...
    </Item>
    ...
</Menu>`}                    
                </CodeView>
                <br/>

                <h4>Hover 模式菜单</h4>
                <CodeView component={ formatChild({ mode: 'hover' }) }>
{`<Menu mode={'hover'}>
    <Item>
        ...
    </Item>
    ...
</Menu>`}                    
                </CodeView>
                <br/>

                <h4>水平菜单(暂不稳定)</h4>
                <CodeView component={ formatChild({ horizontal: true }) }>
{`<Menu horizontal={true}>
    ...
</Menu>`}                    
                </CodeView>
                <br/>

                <h4>Menu 属性</h4>
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
                            <td>默认选中值</td>
                            <td>字符串或数字</td>
                            <td>无</td>
                            <td>否</td>
                        </tr>
                        <tr>
                            <td>accordion</td>
                            <td>手风琴式</td>
                            <td>Boolean</td>
                            <td>false</td>
                            <td>否</td>
                        </tr>
                        <tr>
                            <td>popped</td>
                            <td>弹出式菜单</td>
                            <td>Boolean</td>
                            <td>false</td>
                            <td>否</td>
                        </tr>
                        <tr>
                            <td>horizontal</td>
                            <td>水平式菜单</td>
                            <td>Boolean</td>
                            <td>false</td>
                            <td>否</td>
                        </tr>
                        <tr>
                            <td>mode</td>
                            <td>激活方式</td>
                            <td>['click', 'hover']</td>
                            <td>'click'</td>
                            <td>否</td>
                        </tr>
                        <tr>
                            <td>onChange</td>
                            <td>菜单切换触发事件</td>
                            <td>{`onChange(current){}`}</td>
                            <td>无</td>
                            <td>否</td>
                        </tr>
                    </tbody>
                </table>
                <br/>
                <h4>Item 属性</h4>
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
                            <td>sub</td>
                            <td>是否包含子菜单</td>
                            <td>字符串或数字</td>
                            <td>false</td>
                            <td>否</td>
                        </tr>
                        <tr>
                            <td>index</td>
                            <td>索引</td>
                            <td>字符串或数字</td>
                            <td></td>
                            <td>是</td>
                        </tr>
                        <tr>
                            <td>active</td>
                            <td>选中状态</td>
                            <td>Boolean</td>
                            <td>false</td>
                            <td>否</td>
                        </tr>
                        <tr>
                            <td>title</td>
                            <td>标题，拥有子菜单时使用</td>
                            <td>jsx</td>
                            <td>无</td>
                            <td>否</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        );
    }
}
