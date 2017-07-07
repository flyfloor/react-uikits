import React, { Component } from 'react';
import InputNumber from '../component/InputNumber'
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
                </ul>
            </div>
        );
    }
}
