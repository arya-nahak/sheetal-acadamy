const initialState = {
    isLoading:false,
    error:{},
    data:false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    
    case "POSTREQUEST":
      return {...state,isLoading:true}
    
    case "SUCCESS":
      return { ...state,data:payload,isLoading:false};

    case "FAILURE":
      return { ...state, error:payload,isLoading:false};

    default:
      return state;
  }
};
