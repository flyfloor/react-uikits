import React, { Component } from 'react';
import Hightlight from "react-highlight";
import {NS} from '../constant';

export default class CodeView extends Component {
    constructor(props){
        super(props)
        this.state = {
            display: false
        }
    }
    handleDisplay(){
        let {display} = this.state
        this.setState({
            display: !display
        });
    }
    render() {
        const {children, component} = this.props
        const {display} = this.state
        return (
            <section className={`${NS} code-view`}>
                <div className="code-component">
                {component}
                </div>
                <br/>
                <div className={display ? 'code-detail active' : 'code-detail'}>
                    <h5>使用:</h5>
                    <Hightlight className="javascript">{children}</Hightlight>
                </div>
                <a className="code-trigger" href="javascript:;" onClick={this.handleDisplay.bind(this)}>
                    {display ?
                        <span><i className="dot icon">expand_less</i>隐藏代码</span>
                        : <span><i className="dot icon">expand_more</i>显示代码</span>
                    }
                </a>
            </section>
        );
    }
}
