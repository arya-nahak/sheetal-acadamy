const initialState = 0;

export default (state = initialState, { type, payload }) => {
  
  switch (type) {
    case "first":
      return state + 1;

    case "second":
      return state - 1;

    case "third":
      return state * 2 ;

    case "fourth":
      return state / 2;

    default:
      return state;
  }
};
