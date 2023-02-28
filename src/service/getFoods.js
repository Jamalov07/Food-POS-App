import axios from "./axios";
const state = {
  foods: [],
};

const mutations = {
  async getFoods(state) {
    const response = await axios.get("filter.php?c=beef");
    const foods = await response.data;
    state.foods = foods.meals;
  },
};

export default {
  state,
  mutations,
};
