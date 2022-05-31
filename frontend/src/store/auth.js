import { defineAuthStore } from 'feathers-pinia';

import { api } from '@/feathers-client';
import { useUsers } from '@/services/users';

const User = useUsers();

export const useAuth = defineAuthStore({
   feathersClient: api,
   state: () => ({
      userId: null
   }),
   actions: {
      handleResponse(response) {
         this.userId = response.user.id || response.user._id;
         User.addToStore(response.user);
         return response;
      },
   },
});
