const initialState = {
  data: [],
  loading: false,
  error: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "GET_USER_LIST_STARTED":
      return { ...state, loading: true };

    case "GET_USER_LIST_SUCCESS":
      const { data } = payload;
      return { ...state, data, loading: false };

    case "GET_USER_LIST_FAILURE":
      const { error } = payload;
      return { ...state, error, loading: false };

    default:
      return state;
  }
};
