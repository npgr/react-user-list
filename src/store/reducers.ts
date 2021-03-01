import { combineReducers } from "redux";

import users from "./users/users.reducer";
import auth from "./auth/auth.reducer";

export default combineReducers({
  auth,
  users,
});
