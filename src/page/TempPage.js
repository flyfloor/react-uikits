import React, { Component } from 'react';
import {CN, TitleBlock} from '../util/tools';
import ReactDOM from 'react-dom';
import {Form, Group, Field, Fields, Validator}  from '../component/Form';
import {DropDown} from '../component/DropDown';
import {CheckBox} from '../component/CheckBox';
import {Radio} from '../component/Radio';
import {DatePicker} from '../component/DatePicker';
import {TimePicker} from '../component/TimePicker';
import {TimeInput} from '../component/TimeInput';
import {DateTimePicker} from '../component/DateTimePicker';
import {Item} from '../component/Item';
import {PROVINCES, CITIES} from '../constant';

const rules = {
    name: [{
        type: "string", required: true, message: '请输入名字'
    }, {
        min: 3, max: 12, message: '名字长度3至12字'
    }],
    agree: {
        type: 'pattern', required: true, pattern: /1/, message: '请同意'
    },
    chinese: {
        type: 'pattern', required: true, pattern: /1/, message: '是不是中国人?'
    },
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
        console.log(field, value)
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
            <Form rules={rules} store={this.state.store} onSubmit={this.handleSubmit} onError={this.handleError} >
                <Group label="name:">
                    <Field validate="name">
                        <Validator name="name" on="onBlur">
                            <input type="text" onChange={e => this.handleFieldChange('name', e.target.value)}/>
                        </Validator>
                    </Field>
                </Group>
                <Group label="fields-4:">
                    <Fields size={4}>
                        <Field validate="name">
                            <label className={CN('checkbox')}>
                                <input type="checkbox" className="original"/>
                                <span>checkbox</span>
                            </label>
                        </Field>
                        <Field>
                            <label className={CN('radio')}>
                                <input type="radio" className="original"/>
                                <span>radio</span>
                            </label>
                        </Field>
                        <Field>
                            <CheckBox name="name">checkbox</CheckBox>
                        </Field>
                        <Field>
                            <Radio value={true}>radio</Radio>
                        </Field>
                    </Fields>
                </Group>
                <Group label="inline field:">
                    <Field type="inline">
                        <label className={CN('checkbox')}>
                            <input type="checkbox" className="original"/>
                            <span>checkbox</span>
                        </label>
                        <label className={CN('radio')}>
                            <input type="radio" className="original"/>
                            <span>radio</span>
                        </label>
                        <CheckBox name="name">checkbox</CheckBox>
                        <Radio value={true}>radio</Radio>
                        <div className="dot icon input">
                            <input type="text"/>
                            <i className="icon">email</i>
                        </div>
                    </Field>
                </Group>
                <Group label="fields-2:">
                    <Fields size={2}>
                        <Field label="nickname:">
                            <input type="text"/>
                        </Field>
                        <Field label="password:">
                            <div className="dot fluid icon input">
                                <input type="password"/>
                                <i className="icon">lock</i>
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
                <Group label="search:">
                    <Fields size={2}>
                        <Field>
                            <div className="dot fluid input">
                                <input type="text"/>
                                <div className="action">
                                    <button>Go</button>
                                </div>
                            </div>
                        </Field>
                        <Field>
                            <div className="dot round fluid input">
                                <input type="email"/>
                                <div className="action">
                                    <button>email</button>
                                </div>
                            </div>
                        </Field>
                    </Fields>
                </Group>
                <Group type="action">
                    <button className={'button'}>submit</button>
                </Group>
            </Form>
        );
    }
}
