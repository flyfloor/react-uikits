import React, { Component } from 'react';
import Hightlight from "react-highlight";

export default class CodeView extends Component {
    render() {
        const {children} = this.props
        return (
            <Hightlight>
                {children}
            </Hightlight>
        );
    }
}
