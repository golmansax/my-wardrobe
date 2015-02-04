App.BackboneStoreFactory = function (MyCollection) {
  'use strict';

  var EVENTS = 'add remove change reset sort';

  var _storage = new MyCollection();
  var _fetchedModels = {};
  var _fetchedAll = false;

  return _(this).extend({
    getAll: function () {
      if (!_fetchedAll) {
        _storage.fetch({ reset: true });
        _fetchedAll = true;
      }

      return _storage.toJSON();
    },

    _add: function (model) {
      _storage.add(model, { merge: true, silent: true });
      _storage.trigger('change');
    },

    get: function (id) {
      var model = _storage.get(id)

      if (!_(_fetchedModels).has(id)) {
        model = model || new _storage.model({ id: id });
        model.fetch({ success: this._add });
        _fetchedModels[id] = true;
      } else if (!model) {
        return null;
      }

      return model.toJSON();
    },

    addChangeListener: function (callback) {
      _storage.on(EVENTS, callback);
    },

    removeChangeListener: function (callback) {
      _storage.off(EVENTS, callback);
    }
  });
};