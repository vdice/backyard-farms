import Ember from 'ember';

var startDate;
var endDate;

export default Ember.Component.extend({
  // actions: {
  //   bookProperty(){
  //
  //   },
  //   newEvent(property) {
  //     var startingTime = $('#event-startingTime').val()
  //     var endingTime = $('#event-endingTime').val();
  //     var eventData = {
  //       title: $('#event-userName').val(),
  //       start: moment(startDate.format('YYYY-MM-DD-') + startingTime, 'YYYY-MM-DD-h:mm:ssa'),
  //       end: moment(endDate.format('YYYY-MM-DD-') + endingTime, 'YYYY-MM-DD-h:mm:ssa')
  //     }
  //     $('#calendar').fullCalendar('renderEvent', eventData, true); // stick? = true
  //     $('#calendar').fullCalendar('unselect');
  //     // CREATE A NEW BOOKING EVENT IN THE DATABASE!
  //
  //     this.sendAction('newEvent', {user: eventData.title, start: eventData.start.format(), end: eventData.end.format()}, property);
  //   }
  // }
});

Ember.run.schedule("afterRender", this, function() {
    $('#calendar').fullCalendar({
			header: {
				left: 'prev,next today',
				center: 'title',
				right: 'month,agendaWeek,agendaDay'
			},
			editable: false,
      eventLimit: true,
      theme: false,
      selectable: true,
			selectHelper: true,
			select: function(start, end) {
        $('#event-startingTime').val('')
        $('#event-endingTime').val('')
        var startingTime = $('#event-startingTime').val()
        var endingTime = $('#event-endingTime').val();
        var eventData = {
          title: 'test',
          start: start,
          end: end
        }
        $('#event-startingDate').val(start.format('MMMM Do YYYY'));
        $('#event-endingDate').val(end.format('MMMM Do YYYY'));
        $('#calendar').fullCalendar('renderEvent', eventData, true); // stick? = true
        $('#calendar').fullCalendar('unselect');
			},
			events: [
				{
					title: 'Lunch',
					start: '2015-02-13T11:00:00',
					constraint: 'availableTime', // defined below
					color: '#257e4a'
				},

				// denotes an acceptable booking area (maybe make the table light grey by default and the available booking times white?)
				{
					id: 'availableTime',
					start: '2015-09-13',
					end: '2015-09-20',
					rendering: 'background',
          color: '#257e4a',
				},

				// red areas where no events can be dropped
				{
					start: '2015-09-24',
					end: '2015-09-28',
					overlap: false,
					rendering: 'background',
					color: '#ff9f89'
				}
			]
		});
}); // After render
