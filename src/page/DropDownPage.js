import React, { Component } from 'react';
import {CN, TitleBlock} from '../util/tools';
import {NS} from '../constant';
import Highlight from 'react-highlight';
import {DropDown} from '../component/DropDown';
import {Item} from '../component/Item';
import {CodeView} from '../component/CodeView';

const options = [
    {name: 'apple', value: 'apple'},
    {name: 'banana', value: 'banana'},
    {name: 'cat', value: 'cat', disabled: true},
    {name: 'dog', value: 'dog'},
    {name: 'egg', value: 'egg'},
    {name: 'frog', value: 'frog'},
    {name: 'god', value: 'god'},
    {name: 'henrry', value: 'henrry'},
    {name: 'ice', value: 'ice'},
];

export class DropDownPage extends Component {
    render() {
        return (
            <section>
                {TitleBlock('下拉框')}

                <h4>默认下拉框</h4>
                <CodeView component={<DropDown options={options} 
                        onChange={(value) => console.log(value)}/>}>
                    {`<DropDown options={options} onChange={(value) => console.log(value)}/>`}
                </CodeView>
                <br/>

                <h4>默认选中</h4>
                <CodeView component={<DropDown options={options} 
                            defaultSelected={true} onChange={(value) => console.log(value)}/>}>
                    {`<DropDown options={options} defaultSelected={true} onChange={(value) => console.log(value)}/>`}
                </CodeView>
                <br/>

                <h4>默认值</h4>
                <CodeView component={<DropDown options={options} 
                        value={'banana'} onChange={(value) => console.log(value)}/>}>
                    {`<DropDown options={options} value={'banana'} onChange={(value) => console.log(value)}/>`}
                </CodeView>
                <br/>

                <h4>搜索框</h4>
                <CodeView component={<DropDown options={options}
                    searchable={true} onChange={(value) => console.log(value)}/>}>
                    {`<DropDown options={options} searchable={true} onChange={(value) => console.log(value)}/>`}
                </CodeView>
                <br/>

                <h4>下拉框方向</h4>
                <CodeView component={<DropDown options={options}
                    position='top' onChange={(value) => console.log(value)}/>}>
                    {`<DropDown options={options} position='top' onChange={(value) => console.log(value)}/>`}
                </CodeView>
                <br/>

                <h4>默认多选下拉</h4>
                <CodeView component={<DropDown options={options} multi={true} 
                    onChange={(value) => console.log(value)}/>}>
                    {`<DropDown options={options} multi={true} onChange={(value) => console.log(value)}/>`}
                </CodeView>
                <br/>

                <h4>带默认值的多选下拉</h4>
                <CodeView component={<DropDown options={options} 
                        value={['banana', 'egg']} multi={true} onChange={(value) => console.log(value)}/>}>
                    {`<DropDown options={options} multi={true} value={['banana', 'egg']} onChange={(value) => console.log(value)}/>`}
                </CodeView>
                <br/>

                <h4>Yield Children</h4>
                <CodeView component={<DropDown value={2} onChange={value => console.log(value)}>
                                        <Item value={1} name="apple">
                                            <p>hate the show, love the animal</p>
                                            <img style={{ "width": "100px"}} src="https://raw.githubusercontent.com/jerryshew/design/master/png/sad-morty.png" alt=""/>
                                        </Item>
                                        <Item value={2} name="banana">
                                            <h2>this is banana</h2>
                                        </Item>
                                        <Item value={3} name="cat">
                                            <h4>this is cat</h4>
                                        </Item>
                                        <Item value={4} name="dog" disabled={true}>
                                            blog site: <a href="http://braavos.me" target="_blank">lacuna</a>
                                        </Item>
                                        <Item value={5} name="egg">
                                            <i style={{'fontStyle': 'italic'}}>egg's gooood</i>
                                        </Item>
                                    </DropDown>}>
{`<DropDown value={2} onChange={displayChange}>
    <Item value={1} name="apple">
        <p>hate the show, love the animal</p>
        <img style={{ "width": "100px"}} src="https://raw.githubusercontent.com/jerryshew/design/master/png/sad-morty.png" alt=""/>
    </Item>
    ...
</DropDown>  `}
                </CodeView>
                <br/>

                <h4>Yield Children(multi)</h4>
                <CodeView component={<DropDown multi={true} value={[2, 3]} onChange={value => console.log(value)}>
                                        <Item value={1} name="apple">
                                            <p>hate the show, love the animal</p>
                                            <img style={{ "width": "100px"}} src="https://raw.githubusercontent.com/jerryshew/design/master/png/sad-morty.png" alt=""/>
                                        </Item>
                                        <Item value={2} name="banana">
                                            <h2>this is banana</h2>
                                        </Item>
                                        <Item value={3} name="cat">
                                            <h4>this is cat</h4>
                                        </Item>
                                        <Item value={4} name="dog" disabled={true}>
                                            blog site: <a href="http://braavos.me" target="_blank">lacuna</a>
                                        </Item>
                                        <Item value={5} name="egg">
                                            <i style={{'fontStyle': 'italic'}}>egg's gooood</i>
                                        </Item>
                                    </DropDown>}>
{`<DropDown multi={true}
    value={[2, 3]} onChange={displayChange}>
    <Item value={1} name="apple">
        <p>hate the show, love the animal</p>
        <img style={{ "width": "100px"}} src="https://raw.githubusercontent.com/jerryshew/design/master/png/sad-morty.png" alt=""/>
    </Item>
    ...
</DropDown>  `}
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
                            <th>Required</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>options</td>
                            <td>下拉数据来源</td>
                            <td>
                                数组, 例如:
                                <Highlight>
{`[
    {name: 'apple', value: 'apple'},
    {name: 'banana', value: 'banana'},
    {name: 'cat', value: 'cat', disabled: true},
    {name: 'dog', value: 'dog'},
    {name: 'egg', value: 'egg'},
]`}                                    
                                </Highlight>
                            </td>
                            <td>[]</td>
                            <td>否</td>
                        </tr>
                        <tr>
                            <td>labelName</td>
                            <td>数据源显示的key, dropdown 展示 options[labelName]</td>
                            <td>字符串</td>
                            <td>'name'</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>valueName</td>
                            <td>数据源值的key, dropdown 提交 options[valueName]</td>
                            <td>字符串</td>
                            <td>'value'</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>onChange</td>
                            <td>下拉值变化事件</td>
                            <td>函数(值)</td>
                            <td>{`onChange(value){}`}</td>
                            <td>是</td>
                        </tr>
                        <tr>
                            <td>value</td>
                            <td>值</td>
                            <td>多选为数组类型，单选字符串或数字</td>
                            <td>
                                <p>多选为 []</p>
                                <p>单选为 ""</p>
                            </td>
                            <td>否</td>
                        </tr>
                        <tr>
                            <td>defaultSelected</td>
                            <td>默认是否选中</td>
                            <td>Boolean</td>
                            <td>false</td>
                            <td>否</td>
                        </tr>
                        <tr>
                            <td>searchable</td>
                            <td>是否含有搜索框</td>
                            <td>Boolean</td>
                            <td>false</td>
                            <td>否</td>
                        </tr>
                        <tr>
                            <td>position</td>
                            <td>展开位置</td>
                            <td>'top', 'bottom' 中的一个</td>
                            <td>bottom</td>
                            <td>否</td>
                        </tr>
                        <tr>
                            <td>multi</td>
                            <td>是否多选</td>
                            <td>Boolean</td>
                            <td>false</td>
                            <td>否</td>
                        </tr>
                        <tr>
                            <td>children</td>
                            <td>yield children 方式</td>
                            <td>jsx, 多个Item组件</td>
                            <td>无</td>
                            <td>否</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        );
    }
}
