import React, { Component } from 'react';
import {CN, TitleBlock} from '../util/tools';
import {NS, COLORS} from '../constant';
import CodeView from './CodeView';

export class OtherPage extends Component {
    render() {
        return (
            <div>
                {TitleBlock('其他', '其他部分内容')}
                <ul>
                    <li>
                        <h3>固定分辨率的响应式图片</h3>
                        <CodeView component={
                            <ul className={CN('grid-3')}>
                                <li className={CN('column')}>
                                    <div className={CN('figure')}>
                                        <img src="https://drscdn.500px.org/photo/138174521/m%3D2048_k%3D1/8d3c34a9316137bfe2150895bda42da1"/>
                                    </div>
                                </li>
                                <li className={CN('column')}>
                                    <div className={CN('figure')}>
                                        <img src="https://drscdn.500px.org/photo/138174521/m%3D2048_k%3D1/8d3c34a9316137bfe2150895bda42da1"/>
                                    </div>
                                </li>
                                <li className={CN('column')}>
                                    <div className={CN('figure')}>
                                        <img src="https://drscdn.500px.org/photo/138174521/m%3D2048_k%3D1/8d3c34a9316137bfe2150895bda42da1"/>
                                    </div>
                                </li>
                            </ul>
                        }>
{`<div className="${NS} figure">
    <img src="" alt="" />
</div>`}                                
                        </CodeView>
                        <br/>


                        <h4>其他尺寸</h4>
                        <CodeView component={
                            <ul className={CN('grid-3')}>
                                <li className={CN('column')}>
                                    <div className={CN('figure figure:2x1')}>
                                        <img src="http://braavos.me/dot-css/dist/img/img.png"/>
                                    </div>
                                </li>
                                <li className={CN('column')}>
                                    <div className={CN('figure figure:2x1')}>
                                        <img src="http://braavos.me/dot-css/dist/img/img.png"/>
                                    </div>
                                </li>
                                <li className={CN('column')}>
                                    <div className={CN('figure figure:2x1')}>
                                        <img src="http://braavos.me/dot-css/dist/img/img.png"/>
                                    </div>
                                </li>
                            </ul>
                        }>
{`<div className="${NS} figure figure:2x1">
    <img src="" alt="" />
</div>`}                                
                        </CodeView>
                        <br/>
                        
                        <h4>分辨率:</h4>
                        <div className={CN('small table')}>
                            <div className="row head">
                                <div className="cell">figure:1x1</div>
                                <div className="cell">figure:1x2</div>
                                <div className="cell">figure:1x3</div>
                                <div className="cell">figure:2x1</div>
                                <div className="cell">figure:2x3</div>
                                <div className="cell">figure:3x2</div>
                                <div className="cell">figure:3x4</div>
                            </div>
                            <div className="row">
                                <div className="cell">figure:1x3</div>
                                <div className="cell">figure:5x2</div>
                                <div className="cell">figure:5x3</div>
                                <div className="cell">figure:6x5</div>
                                <div className="cell">figure:9x16</div>
                                <div className="cell">figure:16x9</div>
                                <div className="cell">figure:16x10</div>
                            </div>
                        </div>
                        <br/>
                    </li>
                    <li>
                        <h4>block</h4>
                        <CodeView component={
                            <div className={CN('block')}>
                                <p>content</p>
                            </div>
                        }>
{`<div className={CN('block')}>
    <p>content</p>
</div>
`}                            
                        </CodeView>
                        <br/>
                        
                        <h4>border block</h4>
                        <CodeView component={
                            <div className={CN('border block')}>
                                <p>content</p>
                            </div>
                        }>
{`<div className={CN('border block')}>
    <p>content</p>
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