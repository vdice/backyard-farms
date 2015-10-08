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
			defaultDate: '2015-02-12',
			editable: false,
      selectable: true,
			selectHelper: true,
			select: function(start, end) {
        var eventData = {};
        $('#newEvent').modal();
        $('#newEvent-submit').on('click', function(){
          eventData = {
            title: $('#event-userName').val(),
            start: start,
						end: end
          }
          // CREATE A NEW BOOKING EVENT IN THE DATABASE!
        });
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

				// areas where "Meeting" must be dropped
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
