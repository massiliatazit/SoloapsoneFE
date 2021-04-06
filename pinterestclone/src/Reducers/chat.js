export default function (state = {}, action) {
    switch (action.type) {
      case "GET_TO_ROOM":
        return {
          ...state,
          ...action.payload,
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
  