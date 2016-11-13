import React, { Component } from 'react';
import Hightlight from "react-highlight"
import {CN, TitleBlock} from '../util/tools';
import {NS, COLORS} from '../constant';


export class StartPage extends Component {
    render() {
        return (
            <section>
                {TitleBlock('快速上手', '本节内容主要讲如何快速使用 React UIKits')}

                <h4>引入组件</h4>
                <Hightlight>
                    {`import {DropDown, Pagination} from 'react-uikits'`}
                </Hightlight>
                <br/>

                <h4>引入样式</h4>
                <Hightlight>
                    {`import styles from 'react-uikits/less/main.less'`}
                </Hightlight>
                <br/>

                <h4>使用组件</h4>
                <Hightlight>
                    {`<Pagination />`}
                </Hightlight>
                <Hightlight>
                    {`<Pagination current={3} />`}
                </Hightlight>
                <Hightlight>
{`<RadioGroup value="a">
    <Radio value="a">apple</Radio>
    <Radio value="b">banana</Radio>
    <Radio value="c">cat</Radio>
</RadioGroup>
`}
                </Hightlight>
                <br/>

                <p>
                    <span>Github 地址: </span> 
                    <a href="https://github.com/jerryshew/react-uikits" target="_blank">
                        https://github.com/jerryshew/react-uikits
                    </a>
                </p>
            </section>

        );
    }
}
