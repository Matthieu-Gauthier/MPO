const { findAndUpdateOrCreate } = require('../../../utils');

const { fightConstructor } = require('./fights');

const roundConstructor = (data, qualifier) => {
	const rounds = [];
	if (!!data?.statistics?.periods) {
		data?.statistics?.periods.map((d) => {
			const round = d?.competitors?.find((v) => v.qualifier === qualifier);
			if (round) {
				rounds.push({
					...round?.statistics,
					type: 'round',
					number: d.number
				});
			}
		});
	}
	return rounds;
};

const statisticsConstructor = async (app, sportEvent) => {
	await findAndUpdateOrCreate(app.service('events'), sportEvent.sport_event.sport_event_context.season);
	const fight = await fightConstructor(app, sportEvent);
	let awayTotalStats, homeTotalStats;
	const stats = sportEvent.statistics;

	if (!!stats?.totals?.competitors) {
		awayTotalStats = stats.totals.competitors.find((v) => v.qualifier === 'away')?.statistics;
		homeTotalStats = stats.totals.competitors.find((v) => v.qualifier === 'home')?.statistics;
	}

	const awayRoundsStats = roundConstructor(sportEvent, 'away');
	const homeRoundsStats = roundConstructor(sportEvent, 'home');
	const homeStatistics = {
		id: fight.id + fight.home_competitor_id,
		fight_id: fight.id,
		competitor_id: fight.home_competitor_id,
		global: { type: 'global', ...homeTotalStats || null },
		rounds: homeRoundsStats || null
	};
	const awayStatistics = {
		id: fight.id + fight.away_competitor_id,
		fight_id: fight.id,
		competitor_id: fight.away_competitor_id,
		global: { type: 'global', ...awayTotalStats || null },
		rounds: awayRoundsStats || null
	};
	const home = await findAndUpdateOrCreate(app.service('statistics'), homeStatistics);
	const away = await findAndUpdateOrCreate(app.service('statistics'), awayStatistics);
	return home, away;
};

module.exports = {
	statisticsConstructor,
};
