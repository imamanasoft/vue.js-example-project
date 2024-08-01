// src/store/index.js    ##ChatGPT##
import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    token: localStorage.getItem("token") || "",
    user: null,
    isAuthenticated: !!localStorage.getItem("token"),
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
      state.isAuthenticated = true;
    },
    setUser(state, user) {
      state.user = user;
    },
    clearAuthData(state) {
      state.token = "";
      state.user = null;
      state.isAuthenticated = false;
    },
  },
  actions: {
    async login({ commit }, credentials) {
      const response = await axios.post("/auth/login", credentials);
      const token = response.data.token;
      localStorage.setItem("token", token);
      commit("setToken", token);
    },
    async register({ commit }, credentials) {
      const response = await axios.post("/auth/register", credentials);
      const token = response.data.token;
      localStorage.setItem("token", token);
      commit("setToken", token);
    },
    async fetchUser({ commit }) {
      const response = await axios.get("/users/profile");
      commit("setUser", response.data);
    },
    logout({ commit }) {
      localStorage.removeItem("token");
      commit("clearAuthData");
    },
  },
});
