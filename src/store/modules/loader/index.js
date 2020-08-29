import { actionsTypes, gettersTypes, mutationsTypes } from "./types";

const initialState = () => {
  return {
    isLoading: false,
  };
};

const getters = {
  [gettersTypes.isLoading]: (state) => state.isLoading,
};

const actions = {
  [actionsTypes.showLoader]({ commit }) {
    commit(mutationsTypes.SHOW_LOADER);
  },
  [actionsTypes.hideLoader]({ commit }) {
    commit(mutationsTypes.HIDE_LOADER);
  },
};

const mutations = {
  [mutationsTypes.SHOW_LOADER]: (state) => (state.isLoading = true),
  [mutationsTypes.HIDE_LOADER]: (state) => (state.isLoading = false),
};

export default {
  namespaced: true,
  state: initialState,
  getters,
  actions,
  mutations,
};
