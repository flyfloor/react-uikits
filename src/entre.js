require("babel-polyfill");
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import RootComponent from './RootComponent';
import dot from './page/demo.less'

if (module.hot) {
    module.hot.accept()
}

ReactDOM.render(<RootComponent/>, document.getElementById('root'))