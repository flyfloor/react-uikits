import React, { Component } from 'react';
import {CN, TitleBlock, formatDate} from '../util/tools';
import {NS} from '../constant';
import {Form, Fields, Field, Group} from '../component/Form';
import {DropDown} from '../component/DropDown';
import {CheckBox} from '../component/CheckBox';
import {Radio} from '../component/Radio';
import {DatePicker} from '../component/DatePicker';
import {TimePicker} from '../component/TimePicker';
import {TimeInput} from '../component/TimeInput';
import {DateTimePicker} from '../component/DateTimePicker';
import {Item} from '../component/Item';
import {CodeView} from '../component/CodeView';
import {PROVINCES, CITIES} from '../constant';

class FormDemo extends Component {
    getInitialState() {
        return {
            cities: [],
        }
    }
    handleProvinceChange(pid){
        this.setState({
            cities: CITIES[pid]
        })
    }
    handleSubmit(e){
        e.preventDefault()
        alert('submit form')
    }
    render() {
        return (
            <Form {...this.props} onSubmit={this.handleSubmit}>
                <Group label="name:">
                    <Field>
                        <input type="text"/>
                    </Field>
                </Group>
                <Group label="fields-4:">
                    <Fields size={4}>
                        <Field>
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
                            <DropDown searchable={true} name="provinceId" 
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
                <Group label="button group:">
                    <Field>
                        <div className="dot button-group">
                            <input type="button" className="yellow button" value="button"/>
                            <div className="dot labeled green button">
                                <i className="icon">photo</i>
                            </div>
                            <div className="dot icon blue button">
                                <i className="icon">phone</i>
                                button
                            </div>
                        </div>
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


const FormDemo = React.createClass({
    
});


export class FormPage extends Component {
    render() {
        return (
            <section>
                {TitleBlock('表单')}

                <div className={CN('info message')}>
                    <p>1. 一共有三个维度：Group, Fields, Field</p>
                    <p>2. Group 为表格行</p>
                    <p>3. Fields 与 Field 为列</p>
                    <p>4. Fields size 来控制平分等宽列(最多分为16份), 搭配 Field 使用，例如：Fields-5 > Field</p>
                    <p>5. Fields 搭配 Field size (最多分为16份) 自定义不同宽度列，例如：Fields > Field-3 + Field-6 + Field-10 + Field-3</p>
                </div>

                <ul>
                    <li>
                        <h4>默认表单</h4>
                        <CodeView component={
                            <FormDemo/>
                        }>
{`<Form>
    <Group label="name:">
        <Field>
            <input type="text"/>
        </Field>
    </Group>
    <Group label="fields-4:">
        <Fields size={4}>
            <Field>
                <label className="${CN('checkbox')}">
                    <input type="checkbox" className="original"/>
                    <span>checkbox</span>
                </label>
            </Field>
            <Field>
                <label className="${CN('radio')}">
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
            <label className="${CN('checkbox')}">
                <input type="checkbox" className="original"/>
                <span>checkbox</span>
            </label>
            <label className="${CN('radio')}">
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
                <DropDown searchable={true} name="provinceId" 
                    placeHolder="搜索省份或编号" options={PROVINCES}
                    labelName="name" valueName="id" onChange={this.handleProvinceChange.bind(this)}>
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
    <Group label="button group:">
        <Field>
            <div className="dot button-group">
                <input type="button" className="yellow button" value="button"/>
                <div className="dot labeled green button">
                    <i className="icon">photo</i>
                </div>
                <div className="dot icon blue button">
                    <i className="icon">phone</i>
                    button
                </div>
            </div>
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
</Form>`}                        
                        </CodeView>
                        <br/>
                    </li>

                    <li>
                        <h4>内联标签表单</h4>
                        <CodeView component={<FormDemo type="inline"/>}>
{`<Form type="inline">
    ...
</Form>`}                            
                        </CodeView>
                        <br/>
                    </li>

                    <li>
                        <h4>标签靠右对齐表单</h4>
                        <CodeView component={<FormDemo type="trim"/>}>
{`<Form type="trim">
    ...
</Form>`}                            
                        </CodeView>
                        <br/>
                    </li>
                </ul>

                <h4>Form 属性</h4>
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
                            <td>type</td>
                            <td>表单类型，控制表单行标签样式</td>
                            <td>["inline", "trim", ""]</td>
                            <td>无</td>
                            <td>否</td>
                        </tr>
                        <tr>
                            <td>onSubmit</td>
                            <td>表单提交事件</td>
                            <td>函数</td>
                            <td>无</td>
                            <td>否</td>
                        </tr>
                    </tbody>
                </table>
                <br/>

                <h4>Group 属性</h4>
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
                            <td>label</td>
                            <td>行标签</td>
                            <td>字符串</td>
                            <td>无</td>
                            <td>否</td>
                        </tr>
                    </tbody>
                </table>
                <br/>

                <h4>Fields 属性</h4>
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
                            <td>size</td>
                            <td>列数</td>
                            <td>1-16</td>
                            <td>无</td>
                            <td>否</td>
                        </tr>
                    </tbody>
                </table>
                <br/>

                <h4>Field 属性</h4>
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
                            <td>size</td>
                            <td>列占比(x/16)</td>
                            <td>1-16</td>
                            <td>无</td>
                            <td>否</td>
                        </tr>
                        <tr>
                            <td>type</td>
                            <td>列类型，例如内联列</td>
                            <td>["inline", ""]</td>
                            <td>无</td>
                            <td>否</td>
                        </tr>
                        <tr>
                            <td>label</td>
                            <td>列标签</td>
                            <td>字符串</td>
                            <td>无</td>
                            <td>否</td>
                        </tr>
                    </tbody>
                </table>
                
            </section>
        );
    }
}
