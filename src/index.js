import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/app-header/header';
import Body from './components/app-body/body';
import btToast from './lib/btToast';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(< Header />, document.getElementById('header'));
ReactDOM.render(< Body />, document.getElementById('body'));
registerServiceWorker();
