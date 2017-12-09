import React, { Component } from 'react';
import {CN, TitleBlock} from '../util/tools';
import {NS, COLORS} from '../constant';
import CodeView from './CodeView';

export class TextPage extends Component {
    render() {
        return (
            <div>
                {TitleBlock('文字')}
                <ul>
                    <li>
                        <h4>省略的文字</h4>
                        <CodeView component={
                            <div style={{'width': '200px'}} className="truncate">
                                hello, this will not show the fully text.
                            </div>
                        }>
                            {`<div class="truncate">content</div>`}
                        </CodeView>
                        <br/>
                    </li>
                    <li>
                        <h4>换行显示</h4>
                        <CodeView component={
                            <div style={{'width': '200px'}} className="break-word">
                                <a href="https://www.google.com/design/spec/style/color.html" target="_blank">
                                    https://www.google.com/design/spec/style/color.html
                                </a>
                            </div>
                        }>
{`<div class="break-word">
    <a href="#">href</a>
</div>`}
                        </CodeView>
                        <br/>
                    </li>
                    <li>
                        <h4>文字对齐</h4>
                        <CodeView component={
                            <div className={CN('bg-tiny_gray grid-3')}>
                                <p className="text-left column">
                                    Aligh left
                                </p>
                                <p className="text-center column">
                                    Aligh center
                                </p>
                                <p className="text-right column">
                                    Aligh right
                                </p>
                            </div>
                        }>
{`<div class="text-left">left</div>
<div class="text-center">center</div>
<div class="text-right">right</div>
`}
                        </CodeView>
                        <br/>
                    </li>
                    <li>
                        <h4>浮动</h4>
                        <CodeView component={
                            <div className={CN('bg-tiny_gray block')}>
                                <span className="float-none">Float none</span>
                                <span className="float-left">Float left</span>
                                <span className="float-right">Float right</span>
                            </div>
                        }>
{`<div class="float-none">none</div>
<div class="float-left">left</div>
<div class="float-right">right</div>
`}
                        </CodeView>
                        <br/>
                    </li>
                    <li>
                        <h4>文字大小</h4>
                        <CodeView component={
                            <div className={CN('bg-tiny_gray block')}>
                                <p className="text-major">Text major</p>
                                <p className="text-content">Text content</p>
                                <p className="text-extra">Text extra</p>
                            </div>
                        }>
{`<p className="text-major">Text major</p>
<p className="text-content">Text content</p>
<p className="text-extra">Text extra</p>
`}
                        </CodeView>
                        <br/>
                    </li>
                </ul>
            </div>
        );
    }
}