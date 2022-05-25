const mapping = require('./mapping');
const request = require('request-promise');
const cheerio = require('cheerio');
const validUrl = require('valid-url');

const { callAxios, findAndUpdateOrCreate, sleep } = require('../../../utils');
const { fightConstructor } = require('./fights');
const { statisticsConstructor } = require('./statistics');

const competitorConstructor = async (app, id) => {
	const map = mapping(app);
	await sleep(2000);
	const data = await callAxios(app, map.getCompetitorInfo(id));
	const competitor = {
		id: data.competitor?.id,
		name: data.competitor?.name,
		abbreviation: data.competitor?.abbreviation,
		birth_city: data.info?.birth_city,
		birth_state: data.info?.birth_state,
		birth_country: data.info?.birth_country,
		birth_country_code: data.info?.birth_country_code,
		birth_date: data.info?.birth_date,
		fighting_out_of_city: data.info?.fighting_out_of_city,
		fighting_out_of_country: data.info?.fighting_out_of_country,
		fighting_out_of_country_code: data.info?.fighting_out_of_country_code,
		fighting_out_of_state: data.info?.fighting_out_of_state,
		reach: data.info?.reach,
		height: data.info?.height,
		weight: data.info?.weight,
		record: data['record'],
	};

	return await findAndUpdateOrCreate(app.service('competitors'), competitor);
};

const getCompetitorPictures = async (app, competitor) => {
	const pictures = await fetchPictures(app, competitor.name);
	return await app.service('competitors').patch(competitor.id, pictures);
};

const fetchPictures = async (app, name) => {
	const map = mapping(app);
	const formatName = name.split(',').map((v) => v.trim().replace(' ', '-')).reverse().join('-');
	const options = {
		url: map.getPicturesUfc(formatName).route,
		method: 'GET',
	};

	if (!validUrl) return Promise.resolve();
	return new Promise(function (resolve) {
		request.get(options, function (err, resp, html) {
			if (err) {
				resolve({ avatar: null, banner: null });
			} else {
				const result = cheerio.load(html);
				resolve({
					avatar: result('.c-bio__image')?.children()?.attr('src'),
					banner: result('.c-bio__image--mobile')?.children()?.attr('src')
				});
			}
		});
	});
};

const getCompetitorSummaries = async (app, competitorId) => {
	const map = mapping(app);

	await sleep(1000);
	const sportEvents = await callAxios(app, map.getCompetitorSummaries(competitorId));

	// Get fights and statistics
	await Promise.all(
		sportEvents.map(async (event) => {
			await fightConstructor(app, event);
			return await statisticsConstructor(app, event);
		})
	);

	// Get resume fighter
	await sleep(1000);
	const competitor = await competitorConstructor(app, competitorId);

	// Get competitor pictures
	if (competitor) {
		await sleep(1000);
		await getCompetitorPictures(app, competitor);
	}

	return competitorId;
};

module.exports = {
	getCompetitorSummaries
};
