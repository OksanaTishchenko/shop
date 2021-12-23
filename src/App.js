import { useState, useEffect, useCallback } from "react";
import { Routes, Route } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import Header from "./components/Header/Header";
import Goods from "./components/Goods/Goods";
import Cart from "./pages/Cart/Cart"
import Favourites from "./pages/Favourites/Favourites";

import { routes } from "./config.js";

import data from "./data/goods.json";
import {
  addToFavourites,
  deleteFavourite,
  setGoods,
  addToCart
} from "./store/actions";

import './App.css';

function App() {

  const [isloading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const favouriteGood = useSelector(state => state.goods.favourites);
  const cartGood = useSelector(state => state.goods.cart);

  const setGoodsToStore = useCallback(() => {
    setIsLoading(true);
    setTimeout(() => {
      dispatch(setGoods(data));
      setIsLoading(false);
    }, 2000)
  }, [dispatch]);

  const addFavouritesHandler = (favourite) => {
    const elem = favouriteGood.find(item => item.id === favourite.id);
    if (!elem) dispatch(addToFavourites(favourite));
  }

  const removeFavouritesHandler = (favourite) => {
    const updatedFavourites = favouriteGood.filter(item => item.id !== favourite.id);
    dispatch(deleteFavourite(updatedFavourites));
  }

  const addCartHandler = (goodCart) => {
    const elem = cartGood.find(item => item.id === goodCart.id);
    if (!elem) {
      dispatch(addToCart({ ...goodCart, count: 1, order: goodCart.id }));
    }
  }

  useEffect(() => {
    setGoodsToStore();

  }, [setGoodsToStore]);

  return (
    <div className="wrapper">
      <Header />
      <div className="container">
        <Routes>
          <Route exact path={routes.home} element={
            <Goods
              isloading={isloading}
              addFavouritesHandler={addFavouritesHandler}
              removeFavouritesHandler={removeFavouritesHandler}
              addCartHandler={addCartHandler}
            />
          } />
          <Route path={routes.favourites} element={<Favourites
            removeFavouritesHandler={removeFavouritesHandler}
            addCartHandler={addCartHandler}
          />} />
          <Route path={routes.cart} element={<Cart />} />
          <Route />
        </Routes>
      </div>
    </div>
  );
}

export default App;
