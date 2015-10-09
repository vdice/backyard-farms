import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    showMap(model) {
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: {lat: model.get('lat'), lng: model.get('lng')}
      });

      var marker = new google.maps.Marker({
        position: {lat: model.get('lat'), lng: model.get('lng')},
        animation: google.maps.Animation.DROP,
        map: map,
        title: model.get('type'),
      });
    }
  }
});
