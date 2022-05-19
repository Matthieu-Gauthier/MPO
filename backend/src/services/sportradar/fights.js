const mapping = require("./mapping");
const { callAxios, findOrCreate, findAndUpdateOrCreate } = require("../../utils");
const {getCompetitorsResumes} = require("./competitors");

const query = {
  query: {
    $sort: { start_date : 1 },
    $limit : 1,
    start_date: {
      $gt: new Date()
    }
  },
};

const fightConstructor = async (app, data) => {
  const venue = await findOrCreate(app.service('venues'), data.sport_event.venue)
  const home_competitor = await findOrCreate(app.service('competitors'), data.sport_event.competitors.find((v) => v.qualifier === 'home'))
  const away_competitor = await findOrCreate(app.service('competitors'), data.sport_event.competitors.find((v) => v.qualifier === 'away'))
  console.log('away', away_competitor)
  return {
    id: data.sport_event.id,
    sport_event_status: data.sport_event_status,
    venueId: venue.id,
    home_competitor_id: home_competitor.id,
    away_competitor_id: away_competitor.id,
    stageType: data.sport_event.sport_event_context.stage.type,
    start_time: data.sport_event.start_time,
    start_time_confirmed: data.sport_event.start_time_confirmed,
  }
};

const getNextFight = async (app) => {
  const map = mapping(app);
  const event = (await app.service('events').find(query)).data[0];
  if (event) {
    const competitorIds = [];
    const summaries = await callAxios(app, map.getFight(event.id))
    const fights = await Promise.all(
      summaries.map(async (summary) => {
        const fight = await fightConstructor(app, summary);
        competitorIds.push(fight.home_competitor_id, fight.away_competitor_id);
        return await findAndUpdateOrCreate(app.service('fights'), fight);
      }));

    // --- Update statistics competitors ---
    await getCompetitorsResumes(app, competitorIds);
    return fights;
  }
  return event;
};

module.exports = {
  getNextFight,
  fightConstructor,
};
