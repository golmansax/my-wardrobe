//= require views/clothing_item/detailed_view
//= require stores/clothing_item_store

App.ClothingItemRoute = (function () {
  'use strict';

  return React.createClass({
    mixins: [
      React.addons.PureRenderMixin,
      React.BindMixin(App.ClothingItemStore, 'getStateFromStore')
    ],

    propTypes: {
      id: PropTypes.string.isRequired
    },

    getStateFromStore: function (props) {
      return {
        clothingItem: App.ClothingItemStore.get(props.id)
      };
    },

    render: function () {
      return (
        <App.ClothingItem.DetailedView clothingItem={this.state.clothingItem} />
      );
    }
  });
})();
