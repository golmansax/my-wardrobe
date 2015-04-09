//= require ./index
//= require ./attributes

App.ClothingItem.ViewModel = (function () {
  'use strict';

  var ClothingItemViewModel = Immutable.Record(App.ClothingItem.Attributes);
  _(ClothingItemViewModel.prototype).extend({
    name: function () {
      return this.brand + ' ' + this.model;
    }
  });

  return ClothingItemViewModel;
})();