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
  list: [],
  favourites: [],
  cart: [],
}

export function goodsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_GOODS:
      return {
        ...state,
        goods: action.payload,
        list: action.payload
      }

    case CHANGE_FAVOURITE:
      const idx = state.list.findIndex(favourite => favourite.id === action.payload)
      state.list[idx].isFavourite = !state.list[idx].isFavourite
      return {
        ...state,
        list: [...state.list]
      }

    case ADD_TO_FAVOURITES:
      return {
        ...state,
        favourites: action.payload
      }

    case CHANGE_CART:
      const idxCart = state.list.findIndex(good => good.id === action.payload.id)
      state.list[idxCart].isCart = !state.list[idxCart].isCart
      return {
        ...state,
        list: [...state.list]
      }

    case DELETE_FAVOURITE:
      const index = state.list.findIndex(item => item.id === action.payload)
      state.list[index].isFavourite = !state.list[index].isFavourite
      return {
        ...state,
        favourites: state.favourites.filter(elem => elem.id !== action.payload),
        list: [...state.list]
      }

    case ADD_TO_CART:
      return {
        ...state,
        cart: action.payload
      }

    case DELETE_CART:
      const indexCart = state.list.findIndex(item => item.id === action.payload);
      state.list[indexCart].isCart = !state.list[indexCart].isCart;
      return {
        ...state,
        list: [...state.list]
      }

    default:
      return state
  }
}