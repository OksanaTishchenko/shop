import {
  ADD_GOODS,
  ADD_TO_FAVOURITES,
  CHANGE_FAVOURITE,
  CHANGE_CART,
  DELETE_FAVOURITE,
  ADD_TO_CART,
  DELETE_CART
} from "../constants";

export const setGoods = (goods) => ({ type: ADD_GOODS, payload: goods });
export const addToFavourites = (goodFavourites) => ({ type: ADD_TO_FAVOURITES, payload: goodFavourites });
export const changeFavourite = (goodId) => ({ type: CHANGE_FAVOURITE, payload: goodId });
export const changeCart = (goodId) => ({ type: CHANGE_CART, payload: goodId });
export const deleteFavourite = (goodId) => ({ type: DELETE_FAVOURITE, payload: goodId });
export const addToCart = (goodCart) => ({ type: ADD_TO_CART, payload: goodCart });
export const deleteCart = (goodId) => ({ type: DELETE_CART, payload: goodId });
