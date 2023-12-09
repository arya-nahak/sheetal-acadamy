const initialState = 0;

export default (state = initialState, { type, payload }) => {
  
  switch (type) {
    case "in":
      return state + 1;

    case "dc":
      return state - 1;

    default:
      return state;
  }
};
