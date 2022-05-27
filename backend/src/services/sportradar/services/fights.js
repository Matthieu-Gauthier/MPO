const mapping = require('./mapping');
const { callAxios, findOrCreate, findAndUpdateOrCreate, sleep } = require('../../../utils');

const query = {
	query: {
		$sort: { start_date: 1 },
		$limit: 1,
		start_date: {
			$gt: new Date()
		}
	},
};

const fightConstructor = async (app, data) => {
	const venue = await findOrCreate(app.service('venues'), data.sport_event.venue);
	const home_competitor = await findOrCreate(app.service('competitors'), data.sport_event.competitors.find((v) => v.qualifier === 'home'));
	const away_competitor = await findOrCreate(app.service('competitors'), data.sport_event.competitors.find((v) => v.qualifier === 'away'));
	const fightData = {
		id: data.sport_event.id,
		sport_event_status: data.sport_event_status,
		event_id: data.sport_event.sport_event_context.season.id,
		venueId: venue.id,
		home_competitor_id: home_competitor.id,
		away_competitor_id: away_competitor.id,
		stageType: data.sport_event.sport_event_context.stage?.type || 'unknown',
		start_time: data.sport_event.start_time,
		start_time_confirmed: data.sport_event.start_time_confirmed,
	};
	return await findAndUpdateOrCreate(app.service('fights'), fightData);
};

const getNextFight = async (app) => {
	const event = (await app.service('events').find(query)).data[0];
	if (event) {
		return await getFightSummaries(app, event.id);
	}
};

const getFightSummaries = async (app, id) => {
	const map = mapping(app);
	await sleep(2000);
	const summaries = await callAxios(app, map.getFightSummaries(id));
	return await Promise.all(
		summaries.map(async (summary) => {
			return await fightConstructor(app, summary);
		})
	);
};

module.exports = {
	getNextFight,
	fightConstructor,
	getFightSummaries,
};
