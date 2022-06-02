import { defineStore, BaseModel } from '@/store/store.pinia';
import { api } from '@/feathers-client';

class Competitor extends BaseModel {
   constructor(data, options = {}) {
      super(data, options);
   }

   static instanceDefaults() {
      return {
         id: null,
         name: '',
         nickname: '',
         abbreviation: '',
         birth_city: '',
         birth_state: '',
         birth_country: '',
         birth_country_code: '',
         birth_date: '',
         fighting_out_of_city: '',
         fighting_out_of_country: '',
         fighting_out_of_country_code: '',
         fighting_out_of_state: '',
         reach: NaN,
         height: NaN,
         weight: NaN,
         record: null,
         avatar: '',
         banner: '',
      };
   }
}
const servicePath = 'competitors';
export const useCompetitors = defineStore({
   id: 'competitors',
   servicePath,
   Model: Competitor,
});

api.service(servicePath).hooks({});
