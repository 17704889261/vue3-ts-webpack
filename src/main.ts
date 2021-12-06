import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'

import router from './router'
import store from './store'

import './plugins/permission'

import installElementPlus from './plugins/element'
import { initThemes } from './plugins/themes'

const app = createApp(App)

app.use(store).use(router)

installElementPlus(app)
initThemes()

app.mount('#app')
