import { createStore, combineReducers, compose, applyMiddleware } from "redux";
//Reducers
import searchReducer from "../Reducers/search";
import user from "../Reducers/user";
import errorsReducer from "../Reducers/errors";
import thunk from "redux-thunk";
import loading from "../Reducers/loading";

const composedEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
  user: {},
  status: {
    notifications: {},
  
    loading: true,
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
  loading: loading,
});
export default function configureStore() {
  return createStore(rootReducer, initialState, composedEnhancer(applyMiddleware(thunk)));
}
