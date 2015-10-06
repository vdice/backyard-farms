import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('user', {path: '/user/:user_id'});
  this.route('location', {path: 'location/:location_id'});
});

export default Router;
