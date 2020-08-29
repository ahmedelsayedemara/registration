import { actionsTypes, gettersTypes, mutationsTypes } from "./types";

const initialState = () => {
  return {
    notification: {
      isVisible: false,
      message: "",
      type: "",
    },
  };
};

const getters = {
  [gettersTypes.notification]: (state) => state.notification,
};

const actions = {
  [actionsTypes.showNotification]({ commit }, payload) {
    commit(mutationsTypes.SHOW_NOTIFICATION, payload);
  },
  [actionsTypes.hideNotification]({ commit }, payload) {
    commit(mutationsTypes.HIDE_NOTIFICATION, payload);
  },
};

const mutations = {
  [mutationsTypes.SHOW_NOTIFICATION]: (state, notification) =>
    (state.notification = { ...notification, isVisible: true }),
  [mutationsTypes.HIDE_NOTIFICATION]: (state) =>
    (state.notification = { isVisible: false, error: "", message: "" }),
};

export default {
  namespaced: true,
  state: initialState,
  getters,
  actions,
  mutations,
};
