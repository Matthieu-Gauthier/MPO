const mongoose = require('mongoose');
const logger = require('./logger');

module.exports = function (app) {
  const server = app.get('mongodb');

  mongoose.connect(server)
    .then(() => logger.info(`Connexion successful | server: ${server}`))
    .catch(err => {
      logger.error(`Connexion error | server: ${server}`);
      logger.error(`Error; ${err}`);
      process.exit(1);
  });

  app.set('mongooseClient', mongoose);
};
