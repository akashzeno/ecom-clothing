import { combineReducers } from "redux";
import { cartReducer } from "./cart/cart_reducer.js";
import { categoriesReducer } from "./categories/categories_reducer.js";
import { userReducer } from "./user/user_reducer.js";

export const rootReducer = combineReducers({
	user: userReducer,
	categories: categoriesReducer,
	cart: cartReducer,
});
