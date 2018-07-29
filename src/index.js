import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/app-header/header';
import Body from './components/app-body/body';
import lib from './lib/index';
import btProgress from './lib/btProgress';
import registerServiceWorker from './registerServiceWorker';

btProgress.init();
btProgress.start();

ReactDOM.render(< Header />, document.getElementById('header'));
ReactDOM.render(< Body />, document.getElementById('body'));
registerServiceWorker();
