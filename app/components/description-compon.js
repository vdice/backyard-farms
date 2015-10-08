import Ember from 'ember';

export default Ember.Component.extend({
  readAll: false,
  model(params) {
    return this.store.findRecord('property', params.property_id)
  },
  actions: {
    expand() {
      this.set('readAll', true);
    },
    collapse() {
      this.set('readAll', false);
    }
  }
});
