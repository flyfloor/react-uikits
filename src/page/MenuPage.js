import React, { Component } from 'react';
import {CN, TitleBlock} from '../util/tools';
import {Menu, SubMenu, MenuGroup, MenuItem} from '../component';

import CodeView from './CodeView';

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
{`<Menu>
    <SubMenu title={<div>
            <i className={CN('icon')}>settings</i>
            <span>子菜单一</span>
        </div>}>
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
        </div>}>
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
`}
                </CodeView>
                <br/>

                <h4>手风琴</h4>
                <CodeView component={ formatChild({ mode: 'accordion' }) }>
{`<Menu mode={'accordion'}>
    <SubMenu title={<div>
            <i className={CN('icon')}>settings</i>
            <span>子菜单一</span>
        </div>}>
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
        </div>}>
            <MenuItem index="item6">选项十五</MenuItem>
            <MenuGroup title="组四">
                <MenuItem index="item7">选项十六</MenuItem>
            </MenuGroup>
        </SubMenu>
    </SubMenu>
    <MenuItem index="item10">
        <a href="//braavos.me" target="_blank">外链</a>
    </MenuItem>
</Menu>`}                    
                </CodeView>
                <br/>
                <h4>菜单默认值</h4>
                <CodeView component={ formatChild({ current: 'item1.1' }) }>
{`<Menu current={"item1.1"}>
    <SubMenu title={<div>
            <i className={CN('icon')}>settings</i>
            <span>子菜单一</span>
        </div>}>
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
        </div>}>
            <MenuItem index="item6">选项十五</MenuItem>
            <MenuGroup title="组四">
                <MenuItem index="item7">选项十六</MenuItem>
            </MenuGroup>
        </SubMenu>
    </SubMenu>
    <MenuItem index="item10">
        <a href="//braavos.me" target="_blank">外链</a>
    </MenuItem>
</Menu>`}                    
                </CodeView>
                <br/>

                <h4>弹出式菜单</h4>
                <CodeView component={ formatChild({ mode: 'popup' }) }>
{`<Menu mode="popup">
    <SubMenu title={<div>
            <i className={CN('icon')}>settings</i>
            <span>子菜单一</span>
        </div>}>
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
        </div>}>
            <MenuItem index="item6">选项十五</MenuItem>
            <MenuGroup title="组四">
                <MenuItem index="item7">选项十六</MenuItem>
            </MenuGroup>
        </SubMenu>
    </SubMenu>
    <MenuItem index="item10">
        <a href="//braavos.me" target="_blank">外链</a>
    </MenuItem>
</Menu>`}                    
                </CodeView>
                <br/>

                <h4>水平菜单</h4>
                <CodeView component={ formatChild({ mode: 'horizontal' }) }>
{`<Menu mode="horizontal">
    <SubMenu title={<div>
            <i className={CN('icon')}>settings</i>
            <span>子菜单一</span>
        </div>}>
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
        </div>}>
            <MenuItem index="item6">选项十五</MenuItem>
            <MenuGroup title="组四">
                <MenuItem index="item7">选项十六</MenuItem>
            </MenuGroup>
        </SubMenu>
    </SubMenu>
    <MenuItem index="item10">
        <a href="//braavos.me" target="_blank">外链</a>
    </MenuItem>
</Menu>`}                    
                </CodeView>
                <br/>

                <h4>onChange 事件</h4>
                <CodeView component={ formatChild({ onChange: (current) => alert(current) }) }>
{`<Menu onChange={current => alert(current)}>
    <SubMenu title={<div>
            <i className={CN('icon')}>settings</i>
            <span>子菜单一</span>
        </div>}>
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
        </div>}>
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
`}                
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
                            <td>mode</td>
                            <td>菜单模式</td>
                            <td>
                                {`accordion, popup, horizontal, 不填`}
                            </td>
                            <td>null</td>
                            <td>否</td>
                        </tr>
                        <tr>
                            <td>onChange</td>
                            <td>菜单切换触发事件, 拿到当前选中项 index</td>
                            <td>{`onChange(current){}`}</td>
                            <td>无</td>
                            <td>否</td>
                        </tr>
                    </tbody>
                </table>
                <br/>
                
                <h4>SubMenu 属性</h4>
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
                            <td>标题</td>
                            <td>字符串或jsx</td>
                            <td>无</td>
                            <td>是</td>
                        </tr>
                    </tbody>
                </table>
                
                <h4>MenuGroup 属性</h4>
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
                            <td>标题</td>
                            <td>字符串或jsx</td>
                            <td>无</td>
                            <td>是</td>
                        </tr>
                    </tbody>
                </table>

                <h4>MenuItem 属性</h4>
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
                            <td>index</td>
                            <td>菜单项的唯一索引</td>
                            <td>字符串或数字</td>
                            <td>无</td>
                            <td>否</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        );
    }
}
