import { defineStore, BaseModel } from '@/store/store.pinia';
import { api } from '@/feathers-client';

class Fight extends BaseModel {
   constructor(data, options = {}) {
      super(data, options);
   }

   static instanceDefaults() {
      return {
         id: null,
         sport_event_status: null,
         venueId: null,
         home_competitor_id: null,
         away_competitor_id: null,
         start_time: null,
         start_time_confirmed: null,
         stageType: '',
         event_id: null,
      };
   }
}
const servicePath = 'fights';
export const useFights = defineStore({
   id: 'fights',
   servicePath,
   Model: Fight,
});

api.service(servicePath).hooks({});
