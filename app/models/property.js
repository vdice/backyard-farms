import DS from 'ember-data';

export default DS.Model.extend({
  location: DS.belongsTo('location', {async: true}),
  lat: DS.attr('number') || null,
  lng: DS.attr('number') || null,
  type: DS.attr() || null,
  user: DS.belongsTo('user', {async:true}),
  dates: DS.attr() || null,
  features: DS.attr() || null,
  images: DS.attr() || null,
  description: DS.attr() || null,
  reservations: DS.attr() || null
});
