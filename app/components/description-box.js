import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addProperty() {
      var params = {
        description: this.get('description')
      }
      this.sendAction('addProperty', params)
    }
  }
});
