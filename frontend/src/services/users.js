import { defineStore, BaseModel } from '@/store/store.pinia';

import { api } from '@/feathers-client';

class User extends BaseModel {
   constructor(data, options = {}) {
      super(data, options);
   }

   static instanceDefaults() {
      return {
         email: '',
      };
   }
}
const servicePath = 'users';
export const useUsers = defineStore({
   id: 'users',
   servicePath,
   Model: User,
});

api.service(servicePath).hooks({});

