import React, { Component } from 'react';
import Hightlight from "react-highlight";
import {CN, TitleBlock} from '../util/tools';
import {NS} from '../constant';
import {Modal} from '../component/Modal';
import {CodeView} from '../component/CodeView';

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

export class ModalPage extends Component {
    constructor(props) {
        super(props);
    }
    openModal(ref){
        const dom = this[ref]
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
                {TitleBlock('弹出层')}

                <h4>默认弹出层</h4>
                <CodeView component={<div>
                                        <button className={`${NS} button`} onClick={this.openModal.bind(this, 'modal0')}>显示</button>
                                        <Modal ref={modal => this.modal0 = modal}>
                                            {content}
                                        </Modal>
                                    </div>}>
{`<div>
    <button className="${NS} button" onClick={this.openModal}>显示</button>
    ...
    <Modal ref={modal => this.modal = modal}>
        {content}
    </Modal>
</div>

openModal = function(){
    this.modal.open()
}
`}
                </CodeView>
                <br/>

                <h4>带标题的弹出层</h4>
                <CodeView component={<div>
                                        <button className={`${NS} button`} onClick={this.openModal.bind(this, 'modal1')}>显示</button>
                                        <Modal ref={modal => this.modal1 = modal} title={<h2>标题</h2>}>
                                            {content}
                                        </Modal>
                                    </div>}>
{`<div>
    <button className="${NS} button" onClick={this.openModal}>显示</button>
    ...
    <Modal ref={modal => this.modal = modal} title={<h2>标题</h2>}>
        {content}
    </Modal>
</div>

openModal = function(){
    this.modal.open()
}
`}
                </CodeView>
                <br/>
                <br/>
                <h3 className={`${NS} color-red`}>确认或取消按钮，取决于是否有 onConfirm 或者 onCancel 事件</h3>
                <blockquote className={`${NS} blockquote`}>
                    onConfirm 或 onCancel 事件接收boolean返回值判断是否要关闭弹出层
                </blockquote>
                <h4>带确认弹出层</h4>
                <CodeView component={<div>
                                        <button className={`${NS} button`} onClick={this.openModal.bind(this, 'modal2')}>显示</button>
                                        <Modal  ref={modal => this.modal2 = modal}
                                            onConfirm={() => {
                                                alert('confirm')
                                                // 返回值 true 或 false 决定是否关闭
                                                return true
                                            }}>
                                            {content}
                                        </Modal>
                                    </div>}>
{`<div>
    <button className="${NS} button" onClick={this.openModal}>显示</button>
    ...
    <Modal ref={modal => this.modal = modal}
        onConfirm={() => {
            alert('confirm')
            // 返回值 true 或 false 决定是否关闭
            return true
        }}>
        {content}
    </Modal>
</div>

openModal = function(){
    this.modal.open()
}
`}
                </CodeView>
                <br/>

                <h4>带取消弹出层</h4>
                <CodeView component={<div>
                                        <button className={`${NS} button`} onClick={this.openModal.bind(this, 'modal3')}>显示</button>
                                        <Modal  ref={modal => this.modal3 = modal}
                                            onCancel={() => {
                                                alert('cancel')
                                                return true
                                            }}>
                                            {content}
                                        </Modal>
                                    </div>}>
{`<div>
    <button className="${NS} button" onClick={this.openModal}>显示</button>
    ...
    <Modal ref={modal => this.modal = modal}
        onCancel={() => {
            alert('cancel')
            // 返回值 true 或 false 决定是否关闭
            return true
        }}>
        {content}
    </Modal>
</div>

openModal = function(){
    this.modal.open()
}
`}
                </CodeView>
                <br/>


                <h4>确认及取消弹出层</h4>
                <CodeView component={<div>
                                        <button className={`${NS} button`} onClick={this.openModal.bind(this, 'modal4')}>显示</button>
                                        <Modal  ref={modal => this.modal4 = modal}
                                            onCancel={() => {
                                                alert('cancel')
                                                return true
                                            }}
                                            onConfirm={() => {
                                                alert('confirm')
                                                return true
                                            }}>
                                            {content}
                                        </Modal>
                                    </div>}>
{`<div>
    <button className="${NS} button" onClick={this.openModal}>显示</button>
    ...
    <Modal ref={modal => this.modal = modal}
        onConfirm={() => {
            return confirm('confirm')
        }}
        onCancel={() => {
            alert('cancel')
            return true
        }}>
        {content}
    </Modal>
</div>

openModal = function(){
    this.modal.open()
}
`}
                </CodeView>
                <br/>

                <h4>自定义关闭事件</h4>
                <CodeView component={<div>
                                        <button className={`${NS} button`} onClick={this.openModal.bind(this, 'modal5')}>显示</button>
                                        <Modal ref={modal => this.modal5 = modal}
                                            onClose={() => {
                                                return confirm('close')
                                            }}>
                                            {content}
                                        </Modal>
                                    </div>}>
{`<div>
    <button className="${NS} button" onClick={this.openModal}>显示</button>
    ...
    <Modal ref={modal => this.modal = modal}
        onClose={() => {
            // 根据返回值判断是否关闭
            return confirm('confirm')
        }}>
        {content}
    </Modal>
</div>

openModal = function(){
    this.modal.open()
}
`}
                </CodeView>
                <br/>

                <h4>自定义内容触发弹出层关闭</h4>
                <p className={`${NS} info message`}>自定义dom内容，手动触发关闭弹窗事件</p>
                <CodeView component={<div>
                                        <button className={`${NS} button`} onClick={this.openModal.bind(this, 'modal6')}>显示</button>
                                        <Modal ref={modal => this.modal6 = modal}>
                                            {content}
                                            <br/>
                                            <br/>
                                            <br/>
                                            <button className={`${NS} red button`} onClick={() => this.modal6.close()}>点击关闭当前弹窗</button>
                                        </Modal>
                                    </div>}>
{`<div>
    <button className="${NS} button" onClick={this.openModal}>显示</button>
    ...
    <Modal ref={modal => this.modal = modal}>
        ...
        <br/>
        <br/>
        <br/>
        <button className="${NS} red button" onClick={() => this.modal.close()}>点击关闭当前弹窗</button>
    </Modal>
</div>

openModal = function(){
    this.modal.open()
}
`}
                </CodeView>
                <br/>

                <h4>强制确认的弹出层</h4>
                <p className={`${NS} info message`}>点击遮罩将无法关闭弹出层，应用于强制限制用户操作，要求提供 onConfirm 事件或者提供手动触发关闭方式</p>
                <CodeView component={<div>
                                        <button className={`${NS} button`} onClick={this.openModal.bind(this, 'modal7')}>显示</button>
                                        <Modal  ref={modal => this.modal7 = modal} force={true} onConfirm={() => true }>
                                            {content}
                                        </Modal>
                                    </div>}>
{`<div>
    <button className="${NS} button" onClick={this.openModal}>显示</button>
    ...
    <Modal ref={modal => this.modal = modal} force={true} onConfirm={handleConfirm}>
        {content}
    </Modal>
</div>

openModal = function(){
    this.modal.open()
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
                            <td>{'<button className="dot blue button">确认</button>'}</td>
                            <td>否</td>
                        </tr>
                        <tr>
                            <td>cancel</td>
                            <td>取消按钮</td>
                            <td>jsx</td>
                            <td>{'<button className="dot button">取消</button>'}</td>
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
