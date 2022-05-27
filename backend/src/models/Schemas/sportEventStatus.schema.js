module.exports = function (Schema) {
	return new Schema({
		status: { type: String },
		weight_class: { type: String },
		title_fight: { type: Boolean },
		match_status: { type: String },
		winner_id: { type: String, index: true },
		final_round: { type: Number },
		final_round_length: { type: String },
		method: { type: String },
		winner: { type: String },
		scheduled_length: { type: Number },
	});
};
