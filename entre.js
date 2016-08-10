import React, { Component } from 'react';
import {Pagination, Radio, RadioGroup} from 'react-ui-component';
import ReactDOM from 'react-dom';

import css from 'react-ui-component/css/all.less';

let options = [
    {value: 'a', name: 'a'},
    {value: 'b', name: 'b'},
    {value: 'c', name: 'c'},
    {value: 'd', name: 'd'},
]

export class App extends Component {
    handleChange(value){
        console.log(value)
    }
    render() {
        return (
            <div>
                <h3>React UIkit</h3>
                <Pagination current={3}/>
                <RadioGroup options={options} value="c" onChange={this.handleChange.bind(this)}>
                </RadioGroup>
            </div>
        )
    }
}


ReactDOM.render(<App/>, document.getElementById('root'))