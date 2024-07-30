import './assets/main.css'

// bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

// router
import router from './router.js'

// store
import store from './store.js'

// axios
import axios from 'axios';
axios.defaults.baseURL = import.meta.env.VITE_API_URL
axios.interceptors.request.use(function (config) {
  config.headers['X-Binarybox-Api-Key'] = import.meta.env.VITE_API_KEY;
  return config;
});

import { createApp } from 'vue'
import App from './App.vue'

createApp(App)
  .use(router)
  .use(store)
  .mount('#app')
