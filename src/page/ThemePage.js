import React, { Component } from 'react';
import Hightlight from "react-highlight"
import {CN, TitleBlock} from '../util/tools';
import CodeView from './CodeView';

export class ThemePage extends Component {
  render() {
    return (
      <section>
        {TitleBlock('主题')}
        <h4>主题颜色切换</h4>
        <pre className="color-red text-major">更换主题主要是可以通过less变量覆盖</pre>
        <p>
          在引用组件样式外，提供less变量
          <i className={CN('color-red')}>@primaryColor</i>
          来控制主色调及
          <i className={CN('color-red')}>@mildColor</i>
          实现辅助色调的改变。
          例如在项目中：main.less:
        </p>
        <Hightlight>
{`@import '~react-uikits/less/main.less'

/* override style*/

@primaryColor: #13152e;
@mildColor: #f8f8f8;

`}
        </Hightlight>
        <p>即可得到主色调为绿色的主题效果</p>
      </section>
    );
  }
}
