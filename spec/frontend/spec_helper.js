//= require support/third_party_for_specs
//= require support/prop_types
//= require support/mock_react_router
//= require support/magic_lamp
//= require module
//= require_self
//= require support/utils
/* global window*/

expect = window.chai.expect;

(function () {
  'use strict';

  MagicLamp.preload();

  beforeEach(function () {
    this.sandbox = sinon.sandbox.create();
    this.sandbox.stub(window.console, 'warn', function (message) {
      throw message;
    });
  });

  afterEach(function () {
    this.sandbox.restore();
    MagicLamp.clean();
  });
})();
