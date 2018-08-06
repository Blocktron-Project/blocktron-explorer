/**
 * Blocktron Explorer
 * The web-ui for exploring Blocktron blockchain. Seamlessly interact with your 
 * Blocktron-node instance using blocktron-explorer.
 * Written by: Sandeep Vattapparambil
 * Email: sandeepv68@gmail.com
 * Website: www.sandeepv.in
 */

 /**
  * Import React libraries
  */
import React from 'react';
import ReactDOM from 'react-dom';

/**
 * Import main css
 */
import './index.css';

/**
 * Import top level components
 */
import Header from './components/app-header/header';
import Body from './components/app-body/body';

/**
 * Import custom libraries
 */
import lib from './lib/index';
import btProgress from './lib/btProgress';

/**
 * Import Service Worker
 */
import registerServiceWorker from './registerServiceWorker';

/**
 * Initialize btProgress loader
 */
btProgress.init();
btProgress.start();

/**
 * Render the top level components on to the Shadow DOM
 */
ReactDOM.render(< Header />, document.getElementById('header'));
ReactDOM.render(< Body />, document.getElementById('body'));

/**
 * Register the service worker
 */
registerServiceWorker();
