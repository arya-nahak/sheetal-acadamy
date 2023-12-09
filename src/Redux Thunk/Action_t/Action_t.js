export const userliststart = () => ({
  type: "GET_USER_LIST_STARTED"
});

export const userlistsuccess = (data) => ({
  type: "GET_USER_LIST_SUCCESS",
  payload: {
    data,
  },
});

export const userlistfailure = (error) => ({
  type: "GET_USER_LIST_FAILURE",
  payload: {
    error,
  },
});
