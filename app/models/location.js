import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  properties: DS.hasMany('property', {async: true}),
  image: DS.attr(),
});
