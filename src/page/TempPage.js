import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Form, Group, Field, Fields, Validator}  from '../component/Form';

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
        this.handleFieldChange = this.handleFieldChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleError = this.handleError.bind(this)
        this.state = {
            store: {},
        }
    }
    handleFieldChange(field, value){
        let {store} = this.state
        store[field] = value
        this.setState({ store });
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
            <div>
                <Form rules={rules} store={this.state.store} onError={this.handleError} onSubmit={this.handleSubmit}>
                    <Group label="name">
                        <Field validate="name">
                            <Validator name="name" on="onBlur">
                                <input type="text" value={store.name}
                                    onChange={e => this.handleFieldChange('name', e.target.value)}/>
                            </Validator>
                        </Field>
                        <Field validate="agree">
                            <Validator name="agree" on="onChange">
                                <input type="checkbox" checked={store.agree}
                                    onChange={e => this.handleFieldChange('agree', e.target.checked ? 1 : 0)}/>
                            </Validator>
                            <span>同意</span>
                        </Field>
                        <Field validate="chinese">
                            <span>
                                <Validator name="chinese" on="onChange">
                                    <input type="radio" checked={store.chinese}
                                        onChange={e => this.handleFieldChange('chinese', e.target.value ? 1 : 0)} />
                                </Validator>
                                <span>中国人</span>
                            </span>
                        </Field>
                        <Field validate="gender">
                            <Validator name="gender" on="onChange">
                                <select value={store.gender}
                                    onChange={e => this.handleFieldChange('gender', e.target.value)}>
                                    <option value=""></option>
                                    <option value="f">女</option>
                                    <option value="m">男</option>
                                </select>
                            </Validator>
                        </Field>
                    </Group>
                    <Group type="action">
                        <input type="submit" className="dot green button" value="submit"/>
                        <a href="javascript:;" className="dot button">cancel</a>
                    </Group>
                </Form>
            </div>
        );
    }
}
