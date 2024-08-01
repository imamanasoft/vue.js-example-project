import { createStore } from "vuex";

import counter from "@/store/counter.js";
import project from "@/store/project.js";
import user from "@/store/user.js";

export default createStore({
  modules: {
    counter,
    project,
    user,
  },
});
