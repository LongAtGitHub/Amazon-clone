import ItemsAdded from "./ListReducer";
import CartItemsAdded from "./CartReducer";
import OrderAdded from "./OrderReducer";
import { combineReducers } from "redux";
import authReducer from "./AuthReducer";

const rootReducer = combineReducers({
  ItemsAdded,
  CartItemsAdded,
  OrderAdded,
  auth: authReducer,
});

export default rootReducer;
