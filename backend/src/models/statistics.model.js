// statistics-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
   const modelName = 'statistics';
   const mongooseClient = app.get('mongooseClient');
   const { Schema } = mongooseClient;
   const StatisticSchemas = require('./Schemas/statistic.schema')(Schema);
   const schema = new Schema({
      id: { type: String, unique: true, required: true, index: true },
      fight_id: { type: Schema.Types.String, ref: 'fights' },
      competitor_id: { type: Schema.Types.String, ref: 'competitors' },
      global: { type: StatisticSchemas },
      rounds: [{ type: StatisticSchemas }],
   }, {
      timestamps: true
   });

   // This is necessary to avoid model compilation errors in watch mode
   // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
   if (mongooseClient.modelNames().includes(modelName)) {
      mongooseClient.deleteModel(modelName);
   }
   return mongooseClient.model(modelName, schema);

};
