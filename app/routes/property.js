import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    var uid = this.get('session').content.uid;
    return Ember.RSVP.hash({
      user: this.store.findRecord('user', uid),
      property: this.store.findRecord('property', params.property_id)
    });
  },
  actions: {
    newEvent(eventData, property) {
      // var params = {
      //   location: property.get('location'),
      //   type: property.get('type'),
      //   user: property.get('user'),
      //   dates: property.get('dates'),
      //   features: property.get('features'),
      //   images: property.get('images'),
      //   address: property.get('address'),
      //   description: property.get('description'),
      //   lat: property.get('lat'),
      //   lng: property.get('lng'),
      //   reservations: property.get('reservations')
      // };
      //
      // Object.keys(params).forEach(function(key){
      //   if(params[key] !== undefined){
      //     // property[key] = params[key];
      //     property.set(key, params[key]);
      //   }
      // });
      //
      //
      // var oldRez = property.get('reservations');
      // var newRez = oldRez !== undefined ? oldRez.push(eventData) : [eventData];
      // property.set('reservations', newRez);

      // property['reservations'] !== '' ? property['reservations'].push(eventData) : property['reservations'] = [eventData];
      // var self = this;
      debugger;
      // property.save().then(function() {
      //   self.transitionTo('property', property.id);
      // }).catch(e => {console.log(e.errors);});
      property.save().catch(e => {console.log(e.errors);});
      // this.transitionTo('property', property.id);
    }
  }
});
