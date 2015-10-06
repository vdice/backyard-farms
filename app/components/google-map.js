import Ember from 'ember';

export default Ember.Component.extend({
  map: Ember.inject.service('google-map'),

  actions: {
    showMap(propertyLocation) {
      // debugger;
      // var options = {
      //   latitude: location.get('latitude'),
      //   longitude: location.get('longitude'),
      // };
      // var map = new google.maps.Map(document.getElementById('map'), {
      //   zoom: 4,
      //   center: {lat: -25.363, lng: 131.044},
      // });

      // var container = this.$('.map-display')[0];
      //
      // this.get('map').findMap(container, options);

      function initMap(model) {
        debugger;
        var lat = model.properties.first.latitude;
        var lng = model.properties.first.longitude;

        var myLatLng = {lat: lat, lng: lng};

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: myLatLng
        });

        var marker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          title: 'Hello World!'
        });
      }
      initMap();
    }
  }
});
