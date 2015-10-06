import DS from 'ember-data';

export default DS.Model.extend({
  location: DS.belongsTo('location', {async: true}),
  type: DS.attr(),
  user: DS.belongsTo('user', {async:true}),
  dates: DS.attr(),
  features: DS.attr(),
  image: DS.attr(),
});
