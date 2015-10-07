import Ember from 'ember';

export default Ember.Route.extend({
  params: {},
  model() {
    var uid = this.get('session').content.uid;
    return Ember.RSVP.hash({
      user: this.store.findRecord('user', uid),
      locations: this.store.findAll('location')
    });
  },
  actions: {
    collectParams(key, value){
      this.params[key] = value;
      console.log(this.params);
    },

    uploadFile(user, base64Img){
      this.params['images'] ? this.params['images'].push(base64Img) : this.params['images'] = [base64Img];
    },

    addProperty(user){
      var collectedParams = this.params;
      var params = {
        location: collectedParams.location,
        type: collectedParams.propertyType,
        user: user,
        dates: new Date(),
        description: collectedParams.description,
        features: collectedParams.features,
        images: collectedParams.images ? collectedParams.images : [],
        ratings: []
      // debugger;
      };

      var newProperty = this.store.createRecord('property', params);
      var self = this;
      newProperty.save().then(function() {
        user.save();
        params.location.save();
        self.transitionTo('property', newProperty.id);
      }).catch(e => {console.log(e.errors)});
    }
  }
});
