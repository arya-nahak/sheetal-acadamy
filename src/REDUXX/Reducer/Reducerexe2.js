const initialState = {
  data: ["hello", "arya", "nahak"],
  index: 0,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "prev":
      if (state.index > 0) {
        return { data: state.data, index: state.index - 1 };
      } else {
        return { data: state.data, index: 0 };
      }

    case "next":
      if (state.index < state.data.length - 1) {
        return { data: state.data, index: state.index + 1 };
      } else {
        return { data: state.data, index: state.data.length - 1 };
      }

    default:
      return state;
  }
};
