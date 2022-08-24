import { createApp } from 'vue';
import App from './App.vue';
import router from './router'
import { createPinia } from 'pinia'
import vuetify from './plugins/vuetify';
import mitt from 'mitt';
import { loadFonts } from './plugins/webfontloader';

const emitter = mitt();

loadFonts()

const app = createApp(App);
const pinia = createPinia();
app.provide('emitter', emitter);

app
  .use(router)
  .use(pinia)
  .use(vuetify)
  .mount('#app')
