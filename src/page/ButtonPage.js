import React, { Component } from 'react';
import {CN, TitleBlock} from '../util/tools';
import {NS, COLORS} from '../constant';
import CodeView from './CodeView';

const labelBtnGroup = (cn='') => {
    return (
        <div className="field">
            <div className={CN(`${cn} button-group`)}>
                <div className={CN('labeled button')}>
                    <i className="icon">photo_camera</i>
                </div>
                <div className={CN('labeled button')}>
                    <i className="icon">extension</i>
                </div>
                <div className={CN('button')}>normal button</div>
                <div className={CN('labeled button')}>
                    <i className="icon">layers</i>
                </div>
            </div>
            <br/>
        </div>
    )
};

const colorBtns = (cn='') => {
    return <div>
                {COLORS.map(color => {
                    return (
                        <button key={`${cn}-${color}-button`} className={CN(`${cn} ${color} button`)}>
                            {color}
                        </button>
                    )
                })}
            </div>;
}

export class ButtonPage extends Component {
    render() {
        return (
            <div className="button-example">
                {TitleBlock('按钮')}
                <ul>
                    <li>
                        <h4>默认按钮</h4>
                        <CodeView component={<button className={CN('button')}>按钮</button>}>
                            {`<button className="${NS} button">按钮</button>`}
                        </CodeView>
                        <br/>
                        <h4>主色调按钮</h4>
                        <CodeView component={<button className={CN('primary button')}>按钮</button>}>
                            {`<button className="${NS} primary button">按钮</button>`}
                        </CodeView>
                        <br/>
                        <h4>直角按钮</h4>
                        <CodeView component={<button className={CN('angled button')}>按钮</button>}>
                            {`<button className="${NS} angled button">按钮</button>`}
                        </CodeView>
                        <br/>

                        <h4>带颜色的按钮</h4>
                        <CodeView component={colorBtns()}>
                            {`<button className="${NS} red">按钮</button>`}
                        </CodeView>
                        <br/>
                        
                        <h4>Basic 按钮</h4>
                        <CodeView component={colorBtns('basic')}>
                            {`<button className="${NS} basic red button">按钮</button>`}
                        </CodeView>
                        <br/>

                        <h4>Icon 按钮</h4>
                        <CodeView component={<div>
                                                <button className={CN('button tiny icon')}>
                                                    <i className="icon">refresh</i>
                                                    <span>refresh</span>
                                                </button>
                                                <button className={CN('button small icon')}>
                                                    <i className="icon">star</i>
                                                    <span>star</span>
                                                </button>
                                                <button className={CN('button icon')}>
                                                    <i className="icon">home</i>
                                                    <span>home</span>
                                                </button>
                                                <button className={CN('button large icon')}>
                                                    <i className="icon">contact_mail</i>
                                                    <span>mail</span>
                                                </button>
                                                <button className={CN('button huge icon')}>
                                                    <i className="icon">group</i>
                                                    <span>group</span>
                                                </button>
                                                <button className={CN('button red icon')}>
                                                    <i className="icon">watch</i>
                                                    <span>watch</span>
                                                </button>
                                                <button className={CN('button basic amber icon')}>
                                                    <i className="icon">keyboard</i>
                                                    <span>keyboard</span>
                                                </button>
                                            </div>}>
{`<div className="${NS} icon button">
    <i className="icon">star</i>
    <span>star</span>
</div>`}  
                        </CodeView>
                        <br/>

                        <h4>Fluid 按钮</h4>
                        <CodeView component={<button className={CN('fluid button')}>fluid 按钮</button>}>
                            {`<button className="${NS} fluid button">按钮</button>`}
                        </CodeView>
                        <br/>
                        

                        <h4>Circle 按钮</h4>
                        <CodeView component={<div>
                                                <div className={CN('circle tiny button')}>
                                                    <i className="icon">apps</i>
                                                </div>
                                                <div className={CN('circle small button')}>
                                                    <i className="icon">share</i>
                                                </div>
                                                <div className={CN('circle button')}>
                                                    <i className="icon">clear</i>
                                                </div>
                                                <div className={CN('circle large button')}>
                                                    <i className="icon">reply</i>
                                                </div>
                                                <div className={CN('circle huge button')}>
                                                    <i className="icon">plus_one</i>
                                                </div>
                                                <div className={CN('circle green button')}>
                                                    <i className="icon">arrow_back</i>
                                                </div>
                                                <div className={CN('circle basic blue button')}>
                                                    <i className="icon">more_vert</i>
                                                </div>
                                            </div>}>
{`<div className="${NS} circle button">
    <i className="icon">apps</i>
</div>
`}                                
                        </CodeView>
                        <br/>

                        <h4>Round 按钮</h4>
                        <CodeView component={<div>
                                                <button className={CN('round button')}>round 按钮</button>
                                                <div className={CN('round icon blue button')}>
                                                    <i className="icon">more_vert</i>
                                                    <span>more</span>
                                                </div>
                                                <div className={CN('round basic icon green button')}>
                                                    <i className="icon">alarm</i>
                                                    <span>alarm</span>
                                                </div>
                                            </div>}>
                            {`<button className="${NS} round button">按钮</button>`}
                        </CodeView>
                        <br/>

                        <h4>Labeled 按钮</h4>
                        <CodeView component={<div className={CN('labeled button')}>
                                                <i className="icon">menu</i>
                                            </div>}>
{`<div className="${NS} labeled button">
    <i className="icon">menu</i>
</div>`}                                                        
                        </CodeView>
                        <br/>
                    </li>
                    <li>
                        <h4>按钮尺寸</h4>
                        <CodeView component={<div>
                                                <button className={CN('tiny button')}>tiny</button>
                                                <button className={CN('small button')}>small</button>
                                                <button className={CN('button')}>normal</button>
                                                <button className={CN('large button')}>large</button>
                                                <button className={CN('huge button')}>huge</button>
                                            </div>}>
                            {`<button className="${NS} tiny button">tiny</button>`}
                        </CodeView>
                        <br/>
                    </li>
                    <li>
                        <h4>按钮组</h4>
                        <CodeView component={<div>
                                                <div className={CN('button-group')}>
                                                    <div className="button">first</div>
                                                    <div className="button">second</div>
                                                    <div className="button">thrid</div>
                                                </div>
                                                <div className={CN('vertical button-group')}>
                                                    <div className="button">first</div>
                                                    <div className="button">second</div>
                                                    <div className="button">thrid</div>
                                                </div>
                                            </div>}>
{`<div className="${NS} button-group">
    <div className="button">first</div>
    <div className="button">second</div>
    <div className="button">third</div>
</div>

<div className="${NS} vertical button-group">
    <div className="button">按钮</div>
    <div className="button">按钮</div>
    <div className="button">按钮</div>
</div>
`}                                
                        </CodeView>
                        <br/>

                    </li>
                    <li>
                        <h4>Labeled 按钮组</h4>
                        <CodeView component={<div>
                                                <div className="field">
                                                    <div className={CN('vertical button-group')}>
                                                        <div className="labeled button">
                                                            <i className="icon">laptop</i>
                                                        </div>
                                                        <div className="labeled button">
                                                            <i className="icon">watch</i>
                                                        </div>
                                                        <div className="labeled button">
                                                            <i className="icon">headset</i>
                                                        </div>
                                                    </div>
                                                </div>
                                                {labelBtnGroup('tiny')}
                                                {labelBtnGroup('small')}
                                                {labelBtnGroup()}
                                                {labelBtnGroup('large')}
                                                {labelBtnGroup('huge')}
                                            </div>}>
{`<div className="${NS} tiny button-group">
    <div className="label button">
        <i className="icon">menu</i>
    </div>
    <div className="label button">
        <i className="icon">menu</i>
    </div>
    ...
    <div className="button">second</div>
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
