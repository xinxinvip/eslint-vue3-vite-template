import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import directive from './directive'
const app = createApp(App)
directive(app)

app
  .use(router)
  .mount('#app')
