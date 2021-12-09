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
  changeFavourite,
  setGoods,
  changeCart,
  addToCart
} from "./store/actions";

import './App.css';

function App() {

  const [isloading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const list = useSelector(state => state.goods.list);

  const setGoodsToStore = useCallback(() => {
    setIsLoading(true);
    setTimeout(() => {
      dispatch(setGoods(data));
      setIsLoading(false);
    }, 2000)
  }, [dispatch]);

  const changeFavouritesHandler = (goodId) => {
    dispatch(changeFavourite(goodId));
    filterFavourites();
  }

  const filterFavourites = useCallback(() => {
    const allFavourites = list.filter(good => good.isFavourite);
    dispatch(addToFavourites(allFavourites));
  }, [list, dispatch]);

  const filterCarts = useCallback(() => {
    const newCart = list.filter(good => good.isCart).map(item => ({ ...item, count: 1 }));
    dispatch(addToCart(newCart));
  }, [dispatch, list]);

  // const deleteFavouriteItem = (favId) => {
  //   dispatch(deleteFavourite(favId));
  // }

  const changeCartHandler = (good) => {
    dispatch(changeCart(good));
    filterCarts();
  }

  // const deleteCartItem = (cartId) => {
  //   dispatch(deleteCart(cartId));
  // }

  useEffect(() => {
    setGoodsToStore();
  }, [setGoodsToStore]);

  useEffect(() => {
    filterFavourites();
    filterCarts();
  }, [filterFavourites, filterCarts]);

  return (
    <div className="wrapper">
      <Header />
      <div className="container">
        <Routes>
          <Route exact path={routes.home} element={
            <Goods
              isloading={isloading}
              changeFavouritesHandler={changeFavouritesHandler}
              changeCartHandler={changeCartHandler}
            />
          } />
          <Route path={routes.favourites} element={<Favourites />} />
          <Route path={routes.cart} element={<Cart />} />
          <Route />
        </Routes>
      </div>
    </div>
  );
}

export default App;
