import React, { Component } from 'react';
import {CN, TitleBlock} from '../util/tools';
import {NS, COLORS} from '../constant';
import {CodeView} from '../component/CodeView';

const makeList = (cn='') => {
    return (
        <ul className={CN(cn + ' list')}>
            <li className="item">
                <div className="tiny image">
                    <img src="http://braavos.me/dot-css/dist/img/avatar.png"/>
                </div>
                <div className="content">
                    <div className="header">Jerry</div>
                    <div className="extra">just push 3 commit to dot-css</div>
                </div>
            </li>
            <li className="item">
                <div className="tiny image">
                    <img src="http://braavos.me/dot-css/dist/img/img.png"/>
                </div>
                <div className="content">
                    <div className="header">Jerry</div>
                    <div className="extra">
                        珍珠丸子又名蓑衣丸子，是湖北沔阳（今仙桃市）著名的汉族小吃。其风味独特、清香细嫩、鲜香可口。珍珠丸子可以直接食用，也可以蘸料搭配着吃。珍珠丸子位在沔阳三蒸之首。将糯米淘洗并用温水浸泡，然后捞出滤干。再将加了蛋清的肉茸、鱼茸、荸荠丁、香菇末搅匀，挤成肉丸，放入糯米中滚上一层米，用手轻压表面，把一部分糯米压入肉馅中。蒸制前，铺上一层菜叶，不易粘盘。
                    </div>
                </div>
            </li>
            <li className="item">
                <div className="tiny image">
                    <img src="http://braavos.me/dot-css/dist/img/avatar.png"/>
                </div>
                <div className="content">
                    <div className="header">Jerry</div>
                    <div className="extra">
                        珍珠丸子又名蓑衣丸子，是湖北沔阳（今仙桃市）著名的汉族小吃。其风味独特
                    </div>
                </div>
            </li>
        </ul>
    )
}

export class ListPage extends Component {
    render() {
        return (
            <section>
                {TitleBlock('列表')}
                <br/>

                <h4>列表</h4>
                <CodeView component={makeList()}>
{`<ul className="${CN('list')}">
    ...
    <li className="item">
        <div className="tiny image">
            <img src="http://braavos.me/dot-css/dist/img/avatar.png"/>
        </div>
        <div className="content">
            <div className="header">Jerry</div>
            <div className="extra">just push 3 commit to dot-css</div>
        </div>
    </li>
    ...
</ul>
`}                    
                </CodeView>
                <br/>

                <h4>排序列表</h4>
                <CodeView component={makeList('ordered')}>
{`<ul className="${CN('ordered list')}">
    ...
</ul>`} 
                </CodeView>
                <br/>

                <h4>水平列表</h4>
                <CodeView component={
                    <div>
                        <ul className={CN('horizontal list')}>
                            <li className="item">
                                <div className="tiny image">
                                    <img src="http://braavos.me/dot-css/dist/img/avatar.png"/>
                                </div>
                                <div className="content">
                                    <div className="header">Jerry</div>
                                    <div className="extra">programmer</div>
                                </div>
                            </li>
                            <li className="item">
                                <div className="tiny image">
                                    <img src="http://braavos.me/dot-css/dist/img/avatar.png"/>
                                </div>
                                <div className="content">
                                    <div className="header">Jerry</div>
                                    <div className="extra">programmer</div>
                                </div>
                            </li>
                            <li className="item">
                                <div className="circle tiny image">
                                    <img src="http://braavos.me/dot-css/dist/img/avatar.png"/>
                                </div>
                                <div className="content">
                                    <div className="header">Jerry</div>
                                    <div className="extra">programmer</div>
                                </div>
                            </li>
                        </ul>
                        <br/>
                        <ul className={CN('horizontal list')}>
                            <li className="item">
                                <div className="mini image">
                                    <img src="http://braavos.me/dot-css/dist/img/avatar.png"/>
                                </div>
                                <div className="content">
                                    Jerry
                                </div>
                            </li>
                            <li className="item">
                                <div className="mini image">
                                    <img src="http://braavos.me/dot-css/dist/img/avatar0.png"/>
                                </div>
                                <div className="content">
                                    Lilly
                                </div>
                            </li>
                            <li className="item">
                                <div className="circle mini image">
                                    <img src="http://braavos.me/dot-css/dist/img/avatar.png"/>
                                </div>
                                <div className="content">
                                    Jason
                                </div>
                            </li>
                        </ul>
                    </div>
                }>
{`<ul className="${CN('horizontal list')}">
    ...
</ul>`} 
                </CodeView>
                <br/>
                
                <h4>水平排序列表</h4>
                <CodeView component={
                    <ul className={CN('horizontal ordered list')}>
                        <li className="item">
                            <div className="tiny image">
                                <img src="http://braavos.me/dot-css/dist/img/avatar.png"/>
                            </div>
                            <div className="content">
                                <div className="header">Jerry</div>
                                <div className="extra">programmer</div>
                            </div>
                        </li>
                        <li className="item">
                            <div className="tiny image">
                                <img src="http://braavos.me/dot-css/dist/img/avatar.png"/>
                            </div>
                            <div className="content">
                                <div className="header">Jerry</div>
                                <div className="extra">programmer</div>
                            </div>
                        </li>
                        <li className="item">
                            <div className="circle tiny image">
                                <img src="http://braavos.me/dot-css/dist/img/avatar.png"/>
                            </div>
                            <div className="content">
                                <div className="header">Jerry</div>
                                <div className="extra">programmer</div>
                            </div>
                        </li>
                    </ul>
                }>
{`<div class="${CN('horizontal ordered list')}">
    ...
</div>`}                    
                </CodeView>
                <br/>
                    
                <h4>Icon 列表</h4>
                <CodeView component={
                    <ul className={CN('list')}>
                        <li className="item">
                            <i className="icon">person</i>
                            <div className="content">珍珠丸子又名蓑衣丸子</div>
                        </li>
                        <li className="item">
                            <i className="icon">school</i>
                            <div className="content">著名的汉族小吃</div>
                        </li>
                        <li className="item">
                            <i className="icon">group</i>
                            <div className="content">风味独特、清香细嫩、鲜香可口</div>
                        </li>
                    </ul>
                }>
{`<div class="${NS} list">
    <div class="item">
        <i class="icon">person</i>
        <div class="content">content</div>
    </div>
    ...
</div>
`}                    
                </CodeView>
                <br/>

                <h4>嵌套排序列表</h4>
                <CodeView component={
                    <ul className={CN('ordered list')}>
                        <li className="item">
                            <div className="content">珍珠丸子又名蓑衣丸子</div>
                        </li>
                        <li className="item">
                            <div className="content">著名的汉族小吃</div>
                        </li>
                        <li className="item">
                            <div className="content">风味独特、清香细嫩、鲜香可口</div>
                            <ul className="ordered list">
                                <li className="item">
                                    <div className="content">珍珠丸子又名蓑衣丸子</div>
                                </li>
                                <li className="item">
                                    <div className="content">著名的汉族小吃</div>
                                </li>
                                <li className="item">
                                    <div className="content">风味独特、清香细嫩、鲜香可口</div>
                                </li>
                            </ul>
                        </li>
                    </ul>
                }>
{`<ul class="${NS} ordered list">
    <li class="item">
        <div class="content">content</div>
    </li>
    <li class="item">
        <div class="conetent"></div>
        <ul class="ordered list">
            <li class="item">
                <div class="content">content</div>
            </li>
            ...
        </ul>
    </li>
    ...
</ul>`}                      
                </CodeView>
            </section>
        );
    }
}
