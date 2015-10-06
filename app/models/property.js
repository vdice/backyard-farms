import DS from 'ember-data';

export default DS.Model.extend({
  location: DS.attr(),
  type: DS.attr(),
  user: DS.belongsTo('user', {async:true}),
  dates: DS.attr(),
  features: DS.attr(),
  images: DS.attr(),
});
