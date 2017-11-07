import React, { Component } from 'react';
import { Tooltip } from '../component/Tooltip';

export class TempPage extends Component {
    render() {
        const toolTipContent = <div>
                                    <h3>Tooltip 标题</h3>
                                    <p>Tooltip 内容: <span className="dot color-red">红色的</span></p>
                                </div>
        const content = <div>
                            <h3>内容区 标题</h3>
                            <p>内容区 内容: <span className="dot color-red">红色的</span></p>
                            <img 
                                src="https://raw.githubusercontent.com/jerryshew/design/master/png/ambition-morty.png" 
                                alt=""
                                style={{ width: "200px", border: "1px solid #222" }}
                            />
                        </div>
        return (
            <table className="dot center table">
                <thead>
                    <tr>
                        <th>
                            <Tooltip 
                                position='left'
                                content={toolTipContent}
                            >
                                <span>哈哈</span>
                            </Tooltip>
                        </th>
                        <th>
                            <Tooltip 
                                position='right'
                                content={toolTipContent}
                            >
                                <span>哈哈</span>
                            </Tooltip>
                        </th>
                        <th>
                            <Tooltip 
                                position='top'
                                content={toolTipContent}
                            >
                                <span>哈哈</span>
                            </Tooltip>
                        </th>
                        <th>
                            <Tooltip 
                                position='bottom'
                                content={toolTipContent}
                            >
                                <span>哈哈</span>
                            </Tooltip>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <Tooltip 
                                position='left'
                                content={toolTipContent}
                            >
                                {content}
                            </Tooltip>
                        </td>
                        <td>
                            <Tooltip 
                                position='right'
                                content={toolTipContent}
                            >
                                {content}
                            </Tooltip>
                        </td>
                        <td>
                            <Tooltip 
                                position='top'
                                content={toolTipContent}
                            >
                                {content}
                            </Tooltip>
                        </td>
                        <td>
                            <Tooltip 
                                position='bottom'
                                content={toolTipContent}
                            >
                                {content}
                            </Tooltip>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Tooltip 
                                position='left'
                                content={toolTipContent}
                            >
                                <span>内容</span>
                            </Tooltip>
                        </td>
                        <td>
                            <Tooltip 
                                position='right'
                                content={toolTipContent}
                            >
                                <span>内容</span>
                            </Tooltip>
                        </td>
                        <td>
                            <Tooltip 
                                position='top'
                                content={toolTipContent}
                            >
                                <span>内容</span>
                            </Tooltip>
                        </td>
                        <td>
                            <Tooltip 
                                position='bottom'
                                content={toolTipContent}
                            >
                                <span>内容</span>
                            </Tooltip>
                        </td>
                    </tr>
                </tbody>
            </table>
        );
    }
}
