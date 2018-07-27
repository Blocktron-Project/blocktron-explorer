(function (namespace) {

  function levelClass(level = 'info') {

    let classNames = {
      'info': '',
      'success': 'light-green darken-2',
      'warn': 'orange darken-2',
      'error': 'red darken-2'
    };
    return classNames[level] || classNames['info'];
  }

  function btToast(message = '', options = {}) {
    options = Object.assign({
      displayLength: 4000,
      inDuration: 300,
      outDuration: 375,
      classNames: '',
      activationPercent: 0.8,
      level: 'info',
      onDismissed: function () {}
    }, options);
    options.classNames = `${options.classNames} ${levelClass(options.level)}`.trim();
    M.toast({
      html: message,
      displayLength: options.displayLength,
      inDuration: options.inDuration,
      outDuration: options.outDuration,
      classes: options.classNames,
      completeCallback: options.onDismissed,
      activationPercent: options.activationPercent
    });
  };

  namespace.btToast = btToast;

})(window._bt || (window._bt = {}));
