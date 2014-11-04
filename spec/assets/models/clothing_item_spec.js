define([
  'models/clothing_item', 'bower/moment', 'bower/sinon'
], function (ClothingItem, moment, sinon) {
  'use strict';

  describe('models/clothing_item', function () {
    var clothingItem;
    var server;

    before(function () { server = sinon.fakeServer.create(); });
    after(function () { server.restore(); });

    beforeEach(function () {
      clothingItem = new ClothingItem({
        id: '77',
        brand: 'Uniqlo',
        model: 'Down Jacket',
        firstPurchaseDate: '2014-10-30'
      }, { parse: true });
    });

    describe('#parse', function () {
      it('adds name to the attributes', function () {
        expect(clothingItem.get('name')).to.equal('Uniqlo Down Jacket');
      });

      it('makes firstPurchaseDate a moment', function () {
        var firstPurchaseDate = clothingItem.get('firstPurchaseDate');
        expect(firstPurchaseDate).to.be.instanceof(moment.fn.constructor);
      });
    });

    describe('#isValid', function () {
      it('returns false when name is empty', function () {
        expect(new ClothingItem().isValid()).to.be.false;
      });

      it('returns true when name is present', function () {
        expect(clothingItem.isValid()).to.be.true;
      });
    });

    describe('#fetch', function () {
      it('grabs the data from the proper url', function () {
        clothingItem.fetch();
        expect(server.requests[0].url).to.equal('/clothing_items/77');
      });
    });
  });
});
