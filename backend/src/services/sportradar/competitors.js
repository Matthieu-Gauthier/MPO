const mapping = require("./mapping");

const { callAxios, findAndUpdateOrCreate} = require("../../utils");

const getCompetitorsResumes = async (app, competitorIds) => {
  const map = mapping(app);
  return await Promise.all(
      competitorIds.map(async (id, index) => {
        setTimeout(async () => {
          const data = await callAxios(app, map.getCompetitorInfo(id));
          const competitor = {
            id: data.competitor.id,
            name: data.competitor.name,
            abbreviation: data.competitor.abbreviation,
            birth_city: data.info.birth_city,
            birth_state: data.info.birth_state,
            birth_country: data.info.birth_country,
            birth_country_code: data.info.birth_country_code,
            birth_date: data.info.birth_date,
            fighting_out_of_city: data.info.fighting_out_of_city,
            fighting_out_of_country: data.info.fighting_out_of_country,
            fighting_out_of_country_code: data.info.fighting_out_of_country_code,
            fighting_out_of_state: data.info.fighting_out_of_state,
            reach: data.info.reach,
            height: data.info.height,
            weight: data.info.weight,
            record: data['record'],
          }
          return await findAndUpdateOrCreate(app.service('competitors'), competitor);
        }, 2000 * index)
      }))
};

module.exports = {
  getCompetitorsResumes,
};
