import React, { Component } from 'react';
import Calender from '../component/Calender';
import CodeView from '../component/CodeView';

export default class CalenderPage extends Component {
    render() {
        return (
            <section>
                <h2>日历</h2>
                <br/>
                <Calender />
                <CodeView>
                    {`
                        <section>
                            <p class="user">feawf</p>
                        </section>
                    `}
                </CodeView>
            </section>
        );
    }
}
