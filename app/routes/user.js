import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('user', params.user_id);
  },
  actions: {
    uploadFile(user, base64Img){
    debugger;
      user.set('avatar', base64Img);
      user.save();
      this.transitionTo('user', user.id);
    }
  }
});
