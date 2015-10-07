import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    var uid = this.get('session').content.uid;
    return Ember.RSVP.hash({
      user: this.store.findRecord('user', uid),
      locations: this.store.findAll('location')
    });
  },
  actions: {
    addProperty(params){
      var newProperty = this.store.createRecord('property', params);
      var self = this;
      debugger;
      newProperty.save().then(function() {
        params.user.save().catch(e => {console.log(e.errors)});
        params.location.save();
        self.transitionTo('property', newProperty.id);
      }).catch(e => {console.log(e.errors)});
    }
  }
});
