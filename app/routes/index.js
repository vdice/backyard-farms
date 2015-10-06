import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    return this.get("session").fetch().catch(function() {});
  },
  model() {
    return Ember.RSVP.hash({
      users: this.store.findAll('user'),
      locations: this.store.findAll('location')
    });
  }
});
