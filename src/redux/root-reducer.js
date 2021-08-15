import { combineReducers } from "redux";

import userReducer from "./reducers/user.reducers";
import buyNoteReducer from "./reducers/buy-note.reducers";

export default combineReducers({
  user: userReducer,
  buyNotes: buyNoteReducer,
});
