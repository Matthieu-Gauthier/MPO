import { defineStore, BaseModel } from '../store/store.pinia';
import { api } from '@/feathers-client';

class Event extends BaseModel {
   constructor(data, options = {}) {
      super(data, options);
   }

   static instanceDefaults(data, store) {
      return {
         text: '',
         name: '',
      };
   }
}
const servicePath = 'events';
export const useEvents = defineStore({
   servicePath,
   Model: Event,
});

api.service(servicePath).hooks({});
