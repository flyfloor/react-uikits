import React, { Component } from 'react';
import {Calender} from 'react-ui-component';
import {NS} from '../constant';
import css from '../less/calender.less';

class UICalender extends Component {
    render() {
        const {props} = this
        return (
            <div className={`${NS} calender`}>
                <Calender {...props} />
            </div>
        );
    }
}


export default UICalender
