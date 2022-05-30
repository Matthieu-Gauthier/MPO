import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vuetify from '@vuetify/vite-plugin';
import { vueI18n } from '@intlify/vite-plugin-vue-i18n';

const path = require('path');

export default defineConfig({
   plugins: [
      vue(),
      vuetify({
         styles: 'expose',
         autoImport: true,
      }),
      vueI18n({
         // eslint-disable-next-line no-undef
         include: path.resolve(__dirname, 'locales/**')
      })
   ],
   define: { 'process.env': {} },
   resolve: {
      alias: {
      // eslint-disable-next-line no-undef
         '@': path.resolve(__dirname, 'src'),
      },
   }
});
