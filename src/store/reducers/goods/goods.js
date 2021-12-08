import {
  ADD_GOODS,
  ADD_TO_FAVOURITES,
  CHANGE_FAVOURITE,
  CHANGE_CART,
  DELETE_FAVOURITE,
  ADD_TO_CART,
  DELETE_CART
} from "../../constants";

const initialState = {
  goods: [],
  goodsClone: [],
  favourites: [],
  cart: [],
}

export function goodsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_GOODS:
      return {
        ...state,
        goods: action.payload,
        goodsClone: action.payload
      }

    case CHANGE_FAVOURITE:
      const idx = state.goodsClone.findIndex(favourite => favourite.id === action.payload)
      state.goodsClone[idx].isFavourite = !state.goodsClone[idx].isFavourite
      return {
        ...state,
        goodsClone: [...state.goodsClone]
      }

    case ADD_TO_FAVOURITES:
      return {
        ...state,
        favourites: action.payload
      }

    case CHANGE_CART:
      const idxCart = state.goodsClone.findIndex(good => good.id === action.payload.id)
      state.goodsClone[idxCart].isCart = !state.goodsClone[idxCart].isCart
      return {
        ...state,
        goodsClone: [...state.goodsClone]
      }

    case DELETE_FAVOURITE:
      const index = state.goodsClone.findIndex(item => item.id === action.payload)
      state.goodsClone[index].isFavourite = !state.goodsClone[index].isFavourite
      return {
        ...state,
        favourites: state.favourites.filter(elem => elem.id !== action.payload),
        goodsClone: [...state.goodsClone]
      }

    case ADD_TO_CART:
      return {
        ...state,
        cart: action.payload
      }

    case DELETE_CART:
      const indexCart = state.goodsClone.findIndex(item => item.id === action.payload);
      state.goodsClone[indexCart].isCart = !state.goodsClone[indexCart].isCart;
      return {
        ...state,
        goodsClone: [...state.goodsClone]
      }
    default:
      return state
  }
}