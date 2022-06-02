import { defineStore, BaseModel } from '@/store/store.pinia';
import { api } from '@/feathers-client';

class Statistic extends BaseModel {
   constructor(data, options = {}) {
      super(data, options);
   }

   static instanceDefaults() {
      return {
         id: null,
         fight_id: null,
         competitor_id: null,
         global: null,
         rounds: [],
      };
   }
}
const servicePath = 'statistics';
export const useStatistics = defineStore({
   id: 'statistics',
   servicePath,
   Model: Statistic,
});

api.service(servicePath).hooks({});
