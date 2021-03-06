//= require purchase/views/table_from_models
//= require purchase/flux/store

App.Pages.NonEssentialsRoute = (function () {
  'use strict';

  return React.createClass({
    mixins: [
      React.addons.PureRenderMixin,
      React.BindMixin(App.Purchase.Store, 'getStateFromStore')
    ],

    getStateFromStore: function () {
      return {
        purchases: App.Purchase.Store.getAll()
      };
    },

    _purchaseSortByDate: function (purchaseA, purchaseB) {
      var momentA = purchaseA.moment();
      var momentB = purchaseB.moment();

      if (momentA.isAfter(momentB)) {
        return -1;
      } else if (momentB.isAfter(momentA)) {
        return 1;
      } else {
        return 0;
      }
    },

    render: function () {
      var groupedPurchases = this.state.purchases.groupBy(function (purchase) {
        return purchase.group();
      });

      var specializedPurchases = groupedPurchases.get('specialized');
      var backupPurchases = groupedPurchases.get('backup');
      var notInUsePurchases = groupedPurchases.get('not-in-use');

      return (
        <div>
          <h1>Specialized Clothing ({specializedPurchases.size})</h1>
          <br />
          <App.Purchase.TableFromModels purchases={specializedPurchases} />
          <br />
          <h1>Backup Clothing ({backupPurchases.size})</h1>
          <br />
          <App.Purchase.TableFromModels purchases={backupPurchases} />
          <br />
          <h1>Not in Use Anymore ({notInUsePurchases.size})</h1>
          <br />
          <App.Purchase.TableFromModels purchases={notInUsePurchases} />
        </div>
      );
    }
  });
})();
