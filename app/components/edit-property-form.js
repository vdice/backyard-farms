import Ember from 'ember';

export default Ember.Component.extend({
  collectedParams: {},
  actions: {
    collectParams(key, value){
      this.collectedParams[key] = value;
      console.log(this.collectedParams);
    },

    uploadFile(user, base64Img){
      this.collectedParams['images'] ? this.collectedParams['images'].push(base64Img) : this.collectedParams['images'] = [base64Img];
    },

    editProperty(property) {
      var params = {
        location: this.collectedParams.location,
        type: this.collectedParams.propertyType,
        features: this.collectedParams.features || [],
        images: this.collectedParams.images ? this.collectedParams.images : [],
        address: this.get('address'),
      };

      var self = this;
      if (params.address){
        $.ajax({
          url: 'https://maps.googleapis.com/maps/api/geocode/json',
          type: 'GET',
          data: 'address=' + params.address.replace(/\s/g,'+') + '&key=AIzaSyAy1AZgshJ0GIrIZK4-k8Awvnf_m2CrgdA',
          success: function(result) {
            params.lat = result.results[0].geometry.location.lat;
            params.lng = result.results[0].geometry.location.lng;
            self.sendAction('editProperty', params, property);
            }
        });
      } else {
        self.sendAction('editProperty', params, property);
      }
    }
  }
});