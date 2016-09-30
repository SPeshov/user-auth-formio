(function() {
  'use strict';

  angular
    .module('gselfie')
    .run(runBlock);

  /** @ngInject */

  function runBlock(FormioAuth) {
    FormioAuth.init();
  }
})();
