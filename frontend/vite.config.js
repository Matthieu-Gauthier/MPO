import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vuetify from '@vuetify/vite-plugin';

const path = require('path');

export default defineConfig({
   plugins: [
      vue(),
      vuetify({
         styles: 'expose',
         autoImport: true,
      }),
   ],
   define: { 'process.env': {} },
   resolve: {
      alias: {
      // eslint-disable-next-line no-undef
         '@': path.resolve(__dirname, 'src'),
      },
   }
});
