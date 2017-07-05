import React, { Component } from 'react';
import {CN, TitleBlock} from '../util/tools';
import {Tab} from '../component/Tab';
import {Item} from '../component/Item';
import {CodeView} from '../component/CodeView';

const makeContent = (options={}) => {
    options = options || {}
    let {current=null, bottom=false, section=false, vertical=false, onChange=null} = options
    return (
        <Tab current={current} 
            bottom={bottom} 
            section={section} vertical={vertical}
            onChange={onChange}>
            <Item index="0" title={<p>第一</p>}>
                <h4>内容一</h4>
                <p>详情asdfhjkl</p>
            </Item>
            <Item index="1" title={<p>第二</p>}>
                <h4>内容二</h4>
                <p>详情qwertyy</p>
            </Item>
            <Item index="2" title={<p>第三</p>}>
                <h4>内容三</h4>
                <p>详情zxcvbn</p>
            </Item>
        </Tab>
    )
}

export class TabPage extends Component {
    render() {
        return (
            <section>
                {TitleBlock('选项卡')}

                <h4>默认选项卡</h4>
                <CodeView component={
                                    makeContent()
                                }>
{`<Tab>
    <Item index="0" title={<p>第一</p>}>
        <h4>内容一</h4>
        <p>详情asdfhjkl</p>
    </Item>
    <Item index="1" title={<p>第二</p>}>
        <h4>内容二</h4>
        <p>详情qwertyy</p>
    </Item>
    <Item index="2" title={<p>第三</p>}>
        <h4>内容三</h4>
        <p>详情zxcvbn</p>
    </Item>
</Tab>`}                    
                </CodeView>
                <br/>
                
                <h4>默认选中值</h4>
                <CodeView component={makeContent({
                                        current: '1',
                                    })}>
{`<Tab current="1">
    ...
    <Item index="1" title={<p>第二</p>}>
        <h4>内容二</h4>
        <p>详情qwertyy</p>
    </Item>
    ...
</Tab>`}                    
                </CodeView>
                <br/>
                
                <h4>下方选项卡</h4>
                <CodeView component={makeContent({
                                        bottom: true
                                    })}>
{`<Tab bottom={true}>
    ...
</Tab>`}                    
                </CodeView>
                <br/>
                
                <h4>section 选项卡</h4>
                <CodeView component={makeContent({
                                        section: true
                                    })}>
{`<Tab section={true}>
    ...
</Tab>`}                    
                </CodeView>
                <br/>
                
                <h4>section 下方选项卡</h4>
                <CodeView component={makeContent({
                                        section: true,
                                        bottom: true,
                                    })}>
{`<Tab section={true} bottom={true}>
    ...
</Tab>`}                    
                </CodeView>
                <br/>
                
                <h4>垂直选项卡</h4>
                <CodeView component={makeContent({
                                        vertical: true,
                                    })}>
{`<Tab vertical={true}>
    ...
</Tab>`}                    
                </CodeView>
                <br/>
                
                <h4>垂直下方选项卡</h4>
                <CodeView component={makeContent({
                                        vertical: true,
                                        bottom: true,
                                    })}>
{`<Tab vertical={true} bottom={true}>
    ...
</Tab>`}                    
                </CodeView>
                <br/>

                <h4>onChange 事件</h4>
                <CodeView component={makeContent({
                                        onChange: index => alert(`当前选中${index}`)
                                    })}>
{`<Tab vertical={true} bottom={true}>
    ...
</Tab>`}                    
                </CodeView>
                <br/>
                
                <h4>嵌套选项卡</h4>
                <CodeView component={<Tab vertical={true} bottom={true}>
                                        <Item index='0' title={<p>first</p>}>
                                            <h4>The first tab content</h4>
                                            <p>React.js is pretty awesome</p>
                                        </Item>
                                        <Item index='1' title={<p>second</p>}>
                                            <h4>The second tab content</h4>
                                            <p>Vue.js is pretty awesome</p>
                                        </Item>
                                        <Item index='2' title={<p>third</p>}>
                                            <h4>The third tab content</h4>
                                            <p>Ember.js is pretty awesome</p>
                                            <Tab bottom={true}>
                                                <Item index='4' title={<p>first</p>}>
                                                    <h4>The first tab content</h4>
                                                    <p>React.js is pretty awesome</p>
                                                </Item>
                                                <Item index='5' title={<p>second</p>}>
                                                    <h4>The second tab content</h4>
                                                    <p>Vue.js is pretty awesome</p>
                                                </Item>
                                                <Item index='6' title={<p>third</p>}>
                                                    <h4>The third tab content</h4>
                                                    <p>Ember.js is pretty awesome</p>
                                                </Item>
                                                <Item index='7' title={<p>fourth</p>}>
                                                    <h4>The fourth tab content</h4>
                                                    <p>Angular.js is pretty awesome</p>
                                                    <a target='_blank' href="http://braavos.me">blog</a>
                                                </Item>
                                            </Tab>
                                        </Item>
                                        <Item index='3' title={<p>fourth</p>}>
                                            <h4>The fourth tab content</h4>
                                            <p>Angular.js is pretty awesome</p>
                                            <a target='_blank' href="http://braavos.me">blog</a>
                                        </Item>
                                    </Tab>}>
{`<Tab vertical={true} bottom={true}>
    <Item index="0">
        ...
    </Item>
    <Item index="2">
        <Tab>
            <Item index="3">
                ...
            </Item>
            ...
        </Tab>
    </Item>
    ...
</Tab>`}                    
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
                            <td>默认选中值</td>
                            <td>index</td>
                            <td>null</td>
                            <td>否</td>
                        </tr>
                        <tr>
                            <td>bottom</td>
                            <td>是否在下方显示 tab</td>
                            <td>Boolean</td>
                            <td>false</td>
                            <td>否</td>
                        </tr>
                        <tr>
                            <td>section</td>
                            <td>section 类型选项卡</td>
                            <td>Boolean</td>
                            <td>false</td>
                            <td>否</td>
                        </tr>
                        <tr>
                            <td>vertical</td>
                            <td>垂直选项卡</td>
                            <td>Boolean</td>
                            <td>false</td>
                            <td>否</td>
                        </tr>
                        <tr>
                            <td>onChange</td>
                            <td>tab 切换事件, 拿到当前选中 Item 的 index 值</td>
                            <td>function(index){}</td>
                            <td>null</td>
                            <td>否</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        );
    }
}
