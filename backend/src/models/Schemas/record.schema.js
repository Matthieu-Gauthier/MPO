module.exports = function (Schema) {
   return new Schema({
      wins: { type: Number },
      draws: { type: Number },
      losses: { type: Number },
   });
};
//TODO Verifier si il existe des noContest
