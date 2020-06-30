const ADD_ITEM = ({ commit }, payload) => {
  commit("ADD_ITEM", payload);
};

const DELETE_ITEM = ({ commit }, payload) => {
  commit("DELETE_ITEM", payload);
};

export default {
  ADD_ITEM,
  DELETE_ITEM
};
