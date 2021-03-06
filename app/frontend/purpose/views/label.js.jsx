//= require ../flux/store

App.Purpose.Label = (function () {
  'use strict';

  return React.createClass({
    mixins: [
      React.addons.PureRenderMixin,
      React.BindMixin(App.Purpose.Store, 'getStateFromStore')
    ],

    propTypes: {
      id: React.PropTypes.string.isRequired
    },

    getStateFromStore: function (props) {
      return {
        purpose: App.Purpose.Store.get(props.id)
      };
    },

    _getLabelClass: function () {
      return 'label-' + this.state.purpose.id;
    },

    render: function () {
      return (
        <ReactRouter.Link
          to={'purposes/' + this.state.purpose.id}
          className={'purpose-label label ' + this._getLabelClass()}
          >
          {this.state.purpose.name}
        </ReactRouter.Link>
      );
    }
  });
})();
