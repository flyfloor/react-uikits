import React, { Component } from 'react';
import Hightlight from "react-highlight";

export default class CodeView extends Component {
    constructor(props){
        super(props)
        this.state = {
            display: false
        }
    }
    handleDisplay(){
        let {display} = this.state
        console.log(display)
        this.setState({
            display: !display
        });
    }
    render() {
        const {children, component} = this.props
        const {display} = this.state
        return (
            <section className="code-view">
                {component}
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
