import { combineReducers } from "redux";

import userRedducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";

export default combineReducers({
    user: userRedducer,
    cart: cartReducer
});