/// <reference types="vitest" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from "url";
import AutoImport from 'unplugin-auto-import/vite'

// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
import vuetify from 'vite-plugin-vuetify'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
		vue(),
		vuetify({ autoImport: true }),
		AutoImport({
      dts: 'src/auto-import.d.ts',
      imports: [
        'vue',
				'vitest',
      ],
      exclude: [
        '**/dist/**',
      ],
    }),
	],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@atoms": fileURLToPath(new URL("./src/components/atoms", import.meta.url)),
      "@molecules": fileURLToPath(new URL("./src/components/molecules", import.meta.url)),
    },
  },
  optimizeDeps: {
    include: [
      '@ag-grid-community/vue3/lib/AgGridVue',
    ],
  },
	test: {
    globals: true,
    environment: 'jsdom',
    transformMode: {
      web: [/.[tj]sx$/],
    },
		setupFiles: "vuetify.config.js",
		deps: {
			inline: ["vuetify", "@ag-grid-community/vue3/lib/AgGridVue"],
		},
  },
})
