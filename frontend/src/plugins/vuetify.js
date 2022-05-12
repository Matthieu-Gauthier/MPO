// Styles
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';
import customTheme from '@/styles/vuetify/theme';

// Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify({
   theme: {
      defaultTheme: 'customTheme',
      themes: {
         customTheme
      }
   }
});
// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
