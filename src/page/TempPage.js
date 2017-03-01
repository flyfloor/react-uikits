import React from 'react';
import ReactDOM from 'react-dom';
import {Form, Group, Field, Fields}  from '../component/Form';
import schema from 'async-validator';

const rules = {
    name: [{
        type: "string", required: true, message: '请输入名字'
    }, {
        min: 3, max: 12, message: '名字长度3至12字'
    }],
    agree: {
        type: 'boolean', required: true, message: '请同意'
    },
    chinese: {
        type: 'boolean', required: true, message: '是不是中国人?'
    },
    gender: {
        type: 'string', required: true, message: '请选择性别'
    }
}

export const TempPage = React.createClass({
    getInitialState() {
        return {
            store: {
            },
        };
    },
    handleFieldChange(field, value){
        let {store} = this.state
        store[field] = value
        this.setState({ store });
    },
    handleSubmit(store){
        console.log(store)
    },
    render() {
        const {store} = this.state
        return (
            <div>
                <Form rules={rules} store={this.state.store} ref="formNode" onSubmit={this.handleSubmit}>
                    <Group label="name">
                        <Field validate="name">
                            <input type="text" value={store.name}
                                onChange={e => this.handleFieldChange('name', e.target.value)}/>
                        </Field>
                        <Field validate="agree">
                            <input type="checkbox" checked={store.agree} 
                                onChange={e => this.handleFieldChange('agree', !!e.target.value)}/>
                            <span>同意</span>
                        </Field>
                        <Field validate="chinese">
                            <span>
                                <input type="radio" checked={store.chinese} 
                                    onChange={e => this.handleFieldChange('chinese', !!e.target.value)} />
                                <span>中国人</span>
                            </span>
                        </Field>
                        <Field validate="gender">
                            <select value={store.gender} onChange={e => this.handleFieldChange('gender', e.target.value)}>
                                <option value=""></option>
                                <option value="f">女</option>
                                <option value="m">男</option>
                            </select>
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
});
