import Ember from 'ember';

export default Ember.Component.extend({
  actions: {}
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
        var eventData = {};
        $('#newEvent').modal();
        $('#event-startingDate').text(start.format('MMMM Do YYYY'));
        $('#event-endingDate').text(end.format('MMMM Do YYYY'));
        $('#event-startingTime').timepicker();
        $('#event-endingTime').timepicker();
        $('#newEvent-submit').on('click', function(){
          var startingTime = $('#event-startingTime').val()
          var endingTime = $('#event-endingTime').val();
          eventData = {
            title: $('#event-userName').text(),
            start: moment(start.format('YYYY-MM-DD-') + startingTime, 'YYYY-MM-DD-h:mm:ssa'),
						end: moment(end.format('YYYY-MM-DD-') + endingTime, 'YYYY-MM-DD-h:mm:ssa')
          }
          debugger;
          $('#calendar').fullCalendar('renderEvent', eventData, true); // stick? = true
  				$('#calendar').fullCalendar('unselect');
          // CREATE A NEW BOOKING EVENT IN THE DATABASE!
        });
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
					start: '2015-02-13',
					end: '2015-02-20',
					rendering: 'background',
          color: '#257e4a',
				},

				// red areas where no events can be dropped
				{
					start: '2015-02-24',
					end: '2015-02-28',
					overlap: false,
					rendering: 'background',
					color: '#ff9f89'
				}
			]
		});
}); // After render
