module.exports = (app) => {
   const api = app.get('api');
   const ufc = app.get('ufc');

   return {
      getFightSummaries: (id) => ({
         route: `/${ api.locale }/seasons/${ id }/summaries.${ api.format }`,
         result: 'summaries',
      }),
      getSeasons: {
         route: `/${ api.locale }/seasons.${ api.format }`,
         result: 'seasons'
      },
      getCompetitorInfo: (id) => ({
         route: `/${ api.locale }/competitors/${ id }/profile.${ api.format }`,
         result: null,
      }),
      getCompetitorSummaries: (id) => ({
         route: `/${ api.locale }/competitors/${ id }/summaries.${ api.format }`,
         result: 'summaries',
      }),
      getPicturesUfc: (name) => ({
         route: `${ ufc }/${ name }`
      }),
   };
};
