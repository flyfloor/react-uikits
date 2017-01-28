const React = require('react')
const Hightlight = require("react-highlight")
const NS = require('./base/constant').NS

const CodeView = React.createClass({
    getInitialState() {
        return {
            display: false
        }
    },
    handleDisplay(){
        let {display} = this.state
        this.setState({
            display: !display
        });
    },
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
                    <h5>代码:</h5>
                    <Hightlight className="javascript">{children}</Hightlight>
                </div>
                <a className="code-trigger" href="javascript:;" onClick={this.handleDisplay}>
                    <span className={`${NS} basic center table`}>
                        <span className="row">
                            <i className={`${NS} icon cell`}>{display ? 'expand_less' : 'expand_more'}</i>
                            <span className="cell">{display ? '隐藏代码' : '显示代码'}</span>
                        </span>
                    </span>
                </a>
            </section>
        )
    }
});

module.exports = {
    CodeView
}