import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';
import {CN} from './src/util';
import dot from 'dot-css/src/dot.less'

import {BasicPage, CalenderPage} from './src/page/index';
import demoCss from './src/page/demo.less';

const NavLink = (props) => {
    return (
        <Link {...props} activeClassName="active"></Link>
    );
}

export class App extends Component {
    constructor(props){
        super(props)
        this.state = {
        }
    }
    render() {
        const {children} = this.props;
        const {pathname} = this.props.location;
        return (
            <page className={CN('container')}>
                {pathname !== '/' ? 
                    <div>
                        <header className={CN('basic block')}>
                            <h1>
                                <Link to="/basic" className={CN('color-deep_gray')}>
                                    React UIkit
                                </Link>
                            </h1>
                        </header>
                        <div className={CN('grid')}>
                            <aside className={CN('column-3 main-aside')}>
                                <NavLink to="/basic">basic</NavLink>
                                <NavLink to="/calender">calender</NavLink>
                            </aside>
                            <artical className="column column-13 main-content">
                                {children}
                            </artical>
                        </div>
                    </div>
                    : <RootPage/>
                }
            </page>
        );
    }
}

class RootPage extends Component {
    render() {
        return (
            <div className={CN('basic fluid table intro-page absolute-center')}>
                <div className="row">
                    <div className="cell">
                        <h1 className={CN('field')}>
                            React UIkit
                        </h1>
                        <p className={CN('field')}>Component set build with React.js</p>
                        <Link to="/basic" className={CN('red button')}>see more</Link>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Router history={hashHistory}>
                    <Route path="/" component={App}>
                        <IndexRoute component={RootPage}/>
                        <Route path="/basic" component={BasicPage}></Route>
                        <Route path="/calender" component={CalenderPage}></Route>
                    </Route>
                </Router>, document.getElementById('root'))