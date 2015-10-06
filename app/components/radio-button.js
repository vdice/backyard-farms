import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'input',
  type: 'radio',
  attributeBindings: [ 'name', 'type', 'value' ],

  checked: function () {
    if (this.get('value') === this.get('groupValue')) {
      Ember.run.once(this, 'takeAction');
      return true;
    } else { return false; }
  },

  takeAction: function() {
    var key = this.get('name');
    var value = this.get('value')
    this.sendAction('collectParams', key, value);
  },

  change: function () {
    this.set('groupValue', this.get('value'));
    Ember.run.once(this, 'checked'); //manual observer
  }
});
