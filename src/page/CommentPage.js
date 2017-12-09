import React, { Component } from 'react';
import {CN, TitleBlock} from '../util/tools';
import {NS, COLORS} from '../constant';
import CodeView from './CodeView';

export class CommentPage extends Component {
    render() {
        return (
            <div>
                {TitleBlock('评论')}
                <ul>
                    <li>
                        <CodeView component={
                            <div className={CN('comments')}>
                                <div className={CN('comment')}>
                                    <div className="avatar">
                                        <img src="http://braavos.me/dot-css/dist/img/avatar.png"/>
                                    </div>
                                    <div className="content">
                                        <div className="nickname">lacuna fario</div>
                                        <div className="extra">
                                            <span>2016-05-32 8:20 pm</span>
                                        </div>
                                        <div className="text">
                                            Lacuna is a company name from a movie named <i>"Eternal sunshine of the spotless mind"</i>
                                        </div>
                                        <div className="action">
                                            <a href="javascript:;">reply</a>
                                            <a href="javascript:;">delete</a>
                                        </div>
                                    </div>
                                    <div className="comments">
                                        <div className={CN('comment')}>
                                            <div className="avatar">
                                                <img src="http://braavos.me/dot-css/dist/img/avatar0.png"/>
                                            </div>
                                            <div className="content">
                                                <div className="nickname">lily</div>
                                                <div className="extra">
                                                    <span>2016-05-32 8:10 pm</span>
                                                </div>
                                                <div className="text">
                                                    Emm, that is interesting. I supposed.
                                                </div>
                                                <div className="action">
                                                    <a href="javascript:;">reply</a>
                                                    <a href="javascript:;">delete</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={CN('comment')}>
                                            <div className="avatar">
                                                <img src="http://braavos.me/dot-css/dist/img/avatar.png"/>
                                            </div>
                                            <div className="content">
                                                <div className="nickname">lacuna fario</div>
                                                <div className="extra">
                                                    <span>2016-05-32 8:10 pm</span>
                                                </div>
                                                <div className="text">
                                                    Okay, you will never know.
                                                </div>
                                                <div className="action">
                                                    <a href="javascript:;">reply</a>
                                                    <a href="javascript:;">delete</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={CN('comment')}>
                                    <div className="avatar">
                                        <img src="http://braavos.me/dot-css/dist/img/avatar0.png"/>
                                    </div>
                                    <div className="content">
                                        <div className="nickname">lily</div>
                                        <div className="extra">
                                            <span>2016-05-32 8:10 pm</span>
                                        </div>
                                        <div className="text">
                                            Emm, that is interesting. I supposed.
                                        </div>
                                        <div className="action">
                                            <a href="javascript:;">reply</a>
                                            <a href="javascript:;">delete</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }>
{`<div className="${CN('comment')}">
    <div className="avatar">
        <img src="http://braavos.me/dot-css/dist/img/avatar.png"/>
    </div>
    <div className="content">
        <div className="nickname">lacuna fario</div>
        <div className="extra">
            <span>2016-05-32 8:20 pm</span>
        </div>
        <div className="text">
            Lacuna is a company name from a movie named <i>"Eternal sunshine of the spotless mind"</i>
        </div>
        <div className="action">
            <a href="javascript:;">reply</a>
            <a href="javascript:;">delete</a>
        </div>
    </div>
    <div className="comments">
        <div className="${CN('comment')}">
            <div className="avatar">
                <img src="http://braavos.me/dot-css/dist/img/avatar0.png"/>
            </div>
            <div className="content">
                <div className="nickname">lily</div>
                <div className="extra">
                    <span>2016-05-32 8:10 pm</span>
                </div>
                <div className="text">
                    Emm, that is interesting. I supposed.
                </div>
                <div className="action">
                    <a href="javascript:;">reply</a>
                    <a href="javascript:;">delete</a>
                </div>
            </div>
        </div>
    </div>
</div>
`}                                
                        </CodeView>
                        <br/>
                    </li>
                    <li>
                        <h4>向右浮动的额外信息区</h4>
                        <CodeView component={
                            <div className={CN('comment')}>
                                <div className="avatar">
                                    <img src="http://braavos.me/dot-css/dist/img/avatar.png"/>
                                </div>
                                <div className="content">
                                    <div className="nickname">lacuna fario</div>
                                    <div className="extra right">
                                        <span>2016-05-32 8:20 pm</span>
                                    </div>
                                    <div className="text">
                                        Lacuna is a company name from a movie named <i>"Eternal sunshine of the spotless mind"</i>
                                    </div>
                                    <div className="action">
                                        <a href="javascript:;">reply</a>
                                        <a href="javascript:;">delete</a>
                                    </div>
                                </div>
                            </div>
                        }>
{`<div className="${CN('comment')}">
    ...
    <div className="content">
        ...
        <div className="extra right">
            <span>2016-05-32 8:20 pm</span>
        </div>
        ...
    </div>
</div>
`}                                
                        </CodeView>
                        <br/>
                    </li>
                    <li>
                        <h4>圆圈头像</h4>
                        <CodeView component={
                            <div className={CN('comment')}>
                                <div className="round avatar">
                                    <img src="http://braavos.me/dot-css/dist/img/avatar.png"/>
                                </div>
                                <div className="content">
                                    <div className="nickname">lacuna fario</div>
                                    <div className="extra">
                                        <span>replied to</span>
                                        <a href="javascript:;">lily</a>
                                    </div>
                                    <div className="extra">
                                        <span>2016-05-32 8:20 pm</span>
                                    </div>
                                    <div className="text">
                                        Lacuna is a company name from a movie named <i>"Eternal sunshine of the spotless mind"</i>
                                    </div>
                                    <div className="action">
                                        <a href="javascript:;">reply</a>
                                        <a href="javascript:;">delete</a>
                                    </div>
                                </div>
                            </div>
                        }>
{`<div className="${CN('comment')}">
    <div className="round avatar">
        <img src="http://braavos.me/dot-css/dist/img/avatar.png"/>
    </div>
    ...
</div>
`}                                
                        </CodeView>
                        <br/>
                    </li>

                    <li>
                        <CodeView component={
                            <div className={CN('comments')}>
                                <div className={CN('loading comment')}>
                                    <div className="avatar">
                                        <img src="http://braavos.me/dot-css/dist/img/avatar.png"/>
                                    </div>
                                    <div className="content">
                                        <div className="nickname">lacuna fario</div>
                                        <div className="extra">
                                            <span>2016-05-32 8:20 pm</span>
                                        </div>
                                        <div className="text">
                                            Lacuna is a company name from a movie named <i>"Eternal sunshine of the spotless mind"</i>
                                        </div>
                                        <div className="action">
                                            <a href="javascript:;">reply</a>
                                            <a href="javascript:;">delete</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }>
{`<div className="${CN('loading comment')}">
...
</div>`}                                
                        </CodeView>
                        <br/>
                    </li>
                </ul>
            </div>
        );
    }
}

