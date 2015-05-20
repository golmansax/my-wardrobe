//= require flux/clothing_item/collection

describe('flux/clothing_item/collection', function () {
  'use strict';

  var clothingItems;
  var server;

  beforeEach(function () { server = sinon.fakeServer.create(); });
  afterEach(function () { server.restore(); });

  beforeEach(function () {
    clothingItems = new App.ClothingItem.Collection();
  });

  describe('#fetch', function () {
    it('grabs the data from the proper url', function () {
      clothingItems.fetch();
      expect(server.requests[0].url).to.equal('/clothing_items');
    });

    it('sorts it by name in ascending order', function () {
      clothingItems.fetch();

      server.requests[0].respond(
        200,
        { 'Content-Type': 'application/json' },
        MagicLamp.rawJson('clothing_items/index')
      );

      var expectedModels = ['Down Jacket', 'ROM Jacket'];
      expect(clothingItems.pluck('model')).to.deep.equal(expectedModels);
    });
  });
});
