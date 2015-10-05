import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',
  actions: {
    signUp: function(){
      var params = {
        email: this.get('email'),
        password: this.get('password')
      }
      this.sendAction('signUp', params)
    }
  }
});
