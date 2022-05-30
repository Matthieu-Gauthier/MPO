// events-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
   const modelName = 'events';
   const mongooseClient = app.get('mongooseClient');
   const { Schema } = mongooseClient;
   const schema = new Schema({
      id: { type: String, unique: true, required: true, index: true },
      name: { type: String },
      start_date: { type: Date },
      end_date: { type: Date },
      year: { type: Number },
      competition_id: { type: String, required: true, index: true }, //TODO - Verifier si le champs est utile
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
