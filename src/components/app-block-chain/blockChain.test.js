import React from 'react';
import ReactDOM from 'react-dom';
import App from './blockChain';
import lib from '../../lib';

if (!window.NProgress) {
  window.NProgress = require('../../../public/js/nprogress');
}

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render( <App /> , div);
  ReactDOM.unmountComponentAtNode(div);
});
