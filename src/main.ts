import { createApp } from 'vue'
import App from './App.vue'
import directive from './directive'
const app = createApp(App)
directive(app)

app.mount('#app')
