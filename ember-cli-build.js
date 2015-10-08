/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });

  app.import('bower_components/bootstrap/dist/js/bootstrap.js');
  app.import('bower_components/moment/moment.js'),
  app.import('bower_components/fullcalendar/dist/fullcalendar.min.css');
  app.import('bower_components/fullcalendar/dist/fullcalendar.min.js');
  app.import('bower_components/jt.timepicker/jquery.timepicker.js');
  app.import('bower_components/jt.timepicker/jquery.timepicker.css');


  return app.toTree();
};
