define(['bower/react'], function (React) {
  'use strict';

  return React.createBackboneClass({
    componentDidMount: function () {
      this.getModel().fetch();
    },
    createEntry: function (entry) {
      return React.DOM.div(null,
        entry.get('brand') + ' ' + entry.get('model')
      );
    },
    render: function () {
      return React.DOM.div(null,
        'MODEL',
        this.createEntry(this.getModel())
      );
    }
  });
});