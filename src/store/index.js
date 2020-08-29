import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import notification from "./modules/notification";
import loader from "./modules/loader";

const store = () => {
  return new Vuex.Store({
    modules: {
      notification,
      loader,
    },
  });
};

export default store;
