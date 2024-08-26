/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

import i18n from './i18n'

const app = i18n(createApp(App))

registerPlugins(app)

app.mount('#app')
