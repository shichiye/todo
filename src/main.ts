import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/index.css'

import * as ELIcons from '@element-plus/icons-vue'

const app = createApp(App)

for (const name in ELIcons) {
  app.component(name, (ELIcons as any)[name])
}

app.mount('#app')
