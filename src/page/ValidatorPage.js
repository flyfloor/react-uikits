import React, { Component } from 'react';
import Hightlight from 'react-highlight'
import ReactDOM from 'react-dom';
import {Link} from "react-router-dom";
import {CN, TitleBlock} from '../util/tools';
import {CodeView} from '../component/CodeView';

import {Form, Group, Field, Fields, Validator, RULE}  from '../component/Form';
import {DropDown} from '../component/DropDown';
import {CheckBox} from '../component/CheckBox';
import {CheckBoxGroup} from '../component/CheckBoxGroup';
import {Radio} from '../component/Radio';
import {RadioGroup} from '../component/RadioGroup';
import {DatePicker} from '../component/DatePicker';
import {TimePicker} from '../component/TimePicker';
import {TimeInput} from '../component/TimeInput';
import {DateTimePicker} from '../component/DateTimePicker';
import {Item} from '../component/Item';
import {PROVINCES, CITIES} from '../constant';

const COUNTRIES = [
    { name: '中国', value: 'cn' },
    { name: '美国', value: 'us' },
    { name: '英国', value: 'uk' },
    { name: '法国', value: 'fr' },
    { name: '德国', value: 'gmy' },
    { name: '韩国', value: 'koa' },
    { name: '澳大利亚', value: 'aus', disabled: true },
    { name: '日本', value: 'jp' },
    { name: '朝鲜', value: 'dprk' },
]

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
    password: [ RULE.required ],
    password_confirm: [ RULE.required ],
    phone: RULE.phone,
    url: RULE.url,
    email: RULE.email,
    gender: [ RULE.required, {
        type: 'enum', enum: ['m', 'f'], message: '性别究竟是？'
    }],
    province: [RULE.required, {
        type: 'enum', enum: ['110000'], message: '只能选择北京!'
    }],
    city: [ RULE.required ],
    create_at: RULE.required,
    update_at: [RULE.required],
    address: [RULE.required, {
        min: 20, max: 200, message: '20-200个字',
    }],
    begin_at: [RULE.required],
    begin_date: [RULE.required],
    end_date: [RULE.required],
    begin_time: [RULE.required, {
        type: 'integer'
    }],
    end_time: [RULE.required, {
        type: 'integer'
    }],
    countries: [RULE.required, {
        type: 'array', min: 3, message: '至少选三个',
    }, {
        type: 'array', max: 6, message: '最多选六个',
    }],
}

export class ValidatorPage extends Component {
    constructor(props) {
        super(props);
        this.handleProvinceChange = this.handleProvinceChange.bind(this)
        this.handleFieldChange = this.handleFieldChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleError = this.handleError.bind(this)
        this.validatePasswordConfirm = this.validatePasswordConfirm.bind(this)
        this.validateEndAt = this.validateEndAt.bind(this)
        this.validateCountries = this.validateCountries.bind(this)
        this.validateBeginNdEndTime = this.validateBeginNdEndTime.bind(this)
        this.state = {
            store: {},
            cities: [],
        }
    }
    handleFieldChange(field, value){
        let {store} = this.state
        store[field] = value
        this.setState({ store });
    }
    handleProvinceChange(pid){
        this.setState({
            cities: CITIES[pid]
        })
    }
    handleSubmit(store){
        console.log('submit ======>', store)
    }
    handleError(errors){
        console.log('errors ======>', errors)
    }
    
    validatePasswordConfirm(){
        const {password, password_confirm} = this.state.store
        return {
            name: 'password_confirm',
            message: '两次输入不一致',
            valid: password === password_confirm,
        }
    }
    
    validateEndAt(){
        const {begin_date, end_date} = this.state.store
        return {
            name: 'end_date',
            message: '开始日期必须小于结束日期',
            valid: new Date(begin_date) < new Date(end_date),
        }
    }

    validateCountries(){
        const {countries} = this.state.store
        if (countries && countries.length > 1) {
            if (countries.indexOf('koa') !== -1) {
                return {
                    name: 'countries',
                    message: '确定韩国？',
                    valid: false
                }
            }
            if (countries.indexOf('dprk') !== -1) {
                return {
                    name: 'countries',
                    message: '确定朝鲜？',
                    valid: false,
                }
            }
        }
        return {
            valid: true,
            name: 'countries'
        }
    }

