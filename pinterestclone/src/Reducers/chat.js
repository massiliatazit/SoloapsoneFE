export default function (state = {}, action) {
    switch (action.type) {
      case "SET_ROOM":
        return {
          ...state,
          roomId: action.payload,
        };
        case"ADD_MESSAGE_TO_CHAT":
        return{
          ...state,
          chatHistory: state.chatHistory.concat(action.payload),
        }
       

        
      default:
        return state;
    }
  }
  