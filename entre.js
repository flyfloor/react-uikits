import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, IndexLink, Link, hashHistory } from 'react-router';
import {CN} from './src/util/tools';
import {NAV_MAP} from './src/constant';
import dot from './src/page/demo.less'

import {
    BasicPage, 
    ButtonPage,
    CalenderPage, 
    CarouselPage, 
    CheckBoxPage,
    CheckBoxGroupPage,
    ConfirmBoxPage,
    DatePickerPage,
    DropDownPage,
    MenuPage,
    ToastPage,
    ModalPage,
    NoticePage,
    PaginationPage,
    PinPage,
    ProgressPage,
    RadioPage,
    RadioGroupPage,
    SlideMenuPage,
    TabPage,
    TimeInputPage,
    TooltipPage,
    CardPage,
    CommentPage,
    CrumbPage,
    GridPage,
    IconPage,
    ImagePage,
    InputPage,
    ItemPage,
    LabelPage,
    LoaderPage,
    OtherPage,
    TablePage,
    TextPage,
    StartPage,
    InstallPage,
} from './src/page/index';

const NavLink = (props) => {
    return (
        <Link {...props} activeClassName="active"></Link>
    );
}

const NAV_MAP_KEYS = Object.keys(NAV_MAP)

const assembleNavLinks = () => {
    return NAV_MAP_KEYS.map(key => {
        return (
            <div className="group" key={key}>
                <h4>{key}</h4>
                {NAV_MAP[key].map(item => {
                    return (
                        <span key={item.route}>
                            {item.route === '/component' ? 
                                <IndexLink to="/component" activeClassName="active">{item.name}</IndexLink>
                                : <NavLink to={item.route}>{item.name}</NavLink>}
                        </span>
                    )
                })}
            </div>
        )
    })
}

export class App extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }
    render() {
        const {children} = this.props;
        const {pathname} = this.props.location;
        return (
            <page>
                <header className={CN('basic block main-nav')}>
                    <div className={CN('container')}>
                        <div className={CN('basic table')}>
                            <div className="row">
                                <div className="cell">
                                    <h2><Link to="/">React UIKit</Link></h2>
                                </div>
                                <div className="text-right cell">
                                    <IndexLink className="link" activeClassName="active" to="/">首页</IndexLink>
                                    <NavLink className="link" to="/component">组件</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                {pathname !== '/' ? 
                    <div>
                        <div className={CN('container grid main-page')}>
                            <aside className={CN('column-3 main-aside')}>
                                {assembleNavLinks()}
                            </aside>
                            <artical className="column column-13 main-content">
                                {children}
                            </artical>
                        </div>
                        <footer className="main-footer">
                            <div className={CN('container')}>
                                <div className={CN('basic table')}>
                                    <div className="row">
                                        <div className="cell">
                                            <h4>React UIKit@beta</h4>
                                        </div>
                                        <div className="text-right cell">
                                            <a href="https://github.com/jerryshew/react-uikit" target="_blank">Github</a>
                                            <a href="http://braavos.me" target="_blank">Blog</a>
                                            <a href="https://github.com/wecatch" target="_blank">team</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </footer>
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
            <div className={CN('root-page fluid table absolute-center')}>
                <div className="row">
                    <div className="cell">
                        <h1 className={CN('field')}>
                            React UIkit
                        </h1>
                        <p className={CN('field')}>基于 React.js 快速搭建企业平台的组件化方案</p>
                        <Link to="/component" className={CN('red button')}>更多...</Link>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Router history={hashHistory}>
                    <Route path="/" component={App}>
                        <IndexRoute component={RootPage}/>
                        <Route path="/start" component={StartPage}></Route>
                        <Route path="/install" component={InstallPage}></Route>
                        <Route path="/component">
                            <IndexRoute component={BasicPage}/>
                            <Route path="/component/button" component={ButtonPage}></Route>
                            <Route path="/component/calender" component={CalenderPage}></Route>
                            <Route path="/component/carousel" component={CarouselPage}></Route>
                            <Route path="/component/checkbox" component={CheckBoxPage}></Route>
                            <Route path="/component/checkboxgroup" component={CheckBoxGroupPage}></Route>
                            <Route path="/component/comment" component={CommentPage}></Route>
                            <Route path="/component/confirmbox" component={ConfirmBoxPage}></Route>
                            <Route path="/component/datepicker" component={DatePickerPage}></Route>
                            <Route path="/component/dropdown" component={DropDownPage}></Route>
                            <Route path="/component/grid" component={GridPage}></Route>
                            <Route path="/component/menu" component={MenuPage}></Route>
                            <Route path="/component/toast" component={ToastPage}></Route>
                            <Route path="/component/modal" component={ModalPage}></Route>
                            <Route path="/component/notice" component={NoticePage}></Route>
                            <Route path="/component/pagination" component={PaginationPage}></Route>
                            <Route path="/component/pin" component={PinPage}></Route>
                            <Route path="/component/progress" component={ProgressPage}></Route>
                            <Route path="/component/radio" component={RadioPage}></Route>
                            <Route path="/component/radiogroup" component={RadioGroupPage}></Route>
                            <Route path="/component/slidemenu" component={SlideMenuPage}></Route>
                            <Route path="/component/tab" component={TabPage}></Route>
                            <Route path="/component/timeinput" component={TimeInputPage}></Route>
                            <Route path="/component/tooltip" component={TooltipPage}></Route>
                            <Route path="/component/card" component={CardPage}></Route>
                            <Route path="/component/crumb" component={CrumbPage}></Route>
                            <Route path="/component/icon" component={IconPage}></Route>
                            <Route path="/component/image" component={ImagePage}></Route>
                            <Route path="/component/input" component={InputPage}></Route>
                            <Route path="/component/item" component={ItemPage}></Route>
                            <Route path="/component/label" component={LabelPage}></Route>
                            <Route path="/component/loader" component={LoaderPage}></Route>
                            <Route path="/component/other" component={OtherPage}></Route>
                            <Route path="/component/table" component={TablePage}></Route>
                            <Route path="/component/text" component={TextPage}></Route>
                        </Route>
                    </Route>
                </Router>, document.getElementById('root'))