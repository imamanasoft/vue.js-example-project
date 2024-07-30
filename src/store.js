import { createStore } from "vuex";

import counter from '@/store/counter.js';
import project from '@/store/project.js';

export default createStore({
  modules: {
    counter,
    project
  },
});
