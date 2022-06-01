import { createApp } from 'vue';

import { i18n } from './plugins/i18n';
import App from './App.vue';
import Particles from 'particles.vue3';
import { loadFonts } from './plugins/vuetify/webfontloader';
import router from './router';
import { pinia } from './store/store.pinia';
import vuetify from './plugins/vuetify/vuetify';
loadFonts();

createApp(App)
   .use(router)
   .use(pinia)
   .use(vuetify)
   .use(i18n)
   .use(Particles)
   .mount('#app');
