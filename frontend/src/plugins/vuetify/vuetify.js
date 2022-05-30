// Styles
import '@mdi/font/css/materialdesignicons.css';
// eslint-disable-next-line import/no-unresolved
import 'vuetify/styles';
import '../../styles/vuetify/variables.scss';
import { createVuetify } from 'vuetify';

// eslint-disable-next-line import/no-unresolved
import customTheme from '@/styles/vuetify/theme';

// Vuetify

export default createVuetify({
   theme: {
      defaultTheme: 'customTheme',
      themes: {
         customTheme
      }
   }
});
// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
