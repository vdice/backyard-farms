import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('user', params.user_id);
  },
  showUploader: false,
  actions: {
    uploadFile(user, base64Img){
      user.set('avatar', base64Img);
      user.save();
      this.transitionTo('user', user.id);
    },
    deleteProperty(user, property){
      property.destroyRecord();
      user.save().catch(e => {console.log(e.errors)});
      this.transitionTo('user', user.id)
    },
    showDaUpload() {
      this.set('showUploader', true);
    },
  }
});
