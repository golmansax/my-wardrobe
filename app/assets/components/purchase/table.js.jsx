//= require ./table_row

App.Purchase.Table = (function () {
  'use strict';

  return React.createClass({
    mixins: [React.addons.PureRenderMixin],

    propTypes: {
      purchases: PropTypes.instanceOf(Immutable.Iterable)
    },

    _renderPurchases: function () {
      return this.props.purchases.valueSeq().map(function (purchase) {
        return (
          <App.Purchase.TableRow
            purchase={purchase}
            key={purchase.id}
          />
        );
      }).toJS();
    },

    render: function () {
      return (
        <table className='table clothing-item-table'>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Usage</th>
            <th>Version</th>
            <th>Purchase Date</th>
          </tr>
          <tbody>{this._renderPurchases()}</tbody>
        </table>
      );
    }
  });
})();