import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('user', params.user_id);
  },
  showUploader: false,
  actions: {
    uploadFile(user, base64Img){
    debugger;
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
      debugger;
      this.set('showUploader', true);
    },
  }
});
