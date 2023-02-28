import { createStore } from "vuex";
import getProducts from "../service/getFoods";
export const store = createStore({
  state() {
    return {};
  },
  mutations: {},
  actions: {},
  getters: {},
  modules: { getProducts },
});
