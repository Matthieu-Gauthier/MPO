// Initializes the `fights` service on path `/fights`
const { Fights } = require('./fights.class');
const createModel = require('../../models/fights.model');
const hooks = require('./fights.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    id: 'id'
  };

  // Initialize our service with any options it requires
  app.use('/fights', new Fights(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('fights');

  service.hooks(hooks);
};
