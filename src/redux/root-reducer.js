import { combineReducers } from "redux";

import userRedducer from "./user/user.reducer";

export default combineReducers({
    user: userRedducer
});