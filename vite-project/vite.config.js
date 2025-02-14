import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'


export default {
  define: {
    'process.env.NODE_ENV': '"production"',
  },
  plugins: [
    vue(),
   
    {
      name: 'vue:devtools',
      configureServer(server) {
        if (process.env.NODE_ENV === 'production') {
          window.__VUE_DEVTOOLS_GLOBAL_HOOK__ = undefined; 
        }
      },
    },
  ],
};
