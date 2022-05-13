// Initializes the `venues` service on path `/venues`
const { Venues } = require('./venues.class');
const createModel = require('../../models/venues.model');
const hooks = require('./venues.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/venues', new Venues(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('venues');

  service.hooks(hooks);
};
