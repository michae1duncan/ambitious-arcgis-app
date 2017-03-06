import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    doSearch (q) {
      // NOTE: don't need to pass route name b/c same route
      this.transitionToRoute('items', {
        queryParams: { q }
      });
    }
  }

});
