import Ember from 'ember';
import config from '../config/environment';

var signIn = function(that, params) {
  var self = that;
  self.get('firebase').authWithPassword({
    email    : params.email,
    password : params.password
  }, function(error, authData) {
    if (error) {
      console.log("Login Failed!", error);
    } else {
      console.log("Authenticated successfully with payload:", authData);
      self.refresh();
    }
  });
}

export default Ember.Route.extend({
  firebase: null,

  beforeModel: function() {
    return this.get("session").fetch().catch(function() {});
  },

  actions: {
    signIn: function(provider) {
      this.get("session").open("firebase", { provider: provider}).then(function(data) {
        console.log(data.currentUser);
      });
    },

    signOut: function() {
      this.get("session").close();
    },

    signUp: function(params){
      this.set("firebase", new Firebase(config.firebase));
      var self = this;
      this.get('firebase').createUser({
        email    : params.email,
        password : params.password
      }, function(error, userData) {
        if (error) {
          console.log("Error creating user:", error);
        } else {
          console.log("Successfully created user account with uid:", userData.uid);
          self.get('firebase').child("users").child(userData.uid).set({
            firstName: params.firstName,
            lastName: params.lastName,
            email: params.email,
            uid: userData.uid,
            location: params.location
          });
          // automatically sign in user
          signIn(self, params);
        }
      });
    },

    signIn: function(params){
      this.set("firebase", new Firebase(config.firebase));
      signIn(this, params);
    }
  }
});
