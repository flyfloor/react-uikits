import React, { Component } from 'react';
import {CN, TitleBlock, formatDate} from '../util/tools';
import {NS} from '../constant';
import {Form, Fields, Field, Group} from '../component/Form';
import {DropDown} from '../component/DropDown';
import {CheckBox} from '../component/CheckBox';
import {Radio} from '../component/Radio';
import {Item} from '../component/Item';
import {CodeView} from '../component/CodeView';
import {PROVINCES, CITIES} from '../constant';

export class FormPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cities: [],
        }
    }
    handleProvinceChange(pid){
        this.setState({
            cities: CITIES[pid]
        });
    }
    render() {
        return (
            <section>
                {TitleBlock('表单')}

                <ul>
                    <li>
                        <h4>默认表单</h4>
                        <CodeView component={
                            <Form>
                                <Group label="name:">
                                    <Field>
                                        <input type="text"/>
                                    </Field>
                                </Group>
                                <Group label="radio:">
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
                                <Group label="inline:">
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
                                            <i className="icon">send</i>
                                        </div>
                                    </Field>
                                </Group>
                                <Group>
                                    <Fields size={2}>
                                        <Field label="first name:">
                                            <input type="text"/>
                                        </Field>
                                        <Field label="last name:">
                                            <div className="dot fluid icon input">
                                                <input type="email"/>
                                                <i className="icon">email</i>
                                            </div>
                                        </Field>
                                    </Fields>
                                </Group>
                                <Group label="fields-3:">
                                    <Fields size={3}>
                                        <Field>
                                            <DropDown name="sex" onChange={() => console.log('s')}>
                                                <Item name="male" value="m"></Item>
                                                <Item name="famale" value="f"></Item>
                                            </DropDown>
                                        </Field>
                                        <Field>
                                            <DropDown name="provinceId" options={PROVINCES}
                                                labelName="name" valueName="id" onChange={this.handleProvinceChange.bind(this)}>
                                            </DropDown>
                                        </Field>
                                        <Field>
                                            <DropDown options={this.state.cities} onChange={() => console.log('s')} valueName="id" name="cityId">
                                            </DropDown>
                                        </Field>
                                    </Fields>
                                </Group>
                                <Group label="mix:">
                                    <Fields>
                                        <Field size={3}>
                                            <DropDown name="sex" onChange={() => console.log('s')}>
                                                <Item name="male" value="m"></Item>
                                                <Item name="famale" value="f"></Item>
                                            </DropDown>
                                        </Field>
                                        <Field size={6}>
                                            <input type="date"/>
                                        </Field>
                                        <Field size={1} className="text-center">
                                            to
                                        </Field>
                                        <Field size={6}>
                                            <input type="datetime-local"/>
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
                                <Group label="label:">
                                    <Field>
                                        <div className="dot icon label">
                                            <span>close</span>
                                            <i className="icon">close</i>
                                        </div>
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
                                <Group type="sumbit">
                                    <button className={'button'}>submit</button>
                                </Group>
                            </Form>
                        }>
                            
                        </CodeView>
                    </li>
                </ul>
            </section>
        );
    }
}
