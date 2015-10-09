import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
     previousImage(images) {
       var priorImage = images.pushObject(images.shiftObject());
     },
    nextImage(images) {

      var lastImage = images.unshiftObject(images.popObject());
    }
  }
});
