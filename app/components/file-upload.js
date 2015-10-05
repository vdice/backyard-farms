import Ember from 'ember';

export default Ember.Component.extend({
  actions : {
    uploadFile(user) {
      var file    = document.querySelector('#img-upload').files[0];
      var reader  = new FileReader();
      var self = this

      reader.onloadend = function () {
        var base64Img = reader.result;
        self.sendAction('uploadFile', user, base64Img)
      }
      reader.readAsDataURL(file);
    }
  }
});
