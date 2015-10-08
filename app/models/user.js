import DS from 'ember-data';

export default DS.Model.extend({
  firstName: DS.attr(),
  lastName: DS.attr(),
  email: DS.attr(),
  uid: DS.attr(),
  location: DS.attr(),
  avatar: DS.attr(),
  properties: DS.hasMany('property', {async:true}),
  fullName: Ember.computed('firstName', 'lastName', function(){
    var firstName = this.get('firstName');
    var lastName = this.get('lastName');
    return firstName + " " + lastName;
  })
});
