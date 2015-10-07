import DS from 'ember-data';

export default DS.Model.extend({
  location: DS.belongsTo('location', {async: true}),
  lat: DS.attr('number'),
  lng: DS.attr('number'),
  type: DS.attr(),
  user: DS.belongsTo('user', {async:true}),
  dates: DS.attr(),
  features: DS.attr(),
  images: DS.attr(),
  description: DS.attr()
});
