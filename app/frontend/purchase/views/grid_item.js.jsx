//= require ../flux/store
//
//= require clothing_item/flux/store

App.Purchase.GridItem = (function () {
  'use strict';

  return React.createClass({
    mixins: [
      React.addons.PureRenderMixin,
      React.BindMixin(App.Purchase.Store, 'getStateFromStore')
    ],

    propTypes: {
      id: React.PropTypes.number.isRequired
    },

    getStateFromStore: function (props) {
      return {
        purchase: App.Purchase.Store.get(props.id)
      };
    },

    render: function () {
      var clothingItemId = this.state.purchase.clothingItemId;
      var clothingItem = App.ClothingItem.Store.get(clothingItemId);

      return (
        <div>
          <ReactRouter.Link to={'/clothing/' + clothingItemId}>
            {clothingItem.name()}
          </ReactRouter.Link>
          <img className='img-responsive' src={clothingItem.imagePath} />
        </div>
      );
    }
  });
})();
