'use strict';

var path = require('path');
var _ = require('lodash');

function requiredProcessEnv(name) {
  if(!process.env[name]) {
    throw new Error('You must set the ' + name + ' environment variable');
  }
  return process.env[name];
}

// All configurations will extend these options
// ============================================
var all = {
  env: process.env.NODE_ENV,

  // Root path of server
  root: path.normalize(__dirname + '/../../..'),

  // Server port
  port: process.env.PORT || 4010,

  // database connection
  database:'mongodb://localhost:27017/xpertdox',

  //Urls
  siteUrl: 'https://test1.xpertdox.com/',
  redirectUrl: 'https://test1.xpertdox.com/',
  ampUrl: 'http://www.xpertdox.com/amp/',
  toRedirectUrl: 'https://test1.xpertdox.com/',
  fda_url:'test1.xpertdox.com',
  //dui's
  lbd_duis : ["D020961", "D010300", "D020187", "C537240", "D003704"],
  aiha_duis : ["D000744", "C536380", "C580192", "D000743", "C538437"],
  //cache time
  cacheTime : 100000,
  // Server IP
  ip: process.env.IP || '0.0.0.0',

  // Should we populate the DB with sample data?
  seedDB: false,

  // Secret for session, you will want to change this and make it an environment variable
  secrets: {
    session: 'xpertdox-secret'
  },

  // List of user roles
  userRoles: ['guest', 'user', 'admin'],

  // MongoDB connection options
  mongo: {
    options: {
      db: {
        safe: true
      }
    }
  },

};

// Export the config object based on the NODE_ENV
// ==============================================
module.exports = _.merge(
  all,
  require('./' + process.env.NODE_ENV + '.js') || {});
