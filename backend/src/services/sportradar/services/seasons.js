const mapping = require('./mapping');
const { callAxios, findOrCreate } = require('../../../utils');

const getFutureEvents = async (app) => {
	const map = mapping(app);
	const seasons = await callAxios(app, map.getSeasons);
	const seasonsFilter = seasons.filter(s => s.year >= new Date().getFullYear().toString());
	return await Promise.all(
		seasonsFilter.map(async (season) => {
			return findOrCreate(app.service('events'), season);
		})
	);
};

module.exports = {
	getFutureEvents,
};
