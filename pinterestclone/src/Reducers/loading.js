export default (state = {}, { type, payload }) => {
    switch (type) {
      case "SET_LOADING":
        return { ...state, loading: payload };
  
      default:
        return state;
    }
  };
  