import Vue from "vue";
import Vuex from "vuex";
import state from "./state";
import getters from "./getters";
import actions from "./actions";
import mutation from "./mutation";

Vue.use(Vuex);

export default new Vuex.Store({
  state: state,
  mutations: mutation,
  actions: actions,
  getters: getters,
});
