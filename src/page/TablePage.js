import React, { Component } from 'react';
import {CN, TitleBlock} from '../util/tools';
import {NS, COLORS} from '../constant';
import {CodeView} from '../component/CodeView';

const makeTable = (cn='') => {
    return (
        <table className={CN(`${cn} table`)}>
            <thead>
                <tr>
                    <th>name</th>
                    <th>bio</th>
                    <th>age</th>
                    <th>company</th>
                    <th>hobby</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td rowSpan="3">jerry</td>
                    <td rowSpan="3">Something Ricked This Way Comes, Something Ricked This Way Comes</td>
                    <td rowSpan="3">27</td>
                    <td rowSpan="3">meituan</td>
                    <td>sport</td>
                </tr>
                <tr>
                    <td>cycling</td>
                </tr>
                <tr>
                    <td>...</td>
                </tr>
                <tr>
                    <td>lily</td>
                    <td>...</td>
                    <td>20</td>
                    <td>?</td>
                    <td>...</td>
                </tr>
            </tbody>
        </table>
    )
};

export class TablePage extends Component {
    render() {
        return (
            <div>
                {TitleBlock('表格')}
                <ul>
                    <li>
                        <h4>默认表格</h4>
                        <CodeView component={
                            makeTable()
                        }>
{`<table className="${NS} table">
    <thead>
        <tr>
            <th></th><th></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td></td>
            <td></td>
        </tr>
    </tbody>
</div>

或者

<div className="${NS} table">
    <div className="thead">
        <div className="cell"></div>
        <div className="cell"></div>
    </div>
    <div className="row">
        <div className="cell"></div>
        <div className="cell"></div>
    </div>
</div>
`}                                
                        </CodeView>
                        <br/>
                    </li>
                    <li>
                        <h4>格子表格</h4>
                        <CodeView component={
                            makeTable('celled')
                        }>
{`<table className="${NS} celled table">
    ...
</table>
`}                                
                        </CodeView>
                        <br/>
                    </li>
                    <li>
                        <h4>固定表格</h4>
                        <CodeView component={
                            makeTable('fixed')
                        }>
{`<table className="${NS} fixed table">
    ...
</table>
`}                                
                        </CodeView>
                        <br/>
                    </li>
                    <li>
                        <h4>居中表格</h4>
                        <CodeView component={
                            makeTable('center')
                        }>
{`<table className="${NS} center table">
    ...
</table>
`}                                
                        </CodeView>
                        <br/>
                    </li>
                    <li>
                        <h4>加载中的表格</h4>
                        <CodeView component={
                            makeTable('loading')
                        }>
{`<table className="${NS} loading table">
    ...
</table>
`}                                
                        </CodeView>
                        <br/>
                    </li>
                    <li>
                        <h4>表格布局</h4>
                        <CodeView component={
                            makeTable('basic')
                        }>
{`<table className="${NS} basic table">
    ...
</table>
`}                                
                        </CodeView>
                        <br/>
                    </li>
                </ul>
            </div>
        );
    }
}
