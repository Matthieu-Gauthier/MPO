module.exports = function (Schema) {
   return new Schema({
      type: { type: String }, // global || round
      number: { type: Number },
      control: { type: String },
      knockdowns: { type: Number },
      significant_strikes: { type: Number },
      significant_strike_percentage: { type: Number },
      significant_strikes_attempted: { type: Number },
      submission_attempts: { type: Number },
      takedown_percentage: { type: Number },
      takedowns: { type: Number },
      takedowns_attempted: { type: Number },
      total_strike_percentage: { type: Number },
      total_strikes: { type: Number },
      total_strikes_attempted: { type: Number },
   });
};
