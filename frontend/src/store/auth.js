import { defineAuthStore } from 'feathers-pinia';
import { createApp } from 'vue';
import App from '../App.vue';
import { pinia } from '@/store/store.pinia';
import { useStorage } from '@vueuse/core';

import { api } from '@/feathers-client';
import { useUsers } from '@/services/users';

const app = createApp(App);
app.use(pinia);

const User = useUsers();

export const useAuth = defineAuthStore({
   feathersClient: api,
   state: () => ({
      user: null,
      accessToken: useStorage('feathers-jwt', null, localStorage)
   }),
   actions: {
      async authenticate(authData) {
         try {
            const response = await api.authenticate(authData);
            return this.handleResponse(response) || response;
         } catch (error) {
            this.error = error;
            return this.handleError(error);
         }
      },

      handleResponse(response) {
         const id = response.user.id || response.user._id;
         if (response.accessToken) {
            this.accessToken = response.accessToken;
            useStorage('feathers-jwt', response.accessToken, localStorage);
            this.isAuthenticated = true;
         }
         if (response.authentication) this.payload = response.authentication.payload;
         User.addToStore(response.user);
         if (id) {
            this.user = User.getFromStore(id);
         }
         return response;
      },

      async reAuthenticate() {
         try {
            if (this.accessToken) {
               const response = await api.reAuthenticate(true);
               return this.handleResponse(response) || response;
            }
         } catch (error) {
            this.error = error;
            return this.handleError(error);
         }
      },
      async logout() {
         try {
            const response = await api.logout();
            this.accessToken = null;
            this.user = null;
            this.payload = null;
            this.isAuthenticated = false;
            return response;
         } catch (error) {
            this.error = error;
            return this.handleError(error);
         }
      }
   },
});
