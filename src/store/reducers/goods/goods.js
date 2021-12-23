import {
  ADD_GOODS,
  ADD_TO_FAVOURITES,
  DELETE_FAVOURITE,
  ADD_TO_CART,
  DELETE_CART,
  INCREMENT_COUNT,
  DECREMENT_COUNT
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

    case ADD_TO_FAVOURITES:
      return {
        ...state,
        favourites: [...state.favourites, action.payload]
      }

    case DELETE_FAVOURITE:
      return {
        ...state,
        favourites: action.payload
      }

    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload]
      }

    case DELETE_CART:
      return {
        ...state,
        cart: action.payload
      }

    case INCREMENT_COUNT:
      const elem = state.cart.find(item => item.id === action.payload.id);
      elem.count = elem.count + 1;
      const priceGood = state.list.find(item => item.id === action.payload.id);
      elem.price = +priceGood.price * elem.count;

      return {
        ...state,
        cart: [...state.cart]
      }

    case DECREMENT_COUNT:
      const elemDec = state.cart.find(item => item.id === action.payload.id);
      elemDec.count = elemDec.count - 1;
      const priceGoodDec = state.list.find(item => item.id === action.payload.id);
      elemDec.price = elemDec.price - +priceGoodDec.price;

      return {
        ...state,
        cart: [...state.cart]
      }

    default:
      return state
  }
}