import React, { Component } from 'react';
import {InputNumber} from '../component/InputNumber'
import {CodeView} from '../component/CodeView'
import {CN, TitleBlock} from '../util/tools';

export class InputNumberPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 2.3,
        }
    }
    handleValueChange(field, value){
        this.setState({
            [field]: value
        });
    }
    render() {
        return (
            <div>
                {TitleBlock('数字输入')}
                <ul>
                    <li>
                        <h3>默认数字输入</h3>
                        <CodeView component={
                            <InputNumber onChange={value => console.log(value)} />
                        }>
                            {`<InputNumber onChange={value => onChangeFunc(value)} />`}
                        </CodeView>
                    </li>
                    <li>
                        <h3>带默认值数字输入</h3>
                        <CodeView component={
                            <InputNumber value={this.state.value} 
                                onChange={value => this.handleValueChange('value', value)} />
                        }>
                            {`<InputNumber onChange={value => onChangeFunc(value)} />`}
                        </CodeView>
                    </li>
                    <li>
                        <h3>整数</h3>
                        <CodeView component={
                            <InputNumber int 
                                onChange={value => console.log('value', value)} />
                        }>
                            {`<InputNumber onChange={value => onChangeFunc(value)} />`}
                        </CodeView>
                    </li>
                    <li>
                        <h3>最大最小值</h3>
                        <CodeView component={
                            <InputNumber min={1} max={10}
                                value={this.state.value1}
                                onChange={value => this.handleValueChange('value1', value)} />
                        }>
                            {`<InputNumber min={1} max={10} onChange={value => onChangeFunc(value)} />`}
                        </CodeView>
                    </li>
                    <li>
                        <h3>step</h3>
                        <CodeView component={
                            <InputNumber step={0.2} 
                                onChange={value => console.log('value', value)} />
                        }>
                            {`<InputNumber step={0.2} onChange={value => onChangeFunc(value)} />`}
                        </CodeView>
                    </li>
                    <li>
                        <h3>size</h3>
                        <CodeView component={
                            <span>
                                <div>
                                    <h4>mini</h4>
                                    <InputNumber size="mini" 
                                        onChange={value => console.log('value', value)} />
                                </div>
                                <br/>
                                <div>
                                    <h4>small</h4>
                                    <InputNumber size="small" 
                                        onChange={value => console.log('value', value)} />
                                </div>
                                <br/>
                                <div>
                                    <h4>large</h4>
                                    <InputNumber size="large" 
                                        onChange={value => console.log('value', value)} />
                                </div>
                                <br/>
                                <div>
                                    <h4>fluid, 响应式</h4>
                                    <InputNumber size="fluid" 
                                        onChange={value => console.log('value', value)} />
                                </div>
                                <br/>
                            </span>
                        }>
{`<InputNumber size="mini" onChange={value => onChangeFunc(value)} />
<InputNumber size="small" onChange={value => onChangeFunc(value)} />
<InputNumber size="large" onChange={value => onChangeFunc(value)} />
<InputNumber size="fluid" onChange={value => onChangeFunc(value)} />`}
                        </CodeView>
                        <br/>
                    </li>
                    <li>
                        <h4>disabled</h4>
                        <CodeView component={
                            <InputNumber 
                                disabled
                                onChange={value => console.log('value', value)} />
                        }>
                            {`<InputNumber disabled onChange={onChangeFunc} />`}
                        </CodeView>
                        <br/>
                    </li>
                    <li>
                        <h4>不显示箭头</h4>
                        <CodeView component={
                            <InputNumber 
                                showArrow={false}
                                onChange={value => console.log('value', value)} />
                        }>
                            {`<InputNumber showArrow={false} onChange={onChangeFunc} />`}
                        </CodeView>
                    </li>
                </ul>

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
                            <td>min</td>
                            <td>最小值</td>
                            <td>Number</td>
                            <td>null</td>
                            <td>否</td>
                        </tr>
                        <tr>
                            <td>max</td>
                            <td>最大值</td>
                            <td>Number</td>
                            <td>null</td>
                            <td>否</td>
                        </tr>
                        <tr>
                            <td>step</td>
                            <td>步进</td>
                            <td>Number</td>
                            <td>1</td>
                            <td>否</td>
                        </tr>
                        <tr>
                            <td>size</td>
                            <td>输入尺寸，mini, small, large, fluid, 不填</td>
                            <td>enum</td>
                            <td>null</td>
                            <td>否</td>
                        </tr>
                        <tr>
                            <td>onChange</td>
                            <td>值更新触发</td>
                            <td>function(value){}</td>
                            <td>null</td>
                            <td>是</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
