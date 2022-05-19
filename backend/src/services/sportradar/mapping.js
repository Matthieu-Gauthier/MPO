module.exports = (app) => {
  const api = app.get('api');

  return {
    getFight: (id) => ({
      route: `/${api.locale}/seasons/${id}/summaries.${api.format}`,
      result: 'summaries',
    }),
    getSeasons: {
      route: `/${api.locale}/seasons.${api.format}`,
      result: 'seasons'
    },
    getCompetitorInfo: (id) => ({
      route: `/${api.locale}/competitors/${id}/profile.${api.format}`,
      result: null,
    }),
    getCompetitorStatistics: (id) => ({
      route: `/${api.locale}/competitors/${id}/summaries.${api.format}`,
      result: 'summaries',
    }),
  };
};
