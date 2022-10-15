import { combineReducers } from "redux";
import clientReducer from "./clientReducer";

const rootReducer = combineReducers({
  clientState: clientReducer,
});

export default rootReducer;
