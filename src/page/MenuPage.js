import React, { Component } from 'react';
import {CN, TitleBlock} from '../util/tools';
import {Menu, SubMenu, MenuGroup, MenuItem} from '../component/Menu';

import {CodeView} from '../component/CodeView';

const formatChild = (props) => {
    return (
        <Menu {...props}>
            <SubMenu title={<div>
                    <i className={CN('icon')}>settings</i>
                    <span>子菜单一</span>
                </div>} active={props && props.mode === undefined}>
                <MenuGroup title={<div>组一</div>}>
                    <MenuItem index="item1.1">选项一</MenuItem>
                    <MenuItem index="item1.2">选项二</MenuItem>
                </MenuGroup>
                <MenuGroup title={<div>组二</div>}>
                    <MenuItem index="item2.1">选项三</MenuItem>
                    <MenuItem index="item2.2" disabled>选项四</MenuItem>
                </MenuGroup>
                <SubMenu title={<div>
                    <i className={CN('icon')}>security</i>
                    二级子菜单一
                </div>}>
                    <MenuItem index="item1.1.1">选项五</MenuItem>
                    <MenuItem index="item1.1.2">选项六</MenuItem>
                    <MenuItem index="item1.1.3" disabled>选项七</MenuItem>
                </SubMenu>
                <SubMenu title={<div>
                    <i className={CN('icon')}>send</i>
                    二级子菜单二
                </div>}>
                    <MenuItem index="item1.2.1">选项十七</MenuItem>
                    <MenuItem index="item1.2.2">选项十八</MenuItem>
                    <MenuItem index="item1.2.3">选项十九</MenuItem>
                </SubMenu>
                <MenuItem index="item1.3.1">选项八</MenuItem>
            </SubMenu>
            <MenuItem index="item3-disabled" disabled>选项九</MenuItem>
            <MenuItem index="item3">选项十</MenuItem>
            <SubMenu title={<div>
                <i className={CN('icon')}>shop</i>
                子菜单二
            </div>}>
                <MenuItem index="item4">选项十一</MenuItem>
                <MenuItem index="item5">选项十二</MenuItem>
                <MenuGroup title="组三">
                    <MenuItem index="item8">选项十三</MenuItem>
                    <MenuItem index="item9">选项十四</MenuItem>
                </MenuGroup>
                <SubMenu title={<div>
                    <i className={CN('icon')}>star</i>
                    二级子菜单三
                </div>} active={props && props.mode === undefined}>
                    <MenuItem index="item6">选项十五</MenuItem>
                    <MenuGroup title="组四">
                        <MenuItem index="item7">选项十六</MenuItem>
                    </MenuGroup>
                </SubMenu>
            </SubMenu>
            <MenuItem index="item10">
                <a href="//braavos.me" target="_blank">外链</a>
            </MenuItem>
        </Menu>
    )
}

export class MenuPage extends Component {
    render() {
        return (
            <section>
                {TitleBlock('菜单')}

                <h4>默认菜单</h4>
                <CodeView component={ formatChild() }>
{`
`}
                </CodeView>
                <br/>

                <h4>手风琴</h4>
                <CodeView component={ formatChild({ mode: 'accordion' }) }>
{`<Menu accordion={true}>
    ...
</Menu>`}                    
                </CodeView>
                <br/>
                <h4>菜单默认值</h4>
                <CodeView component={ formatChild({ current: 'item1.1' }) }>
{`<Menu current={'item1.1'}>
    <Item index="1">
        ...
    </Item>
    ...
</Menu>`}                    
                </CodeView>
                <br/>

                <h4>弹出式菜单</h4>
                <CodeView component={ formatChild({ mode: 'popup' }) }>
{`<Menu popped={true}>
    <Item>
        ...
    </Item>
    ...
</Menu>`}                    
                </CodeView>
                <br/>

                <h4>水平菜单</h4>
                <CodeView component={ formatChild({ mode: 'horizontal' }) }>
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
