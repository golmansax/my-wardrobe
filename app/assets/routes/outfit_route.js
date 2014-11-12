define([
  'bower/react', 'models/outfit', 'components/outfit_view'
], function (React, Outfit, OutfitView) {
  'use strict';

  return React.createFactory(React.createBackboneClass({
    componentDidMount: function () {
      this.getModel().fetch();
    },
    render: function () {
      return React.DOM.div(null,
        'OUTFIT',
        OutfitView(this.getModel().attributes)
      );
    }
  }));
});
