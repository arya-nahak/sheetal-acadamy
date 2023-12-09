const initialState = {
  loading: false,
  error: {},
  data: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "GET_USERS_REQUESTED":
      return { ...state, loading: true };

    case "GET_USERS_SUCCESS":
      return { ...state,data:payload ,loading: false };

    case "GET_USERS_FAILED":
      return { ...state, error:payload,loading: false };

    default:
      return state;
  }
};
