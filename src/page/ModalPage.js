import React, { Component } from 'react';
import {NS} from '../constant';
import Modal from '../component/Modal';
import Hightlight from "react-highlight";
import CodeView from '../component/CodeView';

const content = <div>
                    <h4>this is content</h4>
                    <p>This is a modal window. You can do the following things with it:</p>
                    <ul>
                        <li>Read: modal windows will probably tell you something important so don't forget to read what they say.</li>
                        <li>Look: a modal window enjoys a certain kind of attention; just look at it and appreciate its presence.</li>
                        <li>Close: click on the button to close the modal.</li>
                        <li>
                            <a href="http://braavos.me" target="_blank">blog</a>
                        </li>
                    </ul>
                </div>

export default class ModalPage extends Component {
    constructor(props) {
        super(props);
    }
    openModal(ref){
        const dom = this.refs[ref]
        dom.open()
    }
    handleConfirm(){
        return !alert('确认')
    }
    handleCancel(){
        return !alert('取消')
    }
    handleClose(){
        return !alert('关闭')
    }
    render() {
        return (
            <section>
                <h2>弹出层</h2>
                <br/>

                <h4>默认弹出层</h4>
                <CodeView component={<div>
                                        <button className={`${NS} button`} onClick={this.openModal.bind(this, 'modal0')}>显示</button>
                                        <Modal ref="modal0">
                                            {content}
                                        </Modal>
                                    </div>}>
{`<div>
    <button className="${NS} button" onClick={this.openModal}>显示</button>
    ...
    <Modal ref="modal">
        {content}
    </Modal>
</div>

openModal = function(){
    this.refs.modal.open()
}
`}
                </CodeView>
                <br/>

                <h4>带标题的弹出层</h4>
                <CodeView component={<div>
                                        <button className={`${NS} button`} onClick={this.openModal.bind(this, 'modal1')}>显示</button>
                                        <Modal ref="modal1" title={<h2>标题</h2>}>
                                            {content}
                                        </Modal>
                                    </div>}>
{`<div>
    <button className="${NS} button" onClick={this.openModal}>显示</button>
    ...
    <Modal ref="modal" title={<h2>标题</h2>}>
        {content}
    </Modal>
</div>

openModal = function(){
    this.refs.modal.open()
}
`}
                </CodeView>
                <br/>

                <h4>带确认、取消及自定义事件的弹出层</h4>
                <CodeView component={<div>
                                        <button className={`${NS} button`} onClick={this.openModal.bind(this, 'modal2')}>显示</button>
                                        <Modal ref="modal2"
                                            onConfirm={this.handleConfirm.bind(this)} 
                                            onClose={this.handleClose.bind(this)} 
                                            onCancel={this.handleCancel.bind(this)}>
                                            {content}
                                        </Modal>
                                    </div>}>
{`<div>
    <button className="${NS} button" onClick={this.openModal}>显示</button>
    ...
    <Modal ref="modal" 
        onConfirm={onConfirm} 
        onCancel={onCancel} 
        onCancel={onCancel}>
        {content}
    </Modal>
</div>

openModal = function(){
    this.refs.modal.open()
}
`}
                </CodeView>
                <br/>

                <h4>强制确认的弹出层</h4>
                <CodeView component={<div>
                                        <button className={`${NS} button`} onClick={this.openModal.bind(this, 'modal3')}>显示</button>
                                        <Modal ref="modal3" force={true} onConfirm={() => true }>
                                            {content}
                                        </Modal>
                                    </div>}>
{`<div>
    <button className="${NS} button" onClick={this.openModal}>显示</button>
    ...
    <Modal ref="modal" force={true} onConfirm={handleConfirm}>
        {content}
    </Modal>
</div>

openModal = function(){
    this.refs.modal.open()
}
`}
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
                            <td>title</td>
                            <td>弹出层标题</td>
                            <td>jsx</td>
                            <td>今天的日期</td>
                            <td>否</td>
                        </tr>
                        <tr>
                            <td>confirm</td>
                            <td>确认按钮</td>
                            <td>jsx</td>
                            <td>{'<button class="dot blue button">确认</button>'}</td>
                            <td>否</td>
                        </tr>
                        <tr>
                            <td>cancel</td>
                            <td>取消按钮</td>
                            <td>jsx</td>
                            <td>{'<button class="dot button">取消</button>'}</td>
                            <td>否</td>
                        </tr>
                        <tr>
                            <td>onConfirm</td>
                            <td>确认事件触发</td>
                            <td>
                                <Hightlight>
                                    {`onConfirm(){ return true }`}
                                </Hightlight>
                                <span>根据返回值判断是否关闭</span>
                            </td>
                            <td>无, 不传则不显示确认按钮</td>
                            <td>否</td>
                        </tr>
                        <tr>
                            <td>onConcel</td>
                            <td>取消事件触发</td>
                            <td>
                                <Hightlight>
                                    {`onCancel(){ return true }`}
                                </Hightlight>
                                <span>根据返回值判断是否关闭</span>
                            </td>
                            <td>无，不传则不显示取消按钮</td>
                            <td>否</td>
                        </tr>
                        <tr>
                            <td>onClose</td>
                            <td>关闭事件触发</td>
                            <td>
                                <Hightlight>
                                    {`onClose(){}`}
                                </Hightlight>
                            </td>
                            <td>无</td>
                            <td>否</td>
                        </tr>
                        <tr>
                            <td>force</td>
                            <td>只允许点击确认关闭</td>
                            <td>Boolean</td>
                            <td>false</td>
                            <td>否</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        );
    }
}
