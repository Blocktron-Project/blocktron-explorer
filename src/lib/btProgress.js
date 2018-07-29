/**
 * Custom NProgress module to be used on browser with contextual export
 * @namespace _bt
 */
let btProgress = {
  init: () => {
    NProgress.configure({
      minimum: 0.08,
      easing: 'ease',
      speed: 500,
      trickle: true,
      parent: 'body',
      showSpinner: false
    });
  },

  /**
   * Start progress
   */
  start: () => {
    NProgress.start();
  },

  /**
   * End progress
   */
  done: () => {
    NProgress.done();
  }
};

/**
 * Try adding to global window object
 */
try {
  window._bt.btProgress = btProgress;
} catch (e) {}

/**
 * Try exporting as a module
 */
try {
  module.exports = btProgress;
} catch (e) {}
