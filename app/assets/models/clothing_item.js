define(['bower/backbone'], function (Backbone) {
  'use strict';

  return Backbone.Model.extend({
    defaults: {
      id: null,
      brand: '',
      model: '',
      firstPurchaseDate: null,
      recentPurchaseDate: null
    },
    url: function () {
      return 'clothing_items/' + (this.id || '');
    }
  });
});