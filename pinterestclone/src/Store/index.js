import { createStore, combineReducers, compose, applyMiddleware } from "redux";
//Reducers
import searchReducer from "../Reducers/search";
import user from "../Reducers/user";
import errorsReducer from "../Reducers/errors";
import thunk from "redux-thunk";
import status from "../Reducers/loading";
import boardReducer from "../Reducers/boardReducer";
import PinsReducer from "../Reducers/pin_reducers";
import chat from "../Reducers/chat";
const composedEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
  user: {saved:[],following:[],followers:[]},
  chat:{chatHistory:[]},
  status: {
    notifications: {},loading: true,
  },
  errors: {
    status: "",
    show: false,
  },
};

const rootReducer = combineReducers({
  user: user,
  errors: errorsReducer,
  search: searchReducer,
  status: status,
  boards: boardReducer,
  pinsReducers:  PinsReducer,
  chat:chat

});
export default function configureStore() {
  return createStore(rootReducer, initialState, composedEnhancer(applyMiddleware(thunk)));
}
