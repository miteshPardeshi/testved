/**
 * Main application routes
 */

'use strict';

var path = require('path');
var helper = require('./api/helper/helper.controller');


module.exports = function(app) {

  // Insert routes below
  app.use('/*',helper.removeHeaders());
  app.use('/', require('./api/home'));
  app.use('/home', require('./api/home'));
  app.use('/map/doctors', require('./api/doctor'));
  app.use('/map/hospitals', require('./api/hospital'));
  app.use('/hospital-overview', require('./api/hospital'));
  app.use('/doctor-overview', require('./api/doctor'));
  app.use('/disease-description', require('./api/disease'));
  app.use('/blog', require('./api/blogs'));
  app.use('/clinical-trials', require('./api/clinicalTrials'));

};
