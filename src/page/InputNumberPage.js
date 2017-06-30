import React, { Component } from 'react';
import InputNumber from '../component/InputNumber'
import {CodeView} from '../component/CodeView'
import {CN, TitleBlock} from '../util/tools';

export class InputNumberPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 2,
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
                            {`<InputNumber onChange={value => console.log(value)} />`}
                        </CodeView>
                    </li>
                    <li>
                        <h3>带默认值数字输入</h3>
                        <CodeView component={
                            <InputNumber value={this.state.value} onChange={value => this.handleValueChange('value', value)} />
                        }>
                            {`<InputNumber onChange={value => console.log(value)} />`}
                        </CodeView>
                    </li>
                    <li>
                        <h3>整数</h3>
                        <CodeView component={
                            <InputNumber int 
                                onChange={value => console.log('value', value)} />
                        }>
                            {`<InputNumber onChange={value => console.log(value)} />`}
                        </CodeView>
                    </li>
                    <li></li>
                </ul>
            </div>
        );
    }
}
