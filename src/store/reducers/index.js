import { combineReducers } from "redux";
import { goodsReducer } from "./goods/goods";

export const rootReducer = combineReducers({
  goods: goodsReducer
})