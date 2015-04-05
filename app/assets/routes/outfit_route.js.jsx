//= require components/outfit_view
//= require stores/outfit_store

App.OutfitRoute = (function () {
  'use strict';

  return React.createClass({
    mixins: [
      React.addons.PureRenderMixin,
      React.BindMixin(App.OutfitStore, 'getStateFromStore')
    ],

    propTypes: {
      id: PropTypes.string.isRequired
    },

    getStateFromStore: function (props) {
      return {
        outfit: App.OutfitStore.get(props.id)
      };
    },

    render: function () {
      return (
        <div>
          <h1>{this.state.outfit.name}</h1>
          <br />
          <App.OutfitView outfit={this.state.outfit} />
        </div>
      );
    }
  });
})();
