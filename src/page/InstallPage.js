import React, { Component } from 'react';
import Hightlight from "react-highlight"
import {CN, TitleBlock} from '../util/tools';
import {NS, COLORS} from '../constant';

export class InstallPage extends Component {
    render() {
        return (
            <section>
                {TitleBlock('安装', '如何安装 React UIKit')}

                <h4>使用 npm 安装</h4>
                <Hightlight>
                    {`npm install react-uikits --save`}
                </Hightlight>
                <p>安装开发版</p>
                <Hightlight>
                    {`npm install https://github.com/jerryshew/react-component --save`}
                </Hightlight>

                <h4>目录结构</h4>
                <Hightlight>
                    ├── component
                    <br/>
                    │   ├── util
                    <br/>
                    │   ...
                    <br/>
                    ├── lib // babel transformed component
                    <br/>
                    ├── less //basic style of component
                    <br/>
                    ├── index.html // demo page
                    <br/>
                    ├── page // demo page
                    <br/>
                    ├── dist // demo build dist 
                    <br/>
                </Hightlight>
            </section>
        );
    }
}
