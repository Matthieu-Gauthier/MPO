import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { pinia } from './store/store.pinia'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

loadFonts()

createApp(App)
  .use(router)
  .use(pinia)
  .use(vuetify)
  .mount('#app')
