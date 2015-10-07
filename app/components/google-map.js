import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    showMap(model) {
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: {lat: model.get('lat'), lng: model.get('lng')}
      });
      setMarkers(map);

      function setMarkers(map) {
        var beaches = [
          ['Bondi Beach', -33.890542, 151.274856],
          ['Coogee Beach', -33.923036, 151.259052],
          ['Cronulla Beach', -34.028249, 151.157507],
          ['Manly Beach', -33.80010128657071, 151.28747820854187],
          ['Maroubra Beach', -33.950198, 151.259302]
        ];
        beaches.forEach(function(beach){
          var marker = new google.maps.Marker({
            position: {lat: beach[1], lng: beach[2]},
            map: map,
            title: beach[0],
          });
        })
      }
    }
  }
});
