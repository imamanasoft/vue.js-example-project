const state = {
  // Your application state goes here
  count: 5,
};

const getters = {
  // Getters are used to retrieve state data with computed properties
  getCount: (state) => state.count,
};

const mutations = {
  // Mutations are responsible for changing the state
  increment(state) {
    state.count++;
  },
  decrement(state) {
    state.count--;
  },
};

const actions = {
  // Actions are used to commit mutations asynchronously
  incrementAsync({ commit }) {
    setTimeout(() => {
      commit('increment');
    }, 1000);
  },
};


export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};