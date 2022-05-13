const { callApi, nextNearestDate } = require('../call/utils');

const getNextFight = async (context) => {
  const seasons = (await callApi(context, '/en/seasons.json')).seasons;
  const nextEvent =  nextNearestDate(seasons, 'start_date', 'YYYY-MM-DD');
  if (nextEvent) {
    const season = (await callApi(context, '/en/seasons.json/', { _id: nextEvent.id })).summaries;
    //context.app.service('events').find(nextEvent);
  }
};

module.exports = {
  getNextFight,
};
