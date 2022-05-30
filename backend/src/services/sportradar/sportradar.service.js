// Initializes the `sportradar` service on path `/sportradar`
const { Sportradar } = require('./sportradar.class');
const hooks = require('./sportradar.hooks');

module.exports = function (app) {
   const options = {
      paginate: app.get('paginate')
   };

   // Initialize our service with any options it requires
   app.use('/sportradar', new Sportradar(options, app));

   // Get our initialized service so that we can register hooks
   const service = app.service('sportradar');

   service.hooks(hooks);
};
