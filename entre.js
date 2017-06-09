import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import {CN} from './src/util/tools';
import {NAV_MAP} from './src/constant';
import dot from './src/page/demo.less'

import {
    BasicPage, ButtonPage,
    CalendarPage, CarouselPage, CheckBoxPage, CheckBoxGroupPage, ConfirmBoxPage, CardPage, CommentPage, CrumbPage,
    DatePickerPage, DateTimePickerPage, DropDownPage,
    FormPage,
    GridPage,
    IconPage, ImagePage, InputPage, ItemPage, InstallPage,
    LabelPage, LoaderPage, ListPage,
    MenuPage, ModalPage,
    NoticePage,
    OtherPage,
    PaginationPage, PinPage, PanelPage, ProgressPage,
    RadioPage, RadioGroupPage,
    SlideMenuPage, StartPage,
    ToastPage, TabPage, TimeInputPage, TimePickerPage, TooltipPage, TablePage, TextPage, TempPage,
    ValidatorPage,
} from './src/page';

const NAV_MAP_KEYS = Object.keys(NAV_MAP)

const asideLinks = () => {
    return NAV_MAP_KEYS.map(key => {
        return (
            <div className="group" key={key}>
                <h4>{key}</h4>
                {NAV_MAP[key].map(item => {
                    return (
                        <span key={item.route}>
                            {item.route === '/component' ? 
                                <NavLink exact to="/component">{item.name}</NavLink>
                                : <NavLink to={item.route}>{item.name}</NavLink>}
                        </span>
                    )
                })}
            </div>
        )
    })
}

const Header = props => {
    return (
        <header className={CN('basic block main-nav')}>
            <div className={CN('container')}>
                <div className={CN('basic table')}>
                    <div className="row">
                        <div className="cell">
                            <h2><NavLink to="/">React UIKits</NavLink></h2>
                        </div>
                        <div className="text-right cell">
                            <NavLink exact className="link" to="/">首页</NavLink>
                            <NavLink className="link" to="/component">组件</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

const Footer = props => {
    return (
        <footer className="main-footer">
            <div className={CN('container')}>
                <div className={CN('basic table')}>
                    <div className="row">
                        <div className="cell">
                            <h4>React UIKits@beta</h4>
                        </div>
                        <div className="text-right cell">
                            <a href="https://github.com/jerryshew/react-uikits" target="_blank">Github</a>
                            <a href="http://braavos.me" target="_blank">Blog</a>
                            <a href="https://github.com/wecatch" target="_blank">team</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}


const ContentPage = props => {
    return (
        <div className={CN('container grid main-page')}>
             <aside className={CN('column-3 main-aside')}>
                 {asideLinks()}
             </aside>
             <artical className="column column-13 main-content">
                <Route exact path="/component" component={BasicPage}></Route>
                <Route path="/start" component={StartPage}></Route>
                <Route path="/install" component={InstallPage}></Route>
                <Route path="/component/button" component={ButtonPage}></Route>
                <Route path="/component/calendar" component={CalendarPage}></Route>
                <Route path="/component/carousel" component={CarouselPage}></Route>
                <Route path="/component/checkbox" component={CheckBoxPage}></Route>
                <Route path="/component/checkboxgroup" component={CheckBoxGroupPage}></Route>
                <Route path="/component/comment" component={CommentPage}></Route>
                <Route path="/component/confirmbox" component={ConfirmBoxPage}></Route>
                <Route path="/component/datepicker" component={DatePickerPage}></Route>
                <Route path="/component/datetimepicker" component={DateTimePickerPage}></Route>
                <Route path="/component/dropdown" component={DropDownPage}></Route>
                <Route path="/component/form" component={FormPage}></Route>
                <Route path="/component/validator" component={ValidatorPage}></Route>
                <Route path="/component/grid" component={GridPage}></Route>
                <Route path="/component/menu" component={MenuPage}></Route>
                <Route path="/component/toast" component={ToastPage}></Route>
                <Route path="/component/modal" component={ModalPage}></Route>
                <Route path="/component/notice" component={NoticePage}></Route>
                <Route path="/component/pagination" component={PaginationPage}></Route>
                <Route path="/component/pin" component={PinPage}></Route>
                <Route path="/component/panel" component={PanelPage}></Route>
                <Route path="/component/progress" component={ProgressPage}></Route>
                <Route path="/component/radio" component={RadioPage}></Route>
                <Route path="/component/radiogroup" component={RadioGroupPage}></Route>
                <Route path="/component/slidemenu" component={SlideMenuPage}></Route>
                <Route path="/component/tab" component={TabPage}></Route>
                <Route path="/component/timeinput" component={TimeInputPage}></Route>
                <Route path="/component/timepicker" component={TimePickerPage}></Route>
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
                <Route path="/component/list" component={ListPage}></Route>
                <Route path="/temp" component={TempPage}></Route>
             </artical>
        </div>
    )
}

const RootPage = props => {
    return (
        <div className={CN('root-page fluid table absolute-center')}>
            <div className="row">
                <div className="cell">
                    <h1 className={CN('field')}>
                        React UIkits
                    </h1>
                    <p className={CN('field')}>基于 React.js 快速搭建企业平台的组件化方案</p>
                    <NavLink to="/component" className={CN('red button')}>更多...</NavLink>
                </div>
            </div>
        </div>
    );
}

ReactDOM.render(<Router>
                    <page>
                        <Header/>
                        <Switch>
                            <Route exact path="/" component={RootPage}></Route>
                            <Route path="/component" component={ContentPage}></Route>
                            <Route path="/start" component={ContentPage}></Route>
                            <Route path="/install" component={ContentPage}></Route>
                            <Route path="/temp" component={ContentPage}></Route>
                            <Route component={RootPage}></Route>
                        </Switch>
                        <Footer/>
                    </page>
                </Router>, document.getElementById('root'))