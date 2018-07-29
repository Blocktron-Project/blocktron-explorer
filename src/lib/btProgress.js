(function (namespace) {

  let btProgress = {
    start: function () {
      NProgress.start();
    },
    done: function () {
      NProgress.done();
    }
  };

  namespace.btProgress = btProgress;

})(window._bt || (window._bt = {}));

/**
 * TODO: Contextual loading : AMD/UMD/MODULE/WINDOW object
 */