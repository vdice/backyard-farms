import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.findRecord('property', params.property_id)
  },
  actions: {
    bookProperty(params, property){
      debugger;
      property.set('reservations', params['startingDate']);
      this.currentModel.save().catch(e => {console.log(e.errors)});
      this.transitionTo()
    }
  }
});
