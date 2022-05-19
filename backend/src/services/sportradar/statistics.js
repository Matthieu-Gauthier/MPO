const mapping = require("./mapping");

const { callAxios, findAndUpdateOrCreate } = require("../../utils");
const {fightConstructor} = require("./fights");

const roundConstructor = (data, qualifier) =>{
  return data.statistics.periods.map((d) => {
    const round = d.competitors.find((v) => v.qualifier === qualifier);
    return {
      ...round.statistics,
      type: 'round',
      number: d.number
    }
  });
};

const getCompetitorStatistics = async (app, competitorId) => {
  const map = mapping(app);
  const sportEvents = await callAxios(app, map.getCompetitorStatistics(competitorId));
  const competitorIds = [];
  return await Promise.all(
    sportEvents.map(async (d) => {
      await findAndUpdateOrCreate(app.service('events'), d.sport_event.sport_event_context.season);
      const fight = await fightConstructor(app, d);
      competitorIds.push(fight.home_competitor_id, fight.away_competitor_id);
      const awayTotalStats = d.statistics.totals.competitors.find((v) => v.qualifier === 'away');
      const homeTotalStats = d.statistics.totals.competitors.find((v) => v.qualifier === 'home');
      const awayRoundsStats = roundConstructor(d, 'away');
      const homeRoundsStats = roundConstructor(d, 'home');
      const homeStatistics = {
        id: fight.id + fight.home_competitor_id,
        fight_id: fight.id,
        competitor_id: fight.home_competitor_id,
        global: { type: 'global', ...homeTotalStats },
        rounds: homeRoundsStats
      };
      const awayStatistics = {
        id: fight.id + fight.away_competitor_id,
        fight_id: fight.id,
        competitor_id: fight.away_competitor_id,
        global: { type: 'global', ...awayTotalStats },
        rounds: awayRoundsStats
      }
      const home = await findAndUpdateOrCreate(app.service('statistics'), homeStatistics);
      const away = await findAndUpdateOrCreate(app.service('statistics'), awayStatistics);
      return [home, away]
    }))
};

module.exports = {
  getCompetitorStatistics,
};
