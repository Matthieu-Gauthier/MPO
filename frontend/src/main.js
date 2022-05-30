import { createApp } from 'vue';

import { i18n } from './plugins/i18n';
import App from './App.vue';
import router from './router';
import { pinia } from './store/store.pinia';
import vuetify from './plugins/vuetify/vuetify';
import { loadFonts } from './plugins/vuetify/webfontloader';

loadFonts();

createApp(App)
   .use(router)
   .use(pinia)
   .use(vuetify)
   .use(i18n)
   .mount('#app');
