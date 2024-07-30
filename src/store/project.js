import axios from "axios";
const state = {
  projects: [],
  project: {},
};

const getters = {
  getProjects: (state) => state.projects,
  getProject: (state) => state.project,
};

const actions = {
  async fetchProjects({ commit }) {
    try {
      const data = await axios.get('/api/projects');

      commit("SET_PROJECTS", data.data);
    } catch (error) {
      alert(error);
      console.log(error);
    }
  },
  async addProject({ commit }, param) {
    try {
      await axios.post('/api/projects', param.project)

      commit("DELETE_PROJECT", param.id);
    } catch (error) {
      alert(error);
      console.log(error);
    }
  },
  async fetchProject({ commit }, param) {
    try {
      const data = await axios.get(`/api/projects/${param.id}`);

      commit("SET_PROJECT", data.data);
    } catch (error) {
      alert(error);
      console.log(error);
    }
  },
  async editProject({ commit }, param) {
    try {
      await axios.patch(`/api/projects/${param.project.id}`, param.project);

      commit("SET_PROJECT", param.project);
    } catch (error) {
      alert(error);
      console.log(error);
    }
  },
  async deleteProject({ commit }, param) {
    try {
      await axios.delete(`/api/projects/${param.id}`);

      commit("DELETE_PROJECT", param.id);
    } catch (error) {
      alert(error);
      console.log(error);
    }
  },
};
const mutations = {
  SET_PROJECT(state, project) {
    state.project = project;
  },
  SET_PROJECTS(state, projects) {
    state.projects = projects;
  },
  DELETE_PROJECT(state, id) {
    const projectIndex = state.projects.findIndex(p => p.id === id)

    state.projects.splice(projectIndex, 1);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};