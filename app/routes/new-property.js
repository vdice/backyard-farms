import Ember from 'ember';

export default Ember.Route.extend({
  params: {},
  actions: {
    collectParams(key, value){
      this.params[key] = value;
      console.log(this.params);
    },

    addProperty(){
      // location: DS.attr(),
      // type: DS.attr(),
      // user: DS.belongsTo('user', {async:true}),
      // dates: DS.attr(),
      // features: DS.attr(),
      // image: DS.attr(),
      var collectedParams = this.params;
      var params = {
        location: collectedParams.location,
        type: collectedParams.propertyType,
        user: 'blay',
        dates: 'blay',
        features: collectedParams.features,
        image: 'blay'
      };

      var newProperty = this.store.createRecord('property', params);
      newProperty.save();
      // TODO transition to newly created property page
      this.transitionTo('index')
    }
  }
});
