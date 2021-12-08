import { useState, useEffect, useCallback } from "react";
import { Routes, Route } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import Header from "./components/Header/Header";
import Goods from "./components/Goods/Goods";
import Cart from "./pages/Cart/Cart"
import Favourites from "./pages/Favourites/Favourites";

import data from "./data/goods.json";
import { addToFavourites, changeFavourite, setGoods, deleteFavourite, changeCart, addToCart, deleteCart } from "./store/actions";

import './App.css';

function App() {

  const homeLink = "/";
  const favouritesLink = "/favourites";
  const cartLink = "/cart";

  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const favouritesList = useSelector(state => state.goods.favourites);
  const goodsClone = useSelector(state => state.goods.goodsClone);
  const cart = useSelector(state => state.goods.cart);

  const setGoodsToStore = useCallback(() => {
    setLoading(true);
    setTimeout(() => {
      dispatch(setGoods(data));
      setLoading(false);
    }, 2000)
  }, [dispatch]);

  const changeFavouritesHandler = (goodId) => {
    dispatch(changeFavourite(goodId));
    filterFavourites();
  }

  const filterFavourites = useCallback(() => {
    dispatch(addToFavourites(goodsClone.filter(good => good.isFavourite === true)))
  }, [goodsClone, dispatch]);

  const filterCats = useCallback(() => {
    const newCart = goodsClone.filter(good => good.isCart).map(item => {
      item.count = 1;
      return item;
    })
    dispatch(addToCart(newCart));
  }, [dispatch, goodsClone]);

  const deleteFavouriteItem = (favId) => {
    dispatch(deleteFavourite(favId));
  }

  const changeCartHandler = (good) => {
    dispatch(changeCart(good));
    filterCats();
  }

  const deleteCartItem = (cartId) => {
    dispatch(deleteCart(cartId));
  }

  useEffect(() => {
    setGoodsToStore();
  }, [setGoodsToStore]);

  useEffect(() => {
    filterFavourites();
    filterCats();
  }, [filterFavourites, filterCats]);

  return (
    <div className="wrapper">
      <Header homeLink={homeLink} favouritesLink={favouritesLink} cartLink={cartLink} />
      <div className="container">
        <Routes>
          <Route exact path={homeLink} element={
            <Goods goods={goodsClone}
              loading={loading}
              changeFavouritesHandler={changeFavouritesHandler}
              changeCartHandler={changeCartHandler}
            />
          } />
          <Route path={favouritesLink} element={
            <Favourites favouritesList={favouritesList}
              deleteFavouriteItem={deleteFavouriteItem}
              homeLink={homeLink}
            />
          } />
          <Route path={cartLink} element={<Cart cart={cart} deleteCartItem={deleteCartItem} />} />
          <Route />
        </Routes>
      </div>
    </div>
  );
}

export default App;
