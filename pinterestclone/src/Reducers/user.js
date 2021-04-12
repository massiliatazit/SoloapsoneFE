export default function (state = {}, action) {
    switch (action.type) {
      case "SET_USER":
        return {
          ...state,
          ...action.payload,
        };
        case"PINS_SAVED_BY_USER":
        return{
          ...state,
         saved:state.saved.concat(action.payload)
        };
        case"ADD_FOLLOWING":
        return{
          ...state,
         following:state.following.concat(action.payload)
        }
       

        
      default:
        return state;
    }
  }
  