import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    var uid = this.get('session').content.uid;
    return Ember.RSVP.hash({
      user: uid ? this.store.findRecord('user', uid) : 'Anonymous',
      property: this.store.findRecord('property', params.property_id)
    });
  }
});
