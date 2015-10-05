import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',
  actions: {
    signIn: function(){
      var params = {
        email: this.get('email'),
        password: this.get('password')
      }
      this.sendAction('signIn', params)
    }
  }
});
