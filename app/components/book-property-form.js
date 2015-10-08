import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    bookProperty(property){
      var params = {
        startingDate: this.get('event-startingDate'),
        startingTime: this.get('event-startingTime'),
        endingDate: this.get('event-endingDate'),
        endingTime: this.get('event-endingTime'),
      }
      debugger
      this.sendAction('bookProperty', params, property)
    }
  }
});

Ember.run.schedule("afterRender", this, function(){
  $('#event-startingTime').timepicker();
  $('#event-endingTime').timepicker();
});
