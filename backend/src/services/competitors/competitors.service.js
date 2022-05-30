// Initializes the `competitors` service on path `/competitors`
const { Competitors } = require('./competitors.class');
const createModel = require('../../models/competitors.model');
const hooks = require('./competitors.hooks');

module.exports = function (app) {
   const options = {
      Model: createModel(app),
      paginate: app.get('paginate'),
      id: 'id'
   };

   // Initialize our service with any options it requires
   app.use('/competitors', new Competitors(options, app));

   // Get our initialized service so that we can register hooks
   const service = app.service('competitors');

   service.hooks(hooks);
};
