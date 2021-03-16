export default function (state = {}, action) {
    switch (action.type) {
      case "SET_USER":
        return {
          ...state,
          ...action.payload,
        };
        case "LOAD_MORE_USERS ":
            return{
                ...state,
                ...action.payload,
            }
      default:
        return state;
    }
  }
  