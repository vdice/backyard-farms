import Ember from 'ember';

export default Ember.Component.extend({
  actions : {

    uploadFile(user) {
      var preview = document.querySelector('img');
      var file    = document.querySelector('input[type=file]').files[0];
      var reader  = new FileReader();
      var self = this

      reader.onloadend = function () {
        var base64Img = reader.result;
        self.sendAction('uploadFile', user, base64Img)
      }

      if (file) {
       reader.readAsDataURL(file);
      } else {
        preview.src = "";
      }

    }
  }
});
