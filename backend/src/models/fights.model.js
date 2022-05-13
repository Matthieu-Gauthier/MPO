// fights-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = 'fights';
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const SportEventStatusSchemas = require('./Schemas/sportEventStatus.schema')(Schema);

  const schema = new Schema({
    _id: { type: String, unique: true, required: true, index: true },
    sport_event_status: { type: SportEventStatusSchemas },
    venueId: { type: Schema.Types.String, ref: 'venues' },
    home_competitor_id: { type: Schema.Types.String, ref: 'competitors' },
    away_competitor_id: { type: Schema.Types.String, ref: 'competitors' },
    start_time: { type: Date },
    start_time_confirmed: { type: Date },
    stageType: { type: String }, //Main Card || Prelims || Early Prelims
    statisticId: { type: Schema.Types.String, ref: 'statistics' },
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
