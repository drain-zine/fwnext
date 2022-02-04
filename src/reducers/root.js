import { combineReducers } from "redux";
import cms from "./CMSReducer";
import nav from "./NavReducer";

const rootReducer = combineReducers({
  cms,
  nav
})

export default rootReducer;