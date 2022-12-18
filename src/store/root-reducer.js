import { combinedReducers } from "redux";

import { userReducer } from "./user/user.reducer";
export const rootReducer = combinedReducers({
  user: userReducer,
});
