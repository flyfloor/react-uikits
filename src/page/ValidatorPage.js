import React, { Component } from 'react';
import Hightlight from 'react-highlight'
import {Link} from "react-router-dom";
import {CN, TitleBlock} from '../util/tools';
import ValidatorDemo from './ValidatorDemo';

export class ValidatorPage extends Component {
    render() {
        return (
            <section>
                {TitleBlock('validator')}
                <h4>Form 组件指定 store 及 rules 属性, 通过 validator 使用 rules 规则来对 store 数据进行校验 </h4>
                <div className={CN('message')}>
<Hightlight>
{`<Form store={this.state.store} rules={rules} 
    onSubmit={this.handleSubmit} onError={this.handleError}>
...
</Form>`}
</Hightlight>
                </div>
                <div className={CN('message')}>
                    <h4>
                        <span>规则的使用具体可参照 </span> 
                        <b><a href="https://github.com/yiminghe/async-validator" target="_blank" className="color-red">async-validator</a></b>
                    </h4>
                    <br/>
                    <p>规则 rules 为 POJO, key 为 校验字段，value 通常为数组或单个对象，为使用规则，例如：</p>
<Hightlight>
{`import {RULE} from 'react-uikits';

// RULE 为常用规则常量对象，key 包含 required, textRequired, email, chinese, phone, word, url, int, passtiveInt, passtiveNumber

/*
{
    required, // 必填格式，允许输入空格
    textRequired, // 必填格式，输入文字时使用，不允许输入空格
    email, // 邮箱格式
    chinese, // 中文
    phone, // 手机号
    word, // 英文字符
    url, // 链接
    int, // 整形
    passtiveInt, // 正整数
    passtiveNumber, // 正数
}
*/


const rules = {
    name: [ RULE.required, {
        min: 3, max: 12, message: '名字长度3至12字'
    }],
    human: {
        type: 'pattern', required: true, pattern: /1/, message: '是不是人？'
    },
    country: [ RULE.required, {
        type: 'enum', enum: ['cn', 'us', 'uk', 'fr', 'gmy', 'jp'], message: '确定韩国？'
    }],
    nickname: [ RULE.chinese, {
        min: 3, max: 12, message: '名字长度3至12字'
    }],
    city: [ RULE.required ],
    create_at: RULE.required,
    update_at: [RULE.required],
    address: [RULE.required, {
        min: 20, max: 200, message: '20-200个字',
    }],
    countries: [RULE.required, {
        type: 'array', min: 3, message: '至少选三个',
    }, {
        type: 'array', max: 6, message: '最多选六个',
    }],
    "users.0.name": [ RULE.textRequired, {
        min: 3, max: 12, message: '名字长度3至12字'
    }],
    "users.0.age": {
        type: 'number', min: 3, max: 12, message: '3-12 岁'
    },
    "users.1.name": [ RULE.textRequired, {
        min: 5, max: 12, message: '名字长度5至12字'
    }],
    "users.1.age": {
        type: 'number', min: 3, max: 23, message: '3-12 岁'
    },
}
`}
</Hightlight>
                    <p>onSubmit 会在校验成功后触发，onError 则是校验失败触发</p>                    
                </div>
                <div className={CN('message')}>
                    <h4>首先，Validator 属于表单组件</h4>
                    <p>1. 通过指定表单特定 Field 的 validate 属性，从而做到校验内容回显，例如:</p>
<Hightlight>
{`<Group>
    <Field validate="nickname">
        <input type="text" />
    </Field>
</Group>`}
</Hightlight>
                    <p>如果有错误，则会在上方 input 下显示</p>
                </div>
                <div className={CN('message')}>
                    <h4>2. 引入 Validator 组件，该组件不会破坏 DOM 结构，用来做指定组件事件触发校验，例如：</h4>
<Hightlight>
{`<Group>
    <Field validate="nickname">
        <Validator name="nickname" trigger="onBlur">
            <input type="text" value={this.state.store.nickname} 
            onChange={e => this.updateField('nickname', e.target.value)} />
        </Validator>
    </Field>
</Group>`}
</Hightlight>                     
                    <p>这样当input onBlur 触发时，则会触发校验</p>
                </div>
                <div className={CN('message')}>
                    <h4>3. 如果需要自定义校验，则可以指定 Validator 的 after 属性</h4>
<Hightlight>
{`<Group>
    <Field validate="nickname">
        <Validator name="nickname" trigger="onBlur" after={this.validateNickname}>
            <input type="text" value={this.state.store.nickname} 
            onChange={e => this.updateField('nickname', e.target.value)} />
        </Validator>
    </Field>
</Group>

// 注意事件需要.bind(this)

/*
校验函数返回值为对象
return { 
    valid, // 是否校验通过
    name, // 校验错误后回显字段
    message, // 错误信息, 如果 valid 为 true, 则 message 不显示，可不填
} 
*/
validateNickname(){
    let {nickname} = this.state.store
    return {
        valid: !!nickname,
        message: '昵称不能为空',
        name: 'nickname',
    }
}
`}
</Hightlight>       
                </div>
                <div className={CN('message')}>
                    <h4>4. 此时还需要在 Form 组件增加 afterFilters 属性，将所有自定义校验注册</h4>
<Hightlight>
{`<Form afterFilters={[this.validateNickname]}></Form>

//需注意.bind(this)
`}
</Hightlight>                          
                </div>
                <h3>Demo:</h3>
                <ValidatorDemo/>
                <h4>
                    <span>Demo 代码: </span> 
                    <a href="https://github.com/jerryshew/react-uikits/blob/master/src/page/ValidatorDemo.js" 
                        className="color-red" target="_blank">
                        page/ValidatorDemo.js
                    </a>, 
                    <span> Validator 属性，见 Form 组件最底部 </span>
                    <Link to="/component/form" className="color-red">Form</Link>
                </h4>
                <br/>
            </section>
        );
    }
}


