//= require components/purpose/label
//= require components/purchase_grid
//= require stores/purpose_store

App.PurposeRoute = (function () {
  'use strict';

  return React.createClass({
    mixins: [
      React.addons.PureRenderMixin,
      React.BindMixin(App.PurposeStore, 'getStateFromStore')
    ],

    propTypes: {
      id: PropTypes.string.isRequired
    },

    getStateFromStore: function (props) {
      return {
        purpose: App.PurposeStore.get(props.id)
      };
    },

    render: function () {
      return (
        <div>
          <h1>
            <App.Purpose.Label id={this.state.purpose.id} />
          </h1>
          <br />
          <App.PurchaseGrid ids={this.state.purpose.purchaseIds} />
        </div>
      );
    }
  });
})();