import { createApp } from "vue";
import App from "./App.vue";

// styles
import "./assets/main.css";

// bootstrap
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// router
import router from "./router.js";

// store
import store from "./store.js";

// axios
import axios from "axios";
axios.defaults.baseURL = import.meta.env.VITE_API_URL;
axios.interceptors.request.use(function (config) {
  config.headers["X-Binarybox-Api-Key"] = import.meta.env.VITE_API_KEY;
  return config;
});

// Token interceptor ##ChatGPT##
axios.interceptors.request.use(
  (config) => {
    const token = store.state.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

createApp(App).use(router).use(store).mount("#app");
