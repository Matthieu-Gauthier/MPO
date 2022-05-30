/* eslint-disable no-unused-vars */
const { getNextFight, getFightSummaries } = require('./services/fights');
const { getFutureEvents } = require('./services/seasons');
const { updateCompetitors } = require('./services/competitors');

exports.Sportradar = class Sportradar {
   constructor(options) {
      this.options = options || {};
   }

   setup(app) {
      this.app = app;
   }

   async find() {
      throw Error('Unsupported');
   }


   async get(id, params) {
      const { eventId } = params.query;
      let fights;

      switch (id) {
      case 'seasons': // Get all future events announced by UFC.
         return await getFutureEvents(this.app);

      case 'nextEvent': // Get nextEvent with all competitorSummaries present in event
         fights = await getNextFight(this.app);
         await updateCompetitors(this.app, fights);
         return fights;

      case 'result': // Get nextEvent with all competitorSummaries present in event
         if (eventId) {
            const fights = await getFightSummaries(this.app, eventId);
            await updateCompetitors(this.app, fights);
            return fights;
         }

         return 'Params "eventId" not found';

      default:
         return 'Unsupported sportradar getter';
      }
   }

   async create() {
      throw Error('Unsupported');
   }

   async update() {
      throw Error('Unsupported');
   }

   async patch() {
      throw Error('Unsupported');
   }

   async remove() {
      throw Error('Unsupported');
   }
};
