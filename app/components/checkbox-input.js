import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'input',
  type: 'checkbox',
  classNames: ['features'],

  attributeBindings: [ 'name', 'type', 'value' ],

  checked: function () {
    Ember.run.once(this, 'takeAction');
  },

  takeAction: function() {
    var key = this.get('name');
    var values = $('input.features:checked').map(function(){return $( this ).val()}).toArray();
    this.sendAction('collectParams', key, values);
  },

  change: function () {
    this.set('groupValue', this.get('value'));
    Ember.run.once(this, 'checked'); //manual observer
  }
});
