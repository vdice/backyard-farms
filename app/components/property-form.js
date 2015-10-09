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

    addProperty(user) {
      var params = {
        location: this.collectedParams.location,
        type: this.collectedParams.propertyType,
        user: user,
        dates: new Date(),
        features: this.collectedParams.features || null,
        images: this.collectedParams.images || null,
        address: this.get('address') || null,
        description: this.get('description') || '',
        lat: 0,
        lng: 0
      };

      var self = this;
      if (params.address) {
        $.ajax({
          url: 'https://maps.googleapis.com/maps/api/geocode/json',
          type: 'GET',
          data: 'address=' + params.address.replace(/\s/g,'+') + '&key=AIzaSyAy1AZgshJ0GIrIZK4-k8Awvnf_m2CrgdA',
          success: function(result) {
            params.lat = result.results[0].geometry.location.lat;
            params.lng = result.results[0].geometry.location.lng;
            self.sendAction('addProperty', params);
            }
        });
      } else {
          self.sendAction('addProperty', params);
      }
    }
  }
});
