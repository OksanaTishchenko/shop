import {
  ADD_GOODS,
  ADD_TO_FAVOURITES,
  DELETE_FAVOURITE,
  ADD_TO_CART,
  DELETE_CART,
  INCREMENT_COUNT,
  DECREMENT_COUNT
} from "../constants";

export const setGoods = (goods) => ({ type: ADD_GOODS, payload: goods });
export const addToFavourites = (goodFavourites) => ({ type: ADD_TO_FAVOURITES, payload: goodFavourites });
export const deleteFavourite = (goods) => ({ type: DELETE_FAVOURITE, payload: goods });
export const addToCart = (goodCart) => ({ type: ADD_TO_CART, payload: goodCart });
export const deleteCart = (goods) => ({ type: DELETE_CART, payload: goods });
export const incrementCount = (good) => ({ type: INCREMENT_COUNT, payload: good });
export const decrementCount = (good) => ({ type: DECREMENT_COUNT, payload: good });
