import React, { Component } from 'react';
import Hightlight from "react-highlight";
import {CN, TitleBlock} from '../util/tools';
import {NS, COLORS} from '../constant';
import CodeView from './CodeView';

const makeImage = (cn) => {
    return  <div>
                <h4>{`图片尺寸: ${cn}`}</h4>
                <div className={CN(`${cn} image`)}>
                    <img src="http://braavos.me/dot-css/dist/img/img.png"/>
                </div>
            </div>
};

export class ImagePage extends Component {
    render() {
        return (
            <div>
                {TitleBlock('图片')}
                <Hightlight>
                    <p>两种使用方式</p>
                    <ol>
                        <li>{`<img src="image.png" className="${NS} image"/>`}</li>
                        <li>
                            <div>{`<div className="${NS} image">`}</div>
                            <div>{`    <img src="image.png"/>`}</div>
                            <div>{`</div>`}</div>
                        </li>
                    </ol>
                </Hightlight>
                <ul>
                    <li>
                        <h4>图片</h4>
                        <CodeView component={
                            <div>
                                <img src="http://braavos.me/dot-css/dist/img/img.png" className={CN('mini image')}/>
                                {makeImage('tiny')}
                                {makeImage('small')}
                                {makeImage('middle')}
                                {makeImage('large')}
                                {makeImage('big')}
                                {makeImage('huge')}
                                {makeImage('massive')}
                            </div>
                        }>
                            {`<img src="" className="${NS} small image" />`} 
                        </CodeView>
                        <br/>

                        <h4>圆角图片</h4>
                        <CodeView component={
                            <div className={CN('round image')}>
                                <img src="http://braavos.me/dot-css/dist/img/img0.png"/>
                            </div>
                        }>
{`<div className="${CN('round image')}">
    <img src="http://braavos.me/dot-css/dist/img/img0.png"/>
</div>
`}                            
                        </CodeView>
                        <br/>

                        <h4>Fluid 图片</h4>
                        <CodeView component={
                            <div className={CN('fluid image')}>
                                <img src="http://braavos.me/dot-css/dist/img/img.png"/>
                            </div>
                        }>
{`<div className="${CN('fluid image')}">
    <img src="http://braavos.me/dot-css/dist/img/img.png"/>
</div>
`}                            
                        </CodeView>
                        <br/>
                    </li>
                    <li>
                        <h4>圆形图片</h4>
                        <CodeView component={
                            <div className={CN('circle tiny image')}>
                                <img src="http://braavos.me/dot-css/dist/img/avatar.png"/>
                            </div>
                        }>
{`<div className="${NS} circle tiny image">
    <img src="" alt="" />
</div>`}                                
                        </CodeView>
                        <br/>

                        <h4>圆形风景图片</h4>
                        <CodeView component={
                            <div className={CN('circle small landscape image')}>
                                <img src="http://braavos.me/dot-css/dist/img/img.png"/>
                            </div>
                        }>
{`<div className="${NS} circle small landscape image">
    <img src="" alt="" />
</div>`}                                
                        </CodeView>
                        <br/>

                        <h4>圆形人像图片</h4>
                        <CodeView component={
                            <div className={CN('circle small portrait image')}>
                                <img src="http://braavos.me/dot-css/dist/img/img0.png"/>
                            </div>
                        }>
{`<div className="${NS} circle small portrait image">
    <img src="" alt="" />
</div>`}                                
                        </CodeView>
                        <br/>
                    </li>
                </ul>
            </div>
        );
    }
}