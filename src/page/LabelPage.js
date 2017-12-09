import React, { Component } from 'react';
import {CN, TitleBlock} from '../util/tools';
import {NS, COLORS} from '../constant';
import CodeView from './CodeView';

const makeSizeLabels = (cn='') => {
    return <div className={CN(`${cn} icon label`)}>
                <i className="icon">person</i>
                <span>{cn ? cn : 'label'}</span>
            </div>;
}

const colorLabels = (cn='') => {
    return <div className="field">
            {COLORS.map((color, index) => {
                return <div key={`${cn}-icon-${color}-label`} className={CN(`${cn} icon ${color} label`)}>
                            <i className="icon">photo_camera</i>
                            <span>{color}</span>
                        </div>;
            })}
        </div>
}

const makeLabelGroups = (cn='') => {
    return <div className={CN(`${cn} label-group`)}>
                <div className="label">
                    {cn ? cn : 'label'}
                </div>
                <div className={CN('icon label')}>
                    <span>{cn ? cn : 'label'}</span>
                    <i className="icon">close</i>
                </div>
                <div className={CN('round icon label')}>
                    <i className="icon">fullscreen</i>
                    <span>{cn ? cn : 'label'}</span>
                </div>
            </div>;
}

export class LabelPage extends Component {
    render() {
        return (
            <div className="label-example">
                {TitleBlock('标签')}
                <ul>
                    <li>
                        <h4>Label</h4>
                        <div className="field">
                            <CodeView component={
                                <div>
                                    <div className={CN('label')}>
                                        label
                                    </div>
                                    <div className={CN('icon label')}>
                                        <span>label</span>
                                        <i className="icon">close</i>
                                    </div>
                                    <div className={CN('icon label')}>
                                        <i className="icon">close</i>
                                        <span>label</span>
                                    </div>
                                </div>
                            }>
{`<div class="${NS} label">label</div>

<div class="${NS} label">
    <span>label</span>
    <i class="icon">close</i>
</div>

<div class="${NS} icon label">
    <i class="icon">close</i>
    <span>label</span>
</div>
`}
                            </CodeView>
                            <br/>
                        </div>
                        <div className="field">
                            <h4>带图片标签</h4>
                            <CodeView component={
                                <div>
                                    <div className={CN('image label')}>
                                        <img src="http://braavos.me/dot-css/dist/img/avatar.png" className={CN('image')} alt=""/>
                                        <span>label</span>
                                    </div>
                                    <div className={CN('image label')}>
                                        <span>label</span>
                                        <img src="http://braavos.me/dot-css/dist/img/avatar.png" className={CN('image')} alt=""/>
                                    </div>
                                </div>
                            }>
{`<div class="${NS} image label">
    <img src="" alt="" />
    <span>label</span>
</div>

<div class="${NS} image label">
    <span>label</span>
    <img src="" alt="" />
</div>
`}                                    
                            </CodeView>
                            <br/>
                        </div>
                        <div className="field">
                            <h4>带颜色的标签</h4>
                            <CodeView component={
                                colorLabels()
                            }>
{`<div class="${NS} red label">label</div>

<div class="${NS} icon red label">
    <i class="icon">photo_camera</i>
    <span>label</span>
</div>
`}
                            </CodeView>
                            <br/>

                            <h4>基本带颜色的标签</h4>
                            <CodeView component={
                                colorLabels('basic')
                            }>
{`<div class="${NS} basic red label">label</div>

<div class="${NS} icon basic red label">
    <i class="icon">photo_camera</i>
    <span>label</span>
</div>`}
                            </CodeView>
                            <br/>

                        </div>
                        <div className="field">
                            <h4>圆形标签</h4>
                            <CodeView component={
                                <div>
                                    <div className={CN('circle label')}>
                                        <i className="icon">share</i>
                                    </div>
                                    <div className={CN('circle red label')}>
                                        <i className="icon">close</i>
                                    </div>
                                    <div className={CN('circle green basic label')}>
                                        <i className="icon">check</i>
                                    </div>
                                </div>
                            }>
{`<div class="${NS} circle label">
    <i class="icon">share</i>
</div>

<div class="${NS} circle red label">
    <i class="icon">share</i>
</div>

<div class="${NS} circle green basic label">
    <i class="icon">share</i>
</div>`}                                    
                            </CodeView>
                            <br/>
                        </div>
                        <div className="field">
                            <h4>圆角标签</h4>
                            <CodeView component={
                                <div>
                                    <div className={CN('round icon label')}>
                                        <i className="icon">share</i>
                                        <span>share</span>
                                    </div>
                                    <div className={CN('round red icon label')}>
                                        <span>close</span>
                                        <i className="icon">close</i>
                                    </div>
                                    <div className={CN('round green basic icon label')}>
                                        <i className="icon">check</i>
                                        <span>check</span>
                                    </div>
                                </div>
                            }>
{`<div class="${NS} circle label">
    <i class="icon">share</i>
</div>

<div class="${NS} round icon label">
    <i class="icon">check</i>
    <span>label</span>
</div>

<div class="${NS} round green basic icon label">
    <i class="icon">check</i>
    <span>label</span>
</div>`}                                    
                            </CodeView>
                            <br/>
                        </div>
                        <h4>标签尺寸</h4>
                        <div className="field">
                            <CodeView component={
                                <div>
                                    {makeSizeLabels('tiny')}
                                    {makeSizeLabels('small')}
                                    {makeSizeLabels('')}
                                    {makeSizeLabels('large')}
                                    {makeSizeLabels('huge')}
                                </div>
                            }>
                                {`<div class="${NS} tiny label">label</div>`}
                            </CodeView>
                        </div>
                        <br/>

                        <h4>标签组</h4>
                        <CodeView component={
                            <div>
                                {makeLabelGroups('tiny')}
                                {makeLabelGroups('small')}
                                {makeLabelGroups()}
                                {makeLabelGroups('large')}
                                {makeLabelGroups('huge')}
                            </div>
                        }>
{`<div class="${NS} large label-group">
    <div class="label">label</div>
    <div class="icon label">
        <i class="icon">check</i>
        <span>label</span>
    </div>
    <div class="label">label</div>
</div>`}                                
                        </CodeView>
                        <br/>
                    </li>
                </ul>
            </div>
        );
    }
}