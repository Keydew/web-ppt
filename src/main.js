import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'reveal.js/dist/reset.css'
import 'reveal.js/dist/reveal.css'
import 'reveal.js/dist/theme/league.css'
import 'reveal.js/plugin/highlight/monokai.css'

const app = createApp(App);

app.use(router);
app.mount('#app');
