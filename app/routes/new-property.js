import Ember from 'ember';

export default Ember.Route.extend({
  params: {},
  model() {
    var uid = this.get('session').content.uid;
    return this.store.findRecord('user', uid);
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
        features: collectedParams.features,
        images: collectedParams.images ? collectedParams.images : []
      };

      var newProperty = this.store.createRecord('property', params);
      var self = this;
      newProperty.save().then(function() {

        user.save();
        self.transitionTo('property', newProperty.id);
      }).catch(e => {console.log(e.errors)});
    }
  }
});
