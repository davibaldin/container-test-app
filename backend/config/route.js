module.exports = app => {

  /*
    Controllers
  */
  const systemEnvironments = require('../api/systemEnvironment')();

  //Routes
  app.route('/api/v1/system-environment').get(systemEnvironments.getSystemEnvironment);
}