const initialState = {
  items: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "prod":
      return { ...state, items: payload };

    default:
      return state;
  }
};
