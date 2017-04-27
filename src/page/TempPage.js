import React, { Component } from 'react';
import {CN, TitleBlock} from '../util/tools';
import ReactDOM from 'react-dom';
import {Form, Group, Field, Fields, Validator, RULE}  from '../component/Form';
import {DropDown} from '../component/DropDown';
import {CheckBox} from '../component/CheckBox';
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
    { name: '日本', value: 'jp' },
]

const rules = {
    name: [ RULE.required, {
        min: 3, max: 12, message: '名字长度3至12字'
    }],
    human: {
        type: 'pattern', required: true, pattern: /1/, message: '是不是人？'
    },
    contry: [ RULE.required, {
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
    gender: {
        type: 'string', required: true, message: '请选择性别'
    }
}

export class TempPage extends Component {
    constructor(props) {
        super(props);
        this.handleProvinceChange = this.handleProvinceChange.bind(this)
        this.handleFieldChange = this.handleFieldChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleError = this.handleError.bind(this)
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
        console.log(store)
    }
    handleError(errors){
        console.log(errors, 'errors')
    }
    render() {
        const {store} = this.state
        return (
            <Form rules={rules} store={store} onSubmit={this.handleSubmit} onError={this.handleError} >
                <Group label="名称:">
                    <Field validate="name">
                        <Validator name="name" on="onBlur">
                            <input type="text" onChange={e => this.handleFieldChange('name', e.target.value)}/>
                        </Validator>
                    </Field>
                </Group>
                <Group label="人类:">
                    <Fields size={4}>
                        <Field validate="human">
                            <label className={CN('checkbox')}>
                                <Validator name="human" on="onChange">
                                    <input type="checkbox" className="original" checked={store.human}
                                        onChange={e => this.handleFieldChange('human', e.target.checked ? 1 : 0 )}/>
                                </Validator>
                                <span>是不是人？</span>
                            </label>
                        </Field>
                        <Field validate="human">
                            <label className={CN('radio')}>
                                <Validator name="human" on="onChange">
                                    <input name="human_radio" type="radio" checked={store.human} className="original" 
                                        onChange={e => this.handleFieldChange('human', e.target.checked ? 1 : 0 )} />
                                </Validator>
                                <span>人</span>
                            </label>
                        </Field>
                        <Field validate="human">
                            <label className={CN('radio')}>
                                <Validator name="human" on="onChange">
                                    <input name="human_radio" type="radio" checked={!store.human} className="original" 
                                        onChange={e => this.handleFieldChange('human', e.target.checked ? 0 : 1 )} />
                                </Validator>
                                <span>非人</span>
                            </label>
                        </Field>
                        <Field validate="human">
                            <Validator name="human" on="onChange">
                                <CheckBox name="name" checked={!store.human} 
                                    onChange={e => this.handleFieldChange('human', e.target.checked ? 0 : 1 )}>
                                    不是人
                                </CheckBox>
                            </Validator>
                        </Field>
                    </Fields>
                </Group>
                <Group label="国家:">
                    <Field validate="contry">
                        <Validator name="contry" on="onChange">
                            <RadioGroup value={store.contry} options={COUNTRIES} 
                                onChange={val => this.handleFieldChange('contry', val)}>
                            </RadioGroup>
                        </Validator>
                    </Field>
                </Group>
                
                <Group>
                    <Fields size={2}>
                        <Field label="昵称:" validate="nickname">
                            <Validator name="nickname" on="onBlur">
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
                                <Validator name="password" on="onBlur">
                                    <input type="password" 
                                        onChange={e => this.handleFieldChange('password', e.target.value) } />
                                </Validator>
                                <i className="icon">lock</i>
                            </div>
                        </Field>
                        <Field label="重复密码:" validate="password_confirm">
                            <div className="dot fluid icon input">
                                <Validator name="password_confirm" on="onBlur">
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
                                <Validator name="url" on="onBlur">
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
                                <Validator name="email" on="onBlur">
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
                        <Field>
                            <DropDown name="sex" onChange={val => console.log(val)}>
                                <Item name="male" value="m"></Item>
                                <Item name="famale" value="f"></Item>
                            </DropDown>
                        </Field>
                        <Field>
                            <DropDown searchable={true} name="provinceId" defaultSelected={true}
                                placeHolder="搜索省份或编号" options={PROVINCES}
                                labelName="name" valueName="id" onChange={this.handleProvinceChange}>
                            </DropDown>
                        </Field>
                        <Field>
                            <DropDown options={this.state.cities}
                                onChange={val => console.log(val)} valueName="id" name="cityId">
                            </DropDown>
                        </Field>
                    </Fields>
                </Group>
                <Group label="fields:">
                    <Fields>
                        <Field size={3} label="f-3">
                            <DropDown name="国家" onChange={val => console.log(val)}>
                                <Item name="中国" value="china"></Item>
                                <Item name="美国" value="america"></Item>
                                <Item name="英国" value="england"></Item>
                                <Item name="法国" value="france"></Item>
                                <Item name="德国" value="germany"></Item>
                                <Item name="日本" value="japan"></Item>
                            </DropDown>
                        </Field>
                        <Field size={6} label="f-6:">
                            <input type="date"/>
                        </Field>
                        <Field size={1} className="text-center" label="f-1:">
                            to
                        </Field>
                        <Field size={6} label="f-6:">
                            <DatePicker onChange={val => console.log(val)}/>
                        </Field>
                    </Fields>
                    <Field type="inline" label="inline:">
                        <select name="" id="">
                            <option value="a">ember</option>
                            <option value="b">react</option>
                            <option value="c">angular</option>
                        </select>
                        <input type="url"/>
                        <span>to</span>
                        <div className="dot icon input">
                            <input type="url"/>
                            <i className="icon">security</i>
                        </div>
                    </Field>
                </Group>
                <Group label="address:">
                    <div className="field">
                        <textarea></textarea>
                    </div>
                </Group>
                <Group label="contry:">
                    <Field>
                        <DropDown multi={true} name="国家" onChange={val => console.log(val)}>
                            <Item name="中国" value="china"></Item>
                            <Item name="美国" value="america"></Item>
                            <Item name="英国" value="england"></Item>
                            <Item name="法国" value="france"></Item>
                            <Item name="德国" value="germany"></Item>
                            <Item name="澳大利亚" value="australia"></Item>
                            <Item name="日本" value="japan"></Item>
                            <Item name="韩国" value="korea"></Item>
                        </DropDown>
                    </Field>
                </Group>
                <Group label="fields-3 time:">
                    <Fields size={3}>
                        <Field>
                            <DateTimePicker onChange={val => console.log(val)}/>
                        </Field>
                        <Field>
                            <TimePicker onChange={val => console.log(val)}/>
                        </Field>
                        <Field>
                            <TimeInput onChange={val => console.log(val)}/>
                        </Field>
                    </Fields>
                </Group>
                <Group label="inline time:">
                    <Field type="inline">
                        <DateTimePicker onChange={val => console.log(val)}/>
                        <TimePicker onChange={val => console.log(val)}/>
                        <TimeInput onChange={val => console.log(val)}/>
                    </Field>
                </Group>
                
                <Group type="action">
                    <button className={'button'}>submit</button>
                </Group>
            </Form>
        );
    }
}
