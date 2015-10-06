import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('user', params.user_id);
  },
  actions: {
    uploadFile(user, base64Img){
      user.set('avatar', base64Img);
      user.save();
      this.transitionTo('index');
    }
  }
});
