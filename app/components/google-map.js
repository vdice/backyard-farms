import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    showMap(model) {
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: {lat: model.get('lat'), lng: model.get('lng')}
      });
      setMarkers(map, model);

      function setMarkers(map, model) {
        model.get('properties').forEach(function(property){
          var marker = new google.maps.Marker({
            position: {lat: property.get('lat'), lng: property.get('lng')},
            animation: google.maps.Animation.DROP,
            map: map,
            title: property.get('type'),
          });
        });
      }
    }
  }
});
