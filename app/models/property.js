import DS from 'ember-data';

export default DS.Model.extend({
  location: DS.belongsTo('location', {async: true}),
  latitude: DS.attr('number'),
  longitude: DS.attr('number'),
  type: DS.attr(),
  user: DS.belongsTo('user', {async:true}),
  dates: DS.attr(),
  features: DS.attr(),
  image: DS.attr(),
});
