import React, { Component } from 'react';
import {Panel} from '../component';
import {CN, TitleBlock} from '../util/tools';
import CodeView from './CodeView';

export class PanelPage extends Component {
    render() {
        return (
            <section>
                {TitleBlock('面板')}

                <h4>面板</h4>
                <CodeView component={<Panel>内容...</Panel>}>
                    {`<Panel>内容...</Panel>`}
                </CodeView>
                <br/>

                <h4>带标题面板</h4>
                <CodeView component={<Panel title={<p>标题</p>}>内容...</Panel>}>
                    {`<Panel title={<p>标题</p>}>内容...</Panel>`}
                </CodeView>
                <br/>
                

                <h4>加载中的面板</h4>
                <CodeView component={<Panel className="loading" title={<p>标题</p>}>内容...</Panel>}>
                    {`<Panel className="loading" title={<p>标题</p>}>内容...</Panel>`}
                </CodeView>
                <br/>

            </section>
        );
    }
}
