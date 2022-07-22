import { defineStore, BaseModel } from '@/store/store.pinia';
import { api } from '@/feathers-client';

class Event extends BaseModel {
   constructor(data, options = {}) {
      super(data, options);
   }

   static instanceDefaults() {
      return {
         id: null,
         name: '',
         start_date: null,
         end_date: null,
         year: NaN,
         competition_id: null,
      };
   }
}
const servicePath = 'events';
export const useEvents = defineStore({
   id: 'events',
   servicePath,
   Model: Event,
   whitelist: ['$regex']
});

api.service(servicePath).hooks({});
