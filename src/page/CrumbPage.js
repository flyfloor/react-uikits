import React, { Component } from 'react';
import {CN, TitleBlock} from '../util/tools';
import {NS, COLORS, SHAPE_SIZE} from '../constant';
import CodeView from './CodeView';


const makeCrumbList = (cn='') => {
    return (
        <ul>
            {SHAPE_SIZE.map(size => {
                return <li key={`${size}${cn}_crumb`}>
                            <div className={CN(`${size} ${cn} crumb`)}>
                                <a href="javascript:;" className="section">home</a>
                                <a href="javascript:;" className="section">blog</a>
                                <a href="javascript:;" className="section active">last year</a>
                            </div>
                            <br/>
                        </li>
            })}
        </ul>
    )
}

export class CrumbPage extends Component {
    render() {
        return (
            <div>
                {TitleBlock('面包屑')}
                <ul>
                    <li>
                        <CodeView component={
                            makeCrumbList()
                        }>
{`<div className="${CN('crumb')}">
    <a className="section" href="#">home</a>
    <a className="section" href="#">blog</a>
    <a className="section active" href="#">last year</a>
</div>
`}                                
                        </CodeView>
                        <br/>

                        <h4>另一种面包屑</h4>
                        <CodeView component={
                            makeCrumbList('slash')
                        }>
{`<div className="${CN('slash crumb')}">
    <a className="section" href="#">home</a>
    <a className="section" href="#">blog</a>
    <a className="section active" href="#">last year</a>
</div>
`}                                             
                        </CodeView>
                        <br/>
                    </li>
                </ul>
            </div>
        );
    }
}
