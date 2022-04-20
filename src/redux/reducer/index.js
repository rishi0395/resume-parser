import { combineReducers } from "redux";
import stateReducer from "./stateReducer";
import fetchResumesReducer from "./fetchResumesReducer";

export default combineReducers({
  state: stateReducer,
  resumes: fetchResumesReducer,
});
