import {combineReducers} from "redux";
import {reducer as products} from "./products/products";
import NameSpace from "./name-space.js";

export default combineReducers({
  [NameSpace.PRODUCTS]: products,
});
