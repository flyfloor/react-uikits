import React, { Component } from 'react';
import {CN, TitleBlock} from '../util/tools';
import {NS, COLORS} from '../constant';
import {CodeView} from '../component/CodeView';

export class GridPage extends Component {
    render() {
        return (
            <div className='grid-example'>
                {TitleBlock('栅格')}
                <ul>
                    <li>
                        <h4>等距列</h4>
                        <CodeView component={
                            <div className={CN('grid-5 text-center text-extra')}>
                                <div className="row">
                                    <div className="column">
                                        <p>1/5</p>
                                    </div>
                                    <div className="column">
                                        <p>1/5</p>
                                    </div>
                                    <div className="column">
                                        <p>1/5</p>
                                    </div>
                                    <div className="column">
                                        <p>1/5</p>
                                    </div>
                                    <div className="column">
                                        <p>1/5</p>
                                    </div>
                                </div>
                            </div>
                        }>
{`grid-(1~16)
<div className="${NS} grid-5">
    <div className="row">
        <div className="column"></div>
        <div className="column"></div>
        <div className="column"></div>
        <div className="column"></div>
        <div className="column"></div>
    </div>
</div>`
}                            
                            
                        </CodeView>
                        <br/>
                        <CodeView component={
                            <div>
                                <div className={CN('grid text-center')}>
                                    <div className="row-3">
                                        <div className="column">
                                            <p>1/3</p>
                                        </div>
                                        <div className="column">
                                            <p>1/3</p>
                                        </div>
                                        <div className="column">
                                            <p>1/3</p>
                                        </div>
                                    </div>
                                    <div className="row-5">
                                        <div className="column">
                                            <p>1/5</p>
                                        </div>
                                        <div className="column">
                                            <p>1/5</p>
                                        </div>
                                        <div className="column">
                                            <p>1/5</p>
                                        </div>
                                        <div className="column">
                                            <p>1/5</p>
                                        </div>
                                        <div className="column">
                                            <p>1/5</p>
                                        </div>
                                    </div>
                                </div>
                                <ul className={CN('grid-4 text-center')}>
                                    <li className="column">
                                        <p>1/4</p>
                                    </li>
                                    <li className="column">
                                        <p>1/4</p>
                                    </li>
                                    <li className="column">
                                        <p>1/4</p>
                                    </li>
                                    <li className="column">
                                        <p>1/4</p>
                                    </li>
                                </ul>
                            </div>
                        }>
{`<div className="${NS} grid">
    <div className="row-3">
        <div className="column"></div>
        <div className="column"></div>
        <div className="column"></div>
    </div>
    <div className="row-5">
        <div className="column"></div>
        <div className="column"></div>
        <div className="column"></div>
    </div>
</div>

<div className="${NS} grid-4">
    <div className="column"></div>
    <div className="column"></div>
    <div className="column"></div>
    <div className="column"></div>
</div>
`}                                   
                        </CodeView>
                        <br/>
                    </li>
                    <li>
                        <h4>列宽，一共分为16等分</h4>
                        <CodeView component={
                            <div className={CN('grid text-center')}>
                                <div className="row">
                                    <div className="column-2">
                                        <p>2</p>
                                    </div>
                                    <div className="column-6">
                                        <p>6</p>
                                    </div>
                                    <div className="column-2">
                                        <p>2</p>
                                    </div>
                                    <div className="column-2">
                                        <p>2</p>
                                    </div>
                                    <div className="column-4">
                                        <p>4</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="column-8">
                                        <p>8</p>
                                    </div>
                                    <div className="column-8">
                                        <p>8</p>
                                    </div>
                                </div>
                            </div>
                        }>
{`column-(1~16)
<div className="${NS} grid">
    <div className="row">
        <div className="column-2"></div>
        <div className="column-6"></div>
        <div className="column-2"></div>
        <div className="column-2"></div>
        <div className="column-4"></div>
    </div>
    <div class="row">
        <div class="column-8"></div>
        <div class="column-8"></div>
    </div>
</div>
`}                                
                        </CodeView>
                        <br/>
                        <pre>
                            <code>
                            </code>
                        </pre>
                    </li>
                    <li>
                        <CodeView component={
                            <div className={CN('grid text-center')}>
                                <div className="row">
                                    <div className="column-3">
                                        <p>3</p>
                                    </div>
                                    <div className="column-5">
                                        <p>5</p>
                                    </div>
                                    <div className="float-right column-4">
                                        <p>4</p>
                                    </div>
                                </div>
                            </div>
                        }>
                            
{`<div className="${NS} grid">
    <div className="row">
        <div className="column-3"></div>
        <div className="column-5"></div>
        <div className="float-right column-4"></div>
    </div>
</div>`}                                
                        </CodeView>
                        <br/>
                    </li>
                    <li>
                        <h4>基本栅格布局</h4>
                        <CodeView component={
                            <div className={CN('basic grid-4')}>
                                <div className="row">
                                    <div className="column">a</div>
                                    <div className="column">b</div>
                                    <div className="column">c</div>
                                    <div className="column">d</div>
                                </div>
                            </div>
                        }>
{`<div className="${NS} basic grid-4">
    <div className="row">
        <div className="column"></div>
        <div className="column"></div>
        <div className="column"></div>
        <div className="column"></div>
    </div>
</div>`}                               
                        </CodeView>
                    </li>
                </ul>
            </div>
        );
    }
}
