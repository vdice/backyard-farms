import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('user', {path: '/user/:user_id'});
  this.route('new-property', {path: '/property/new'});
  this.route('property', {path: '/property/:property_id'});
  this.route('location', {path: '/location/:location_id'});
  this.route('about', {});
  this.route('edit-property', {path: '/property/:property_id/edit'});
});

export default Router;
