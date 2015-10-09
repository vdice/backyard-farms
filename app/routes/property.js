import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    var uid = this.get('session').content.uid;
    return Ember.RSVP.hash({
      user: this.store.findRecord('user', uid),
      property: this.store.findRecord('property', params.property_id)
    });
  }
});
