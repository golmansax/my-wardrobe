//= require models/clothing_item

describe('models/clothing_item', function () {
  'use strict';

  var clothingItem;
  var server;

  before(function () { server = sinon.fakeServer.create(); });
  after(function () { server.restore(); });

  beforeEach(function () {
    clothingItem = new App.ClothingItem({
      id: '77',
      brand: 'Uniqlo',
      model: 'Down Jacket',
    }, { parse: true });
  });

  describe('#parse', function () {
    it('adds name to the attributes', function () {
      expect(clothingItem.get('name')).to.equal('Uniqlo Down Jacket');
    });
  });

  describe('#isValid', function () {
    it('returns false when name is empty', function () {
      expect(new App.ClothingItem().isValid()).to.be.false();
    });

    it('returns true when name is present', function () {
      expect(clothingItem.isValid()).to.be.true();
    });
  });

  describe('#fetch', function () {
    it('grabs the data from the proper url', function () {
      clothingItem.fetch();
      expect(server.requests[0].url).to.equal('/clothing_items/77');
    });
  });
});
