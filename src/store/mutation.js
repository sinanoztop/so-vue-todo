const ADD_ITEM = (state, item) => {
  state.items.push(item);
};
const DELETE_ITEM = (state, item) => {
  let _result = state.items.filter(e => {
    return e.id != item.id;
  });
  state.items = _result;
};
const UPDATE_ITEM = (state, item) => {
  let _result = state.items.map(e => {
    return e.id == item.id ? { ...e, category: item.category } : e;
  });
  state.items = _result;
};
export default {
  ADD_ITEM,
  DELETE_ITEM,
  UPDATE_ITEM
};
