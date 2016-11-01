import React, { Component } from 'react';
import Menu from '../component/Menu';
import Item from '../component/Item';
import CodeView from '../component/CodeView';

const formatChild = ({current='', accordion=false, onChange=null, style, popped=false, mode='click', horizontal=false, activeFirst=false}) => {
    return (
        <Menu current={current} accordion={accordion} onChange={onChange} horizontal={horizontal} popped={popped} mode={mode}>
            <Item index='sub0' sub={true} active={activeFirst} title={<p>Sub Menu</p>}>
                <Menu className="second-menu">
                    <Item index="0">
                        <p>Sub item</p>
                    </Item>
                    <Item index="1">
                        <p>Sub item</p>
                    </Item>
                    <Item index="2" disabled={true}>
                        <p>Sub item</p>
                    </Item>
                    <Item sub={true} index="sub0_1" title={<p>Third Menu</p>}>
                        <Menu className="third-menu">
                            <Item index="10">
                                <p>Third item</p>
                            </Item>
                            <Item index="11">
                                <p>Third item</p>
                            </Item>
                        </Menu>
                    </Item>
                </Menu>
            </Item>
            <Item index="sub1" sub={true} title={<p>Sub Menu</p>}>
                <Menu className="second-menu">
                    <Item index="sub1_0" sub={true} title={<p>Third Menu</p>}>
                        <Menu className="third-menu">
                            <Item index="6" disabled={true}>
                                <p>Third item</p>
                            </Item>
                            <Item index="7">
                                <p>Third item</p>
                            </Item>
                        </Menu>
                    </Item>
                    <Item index="sub1_1" sub={true} title={<p>Third Menu</p>}>
                        <Menu className="third-menu">
                            <Item index="8">
                                <p>Third item</p>
                            </Item>
                            <Item index="9">
                                <p>Third item</p>
                            </Item>
                        </Menu>
                    </Item>
                    <Item index="5">
                        <p>Sub item</p>
                    </Item>
                </Menu>
            </Item>
            <Item index="4">
                <p>Item <a target="_blank" href="http://braavos.me" style={{'color': '#f00'}}>blog</a></p>
            </Item>
        </Menu>
    )
}

export default class MenuPage extends Component {
    render() {
        return (
            <section>
                <h2>菜单</h2>
                <br/>

                <h4>默认菜单</h4>
                <CodeView component={
                    formatChild({})
                }>
{`
`}
                </CodeView>
            </section>
        );
    }
}
