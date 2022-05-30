// competitors-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
   const modelName = 'competitors';
   const mongooseClient = app.get('mongooseClient');
   const { Schema } = mongooseClient;
   const RecordSchemas = require('./Schemas/record.schema')(Schema);

   const schema = new Schema({
      id: { type: String, unique: true, required: true, index: true },
      name: { type: String },
      nickname: { type: String },
      abbreviation: { type: String },
      birth_city: { type: String },
      birth_state: { type: String },
      birth_country: { type: String },
      birth_country_code: { type: String },
      birth_date: { type: String },
      fighting_out_of_city: { type: String },
      fighting_out_of_country: { type: String },
      fighting_out_of_country_code: { type: String },
      fighting_out_of_state: { type: String },
      reach: { type: Number },
      height: { type: Number },
      weight: { type: Number },
      record: { type: RecordSchemas },
      avatar: { type: String },
      banner: { type: String },
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
