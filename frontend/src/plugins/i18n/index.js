import { createI18n } from 'vue-i18n';

import en from '../../../locales/en';
import fr from '../../../locales/fr';

export const i18n = createI18n({
   legacy: false,
   locale: 'en',
   messages: {
      fr,
      en
   },
   globalInjection: true,
});

