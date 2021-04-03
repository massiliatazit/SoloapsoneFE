export default (state = [], { type, payload }) => {
    switch (type) {
      case "SET_NOTIFICATION":
        return { ...state, ...payload };
  
      default:
        return state;
    }
  };
  