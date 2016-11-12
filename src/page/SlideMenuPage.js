import React, { Component } from 'react';
import {CN, TitleBlock} from '../util/tools';
import {SlideMenu} from '../component/SlideMenu';
import {NS} from '../constant';
import {CodeView} from '../component/CodeView';

let content = <div className="slide-content">
                <h3>标题</h3> 
                <p>内容</p>
            </div>

export class SlideMenuPage extends Component {
    handleOpenSlide(ref){
        this.refs[ref].open()
    }
    handleClose(ref){
        return this.refs[ref].close()
    }
    customClose(){
        return confirm('确认关闭')
    }
    render() {
        return (
            <section>
                {TitleBlock('切换菜单')}

                <h4>默认切换菜单</h4>
                <CodeView component={<div>
                                        <button onClick={this.handleOpenSlide.bind(this, 'slide0')}>点击</button>
                                        <SlideMenu ref="slide0" >
                                            {content}
                                        </SlideMenu>
                                    </div>}>
{`<button onClick={openSlide('slide')}>点击</button>
<SlideMenu ref="slide" >
    ...
</SlideMenu>
openSlide(ref){
    this.refs[ref].open()
}
`}                                    
                </CodeView>
                <br/>

                <h4>弹出位置</h4>
                <CodeView component={<div>
                                        <button onClick={this.handleOpenSlide.bind(this, 'slide1')}>左</button>
                                        <SlideMenu ref="slide1" position="left">
                                            {content}
                                        </SlideMenu>
                                        <br/>
                                        <button onClick={this.handleOpenSlide.bind(this, 'slide2')}>右</button>
                                        <SlideMenu ref="slide2" position="right">
                                            {content}
                                        </SlideMenu>
                                        <br/>
                                        <button onClick={this.handleOpenSlide.bind(this, 'slide3')}>上</button>
                                        <SlideMenu ref="slide3" position="top">
                                            {content}
                                        </SlideMenu>
                                        <br/>

                                        <button onClick={this.handleOpenSlide.bind(this, 'slide4')}>下</button>
                                        <SlideMenu ref="slide4" position="bottom">
                                            {content}
                                        </SlideMenu>
                                    </div>}>
{`<SlideMenu ref="slide" position="left">
    ...
</SlideMenu>
`}                                    
                </CodeView>
                <br/>

                <h4>指定宽度</h4>
                <CodeView component={<div>
                                        <button onClick={this.handleOpenSlide.bind(this, 'slide5')}>点击</button>
                                        <SlideMenu ref="slide5" width={500}>
                                            {content}
                                        </SlideMenu>
                                    </div>}>
{`<SlideMenu ref="slide" width={500}>
    ...
</SlideMenu>`}                                    
                </CodeView>
                <br/>

                <h4>主动关闭及自定义关闭事件</h4>
                <CodeView component={<div>
                                        <button onClick={this.handleOpenSlide.bind(this, 'slide6')}>点击</button>
                                        <SlideMenu ref="slide6" onClose={this.customClose}>
                                            {content}
                                            <button className={`${NS} button`} onClick={() => this.handleClose('slide6')}>关闭</button>
                                        </SlideMenu>
                                    </div>}>
{`<SlideMenu ref="slide" onClose={() => confirm('确认关闭?')}>
    ...
    <button className="${NS} button" onClick={this.refs.slide6.close}>关闭</button>
</SlideMenu>`}                                    
                </CodeView>
                <br/>
                
                <h4>属性</h4>
                <table className="dot table">
                    <thead>
                        <tr>
                            <th>名称</th>
                            <th>描述</th>
                            <th>类型</th>
                            <th>默认值</th>
                            <th>required</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>position</td>
                            <td>弹出位置</td>
                            <td>left, right, top, bottom</td>
                            <td>right</td>
                            <td>否</td>
                        </tr>
                        <tr>
                            <td>width</td>
                            <td>弹出宽度或高度</td>
                            <td>整形</td>
                            <td>300px</td>
                            <td>否</td>
                        </tr>
                        <tr>
                            <td>onClose</td>
                            <td>自定义关闭事件</td>
                            <td>函数</td>
                            <td>无</td>
                            <td>否</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        );
    }
}