    validateBeginNdEndTime(){
        const {begin_time, end_time} = this.state.store
        return {
            valid: begin_time < end_time,
            name: 'begin_time',
            message: '开始时间必须小于结束时间',
        }
    }

    render() {
        const {store} = this.state
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

// RULE 为常用规则常量对象，key 包含 required, email, chinese, phone, url

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

                <CodeView component={
                    <Form rules={rules} store={store} 
                        afterFilters={[this.validateEndAt, this.validateBeginNdEndTime, 
                            this.validateCountries, this.validatePasswordConfirm]} 
                        onSubmit={this.handleSubmit} onError={this.handleError} >
                        <Group label="名称:">
                            <Field validate="name">
                                <Validator name="name" trigger="onBlur">
                                    <input type="text" onChange={e => this.handleFieldChange('name', e.target.value)}/>
                                </Validator>
                            </Field>
                        </Group>
                        <Group label="人类:">
                            <Fields size={4}>
                                <Field validate="human">
                                    <label className={CN('checkbox')}>
                                        <Validator name="human" trigger="onChange">
                                            <input type="checkbox" className="original" checked={store.human}
                                                onChange={e => this.handleFieldChange('human', e.target.checked ? 1 : 0 )}/>
                                        </Validator>
                                        <span>是不是人？</span>
                                    </label>
                                </Field>
                                <Field validate="human">
                                    <label className={CN('radio')}>
                                        <Validator name="human" trigger="onChange">
                                            <input name="human_radio" type="radio" checked={store.human} className="original" 
                                                onChange={e => this.handleFieldChange('human', e.target.checked ? 1 : 0 )} />
                                        </Validator>
                                        <span>人</span>
                                    </label>
                                </Field>
                                <Field validate="human">
                                    <label className={CN('radio')}>
                                        <Validator name="human" trigger="onChange">
                                            <input name="human_radio" type="radio" checked={!store.human} className="original" 
                                                onChange={e => this.handleFieldChange('human', e.target.checked ? 0 : 1 )} />
                                        </Validator>
                                        <span>非人</span>
                                    </label>
                                </Field>
                                <Field validate="human">
                                    <Validator name="human" trigger="onChange">
                                        <CheckBox name="name" checked={!store.human} 
                                            onChange={e => this.handleFieldChange('human', e.target.checked ? 0 : 1 )}>
                                            不是人
                                        </CheckBox>
                                    </Validator>
                                </Field>
                            </Fields>
                        </Group>
                        <Group label="国家:">
                            <Field validate="country">
                                <Validator name="country" trigger="onChange">
                                    <RadioGroup
                                        value={store.country} options={COUNTRIES} 
                                        onChange={val => this.handleFieldChange('country', val)}>
                                    </RadioGroup>
                                </Validator>
                            </Field>
                        </Group>

                        <Group>
                            <Fields size={2}>
                                <Field label="昵称:" validate="nickname">
                                    <Validator name="nickname" trigger="onBlur">
                                        <input type="text" value={store.nickname} 
                                            onChange={e => this.handleFieldChange('nickname', e.target.value)}/>
                                    </Validator>
                                </Field>
                            </Fields>
                        </Group>
                        <Group>
                            <Fields size={2}>
                                <Field label="密码:" validate="password">
                                    <div className="dot fluid icon input">
                                        <Validator name="password" trigger="onBlur" after={this.validatePasswordConfirm}>
                                            <input type="password" 
                                                onChange={e => this.handleFieldChange('password', e.target.value) } />
                                        </Validator>
                                        <i className="icon">lock</i>
                                    </div>
                                </Field>
                                <Field label="重复密码:" validate="password_confirm">
                                    <div className="dot fluid icon input">
                                        <Validator name="password_confirm" trigger="onBlur" after={this.validatePasswordConfirm}>
                                            <input type="password" 
                                                onChange={e => this.handleFieldChange('password_confirm', e.target.value) } />
                                        </Validator>
                                        <i className="icon">lock</i>
                                    </div>
                                </Field>
                            </Fields>
                        </Group>
                        
                        <Group>
                            <Fields size={2}>
                                <Field validate="url">
                                    <div className="dot fluid input">
                                        <Validator name="url" trigger="onBlur">
                                            <input type="text" value={store.url} 
                                                onChange={e => this.handleFieldChange('url', e.target.value)}/>
                                        </Validator>
                                        <div className="action">
                                            <button type="button">url</button>
                                        </div>
                                    </div>
                                </Field>
                                <Field validate="email">
                                    <div className="dot round fluid input">
                                        <Validator name="email" trigger="onBlur">
                                            <input type="email" 
                                                onChange={e => this.handleFieldChange('email', e.target.value)} />
                                        </Validator>
                                        <div className="action">
                                            <button type="button">email</button>
                                        </div>
                                    </div>
                                </Field>
                            </Fields>
                        </Group>

                        <Group label="fields-3:">
                            <Fields size={3}>
                                <Field validate="gender">
                                    <Validator name="gender" trigger={['onBlur', 'onChange']}>
                                        <DropDown name="gender" value={store.gender} 
                                            onChange={val => this.handleFieldChange('gender', val)}>
                                            <Item name="male" value="m"></Item>
                                            <Item name="famale" value="f"></Item>
                                        </DropDown>
                                    </Validator>
                                </Field>
                                <Field validate="province">
                                    <Validator name="province" trigger={['onBlur', 'onChange']}>
                                        <DropDown searchable={true} name="provinceId" defaultSelected={true}
                                            placeHolder="搜索省份或编号" options={PROVINCES}
                                            labelName="name" valueName="id" onChange={val => {
                                                this.handleFieldChange('province', val)
                                                this.handleProvinceChange(val)
                                            }}>
                                        </DropDown>
                                    </Validator>
                                </Field>
                                <Field validate="city">
                                    <Validator name="city" trigger={['onBlur', 'onChange']}>
                                        <DropDown options={this.state.cities} defaultSelected
                                            onChange={val => this.handleFieldChange('city', val)} 
                                            valueName="id" name="cityId">
                                        </DropDown>
                                    </Validator>
                                </Field>
                            </Fields>
                        </Group>
                        <Group label="fields:">
                            <Fields>
                                <Field validate="country" size={3} label="f-3">
                                    <Validator name="country" trigger="onChange">
                                        <DropDown options={COUNTRIES}
                                            value={store.country}
                                            onChange={val => this.handleFieldChange('country', val)}>
                                        </DropDown>
                                    </Validator>
                                </Field>
                                <Field size={6} label="f-6:" validate="create_at">
                                    <Validator name="create_at" trigger="onBlur">
                                        <input type="date" 
                                            onChange={e => this.handleFieldChange('create_at', e.target.value)}/>
                                    </Validator>
                                </Field>
                                <Field size={1} className="text-center" label="f-1:">
                                    to
                                </Field>
                                <Field size={6} label="f-6:" validate="update_at">
                                    <Validator name="update_at" trigger="onChange">
                                        <DatePicker onChange={val => this.handleFieldChange('update_at', val)}/>
                                    </Validator>
                                </Field>
                            </Fields>
                            <Field type="inline" label="range:" validate="end_date">
                                <Validator name="begin_date" trigger="onChange">
                                    <DatePicker onChange={val => this.handleFieldChange('begin_date', val)}/>
                                </Validator>
                                <span>to</span>
                                <Validator name="end_date" trigger="onChange" after={this.validateEndAt}>
                                    <DatePicker onChange={val => this.handleFieldChange('end_date', val)}/>
                                </Validator>
                            </Field>
                        </Group>
                        <Group label="address:">
                            <Field validate="address">
                                <Validator name="address" trigger={['onChange', 'onBlur']}>
                                    <textarea onChange={e => this.handleFieldChange('address', e.target.value)}>
                                    </textarea>
                                </Validator>
                            </Field>
                        </Group>
                        <Group label="countries:">
                            <Field validate="countries">
                                <Validator name="countries" trigger="onChange" after={this.validateCountries}>
                                    <DropDown multi={true} value={store.countries} options={COUNTRIES}
                                        onChange={val => this.handleFieldChange('countries', val)}>
                                    </DropDown>
                                </Validator>
                            </Field>
                        </Group>
                        
                        <Group label="countries">
                            <Field validate="countries">
                                <Validator name="countries" trigger="onChange" after={this.validateCountries}>
                                    <CheckBoxGroup value={store.countries} options={COUNTRIES}
                                        onChange={val => this.handleFieldChange('countries', val)}/>
                                </Validator>
                            </Field>
                        </Group>

                        <Group label="fields-3 time:">
                            <Fields size={3}>
                                <Field validate="begin_at">
                                    <Validator name="begin_at" trigger="onChange">
                                        <DateTimePicker value={store.begin_at}
                                            onChange={val => this.handleFieldChange('begin_at', val)}/>
                                    </Validator>
                                </Field>
                                <Field validate="begin_time">
                                    <Validator name="begin_time" trigger="onChange" after={this.validateBeginNdEndTime}>
                                        <TimePicker value={store.begin_time} 
                                        onChange={val => this.handleFieldChange('begin_time', val)}/>
                                    </Validator>
                                </Field>
                                <Field validate="end_time">
                                    <Validator name="end_time" trigger="onChange" after={this.validateBeginNdEndTime}>
                                        <TimeInput value={store.end_time} 
                                        onChange={val => this.handleFieldChange('end_time', val)}/>
                                    </Validator>
                                </Field>
                            </Fields>
                        </Group>
                        
                        <Group type="action">
                            <button className={'button'}>submit</button>
                        </Group>
                    </Form>
                }>
{`

constructor(props) {
    super(props);
    this.handleProvinceChange = this.handleProvinceChange.bind(this)
    this.handleFieldChange = this.handleFieldChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleError = this.handleError.bind(this)
    this.validatePasswordConfirm = this.validatePasswordConfirm.bind(this)
    this.validateEndAt = this.validateEndAt.bind(this)
    this.validateCountries = this.validateCountries.bind(this)
    this.validateBeginNdEndTime = this.validateBeginNdEndTime.bind(this)
    this.state = {
        store: {},
        cities: [],
    }
}
handleFieldChange(field, value){
    let {store} = this.state
    store[field] = value
    this.setState({ store });
}
handleProvinceChange(pid){
    this.setState({
        cities: CITIES[pid]
    })
}
handleSubmit(store){
    console.log('submit ======>', store)
}
handleError(errors){
    console.log('errors ======>', errors)
}

validatePasswordConfirm(){
    const {password, password_confirm} = this.state.store
    return {
        name: 'password_confirm',
        message: '两次输入不一致',
        valid: password === password_confirm,
    }
}

validateEndAt(){
    const {begin_date, end_date} = this.state.store
    return {
        name: 'end_date',
        message: '开始日期必须小于结束日期',
        valid: new Date(begin_date) < new Date(end_date),
    }
}

validateCountries(){
    const {countries} = this.state.store
    if (countries && countries.length > 1) {
        if (countries.indexOf('koa') !== -1) {
            return {
                name: 'countries',
                message: '确定韩国？',
                valid: false
            }
        }
        if (countries.indexOf('dprk') !== -1) {
            return {
                name: 'countries',
                message: '确定朝鲜？',
                valid: false,
            }
        }
    }
    return {
        valid: true,
        name: 'countries'
    }
}

validateBeginNdEndTime(){
    const {begin_time, end_time} = this.state.store
    return {
        valid: begin_time < end_time,
        name: 'begin_time',
        message: '开始时间必须小于结束时间',
    }
}

<Form rules={rules} store={store} 
    afterFilters={[this.validateEndAt, this.validateBeginNdEndTime, 
        this.validateCountries, this.validatePasswordConfirm]} 
    onSubmit={this.handleSubmit} onError={this.handleError} >
    <Group label="名称:">
        <Field validate="name">
            <Validator name="name" trigger="onBlur">
                <input type="text" onChange={e => this.handleFieldChange('name', e.target.value)}/>
            </Validator>
        </Field>
    </Group>
    <Group label="人类:">
        <Fields size={4}>
            <Field validate="human">
                <label className={CN('checkbox')}>
                    <Validator name="human" trigger="onChange">
                        <input type="checkbox" className="original" checked={store.human}
                            onChange={e => this.handleFieldChange('human', e.target.checked ? 1 : 0 )}/>
                    </Validator>
                    <span>是不是人？</span>
                </label>
            </Field>
            <Field validate="human">
                <label className={CN('radio')}>
                    <Validator name="human" trigger="onChange">
                        <input name="human_radio" type="radio" checked={store.human} className="original" 
                            onChange={e => this.handleFieldChange('human', e.target.checked ? 1 : 0 )} />
                    </Validator>
                    <span>人</span>
                </label>
            </Field>
            <Field validate="human">
                <label className={CN('radio')}>
                    <Validator name="human" trigger="onChange">
                        <input name="human_radio" type="radio" checked={!store.human} className="original" 
                            onChange={e => this.handleFieldChange('human', e.target.checked ? 0 : 1 )} />
                    </Validator>
                    <span>非人</span>
                </label>
            </Field>
            <Field validate="human">
                <Validator name="human" trigger="onChange">
                    <CheckBox name="name" checked={!store.human} 
                        onChange={e => this.handleFieldChange('human', e.target.checked ? 0 : 1 )}>
                        不是人
                    </CheckBox>
                </Validator>
            </Field>
        </Fields>
    </Group>
    <Group label="国家:">
        <Field validate="country">
            <Validator name="country" trigger="onChange">
                <RadioGroup
                    value={store.country} options={COUNTRIES} 
                    onChange={val => this.handleFieldChange('country', val)}>
                </RadioGroup>
            </Validator>
        </Field>
    </Group>

    <Group>
        <Fields size={2}>
            <Field label="昵称:" validate="nickname">
                <Validator name="nickname" trigger="onBlur">
                    <input type="text" value={store.nickname} 
                        onChange={e => this.handleFieldChange('nickname', e.target.value)}/>
                </Validator>
            </Field>
        </Fields>
    </Group>
    <Group>
        <Fields size={2}>
            <Field label="密码:" validate="password">
                <div className="dot fluid icon input">
                    <Validator name="password" trigger="onBlur" after={this.validatePasswordConfirm}>
                        <input type="password" 
                            onChange={e => this.handleFieldChange('password', e.target.value) } />
                    </Validator>
                    <i className="icon">lock</i>
                </div>
            </Field>
            <Field label="重复密码:" validate="password_confirm">
                <div className="dot fluid icon input">
                    <Validator name="password_confirm" trigger="onBlur" after={this.validatePasswordConfirm}>
                        <input type="password" 
                            onChange={e => this.handleFieldChange('password_confirm', e.target.value) } />
                    </Validator>
                    <i className="icon">lock</i>
                </div>
            </Field>
        </Fields>
    </Group>
    
    <Group>
        <Fields size={2}>
            <Field validate="url">
                <div className="dot fluid input">
                    <Validator name="url" trigger="onBlur">
                        <input type="text" value={store.url} 
                            onChange={e => this.handleFieldChange('url', e.target.value)}/>
                    </Validator>
                    <div className="action">
                        <button type="button">url</button>
                    </div>
                </div>
            </Field>
            <Field validate="email">
                <div className="dot round fluid input">
                    <Validator name="email" trigger="onBlur">
                        <input type="email" 
                            onChange={e => this.handleFieldChange('email', e.target.value)} />
                    </Validator>
                    <div className="action">
                        <button type="button">email</button>
                    </div>
                </div>
            </Field>
        </Fields>
    </Group>

    <Group label="fields-3:">
        <Fields size={3}>
            <Field validate="gender">
                <Validator name="gender" trigger={['onBlur', 'onChange']}>
                    <DropDown name="gender" value={store.gender} 
                        onChange={val => this.handleFieldChange('gender', val)}>
                        <Item name="male" value="m"></Item>
                        <Item name="famale" value="f"></Item>
                    </DropDown>
                </Validator>
            </Field>
            <Field validate="province">
                <Validator name="province" trigger={['onBlur', 'onChange']}>
                    <DropDown searchable={true} name="provinceId" defaultSelected={true}
                        placeHolder="搜索省份或编号" options={PROVINCES}
                        labelName="name" valueName="id" onChange={val => {
                            this.handleFieldChange('province', val)
                            this.handleProvinceChange(val)
                        }}>
                    </DropDown>
                </Validator>
            </Field>
            <Field validate="city">
                <Validator name="city" trigger={['onBlur', 'onChange']}>
                    <DropDown options={this.state.cities} defaultSelected
                        onChange={val => this.handleFieldChange('city', val)} 
                        valueName="id" name="cityId">
                    </DropDown>
                </Validator>
            </Field>
        </Fields>
    </Group>
    <Group label="fields:">
        <Fields>
            <Field validate="country" size={3} label="f-3">
                <Validator name="country" trigger="onChange">
                    <DropDown options={COUNTRIES}
                        value={store.country}
                        onChange={val => this.handleFieldChange('country', val)}>
                    </DropDown>
                </Validator>
            </Field>
            <Field size={6} label="f-6:" validate="create_at">
                <Validator name="create_at" trigger="onBlur">
                    <input type="date" 
                        onChange={e => this.handleFieldChange('create_at', e.target.value)}/>
                </Validator>
            </Field>
            <Field size={1} className="text-center" label="f-1:">
                to
            </Field>
            <Field size={6} label="f-6:" validate="update_at">
                <Validator name="update_at" trigger="onChange">
                    <DatePicker onChange={val => this.handleFieldChange('update_at', val)}/>
                </Validator>
            </Field>
        </Fields>
        <Field type="inline" label="range:" validate="end_date">
            <Validator name="begin_date" trigger="onChange">
                <DatePicker onChange={val => this.handleFieldChange('begin_date', val)}/>
            </Validator>
            <span>to</span>
            <Validator name="end_date" trigger="onChange" after={this.validateEndAt}>
                <DatePicker onChange={val => this.handleFieldChange('end_date', val)}/>
            </Validator>
        </Field>
    </Group>
    <Group label="address:">
        <Field validate="address">
            <Validator name="address" trigger={['onChange', 'onBlur']}>
                <textarea onChange={e => this.handleFieldChange('address', e.target.value)}>
                </textarea>
            </Validator>
        </Field>
    </Group>
    <Group label="countries:">
        <Field validate="countries">
            <Validator name="countries" trigger="onChange" after={this.validateCountries}>
                <DropDown multi={true} value={store.countries} options={COUNTRIES}
                    onChange={val => this.handleFieldChange('countries', val)}>
                </DropDown>
            </Validator>
        </Field>
    </Group>
    
    <Group label="countries">
        <Field validate="countries">
            <Validator name="countries" trigger="onChange" after={this.validateCountries}>
                <CheckBoxGroup value={store.countries} options={COUNTRIES}
                    onChange={val => this.handleFieldChange('countries', val)}/>
            </Validator>
        </Field>
    </Group>

    <Group label="fields-3 time:">
        <Fields size={3}>
            <Field validate="begin_at">
                <Validator name="begin_at" trigger="onChange">
                    <DateTimePicker value={store.begin_at}
                        onChange={val => this.handleFieldChange('begin_at', val)}/>
                </Validator>
            </Field>
            <Field validate="begin_time">
                <Validator name="begin_time" trigger="onChange" after={this.validateBeginNdEndTime}>
                    <TimePicker value={store.begin_time} 
                    onChange={val => this.handleFieldChange('begin_time', val)}/>
                </Validator>
            </Field>
            <Field validate="end_time">
                <Validator name="end_time" trigger="onChange" after={this.validateBeginNdEndTime}>
                    <TimeInput value={store.end_time} 
                    onChange={val => this.handleFieldChange('end_time', val)}/>
                </Validator>
            </Field>
        </Fields>
    </Group>
    
    <Group type="action">
        <button className={'button'}>submit</button>
    </Group>
</Form>
`}                    
                </CodeView>
                
                <div className={CN('module')}>
                    <br/>
                    <h3 className="text-center">
                        <span>具体属性，见 Form 组件最底部：</span>
                        <Link to="/component/form" className="color-red">Form</Link>
                    </h3>
                    <br/>
                </div>
            </section>
        );
    }
}
