import { useEffect, useCallback } from "react";

import { useDispatch } from "react-redux";

import { setGoods } from "./store/action";

import Goods from "./components/Goods/Goods";
import Header from "./components/Header/Header";

import data from "./data/goods.json";

import './App.css';

function App() {

  const dispatch = useDispatch();

  const setGoodsToStore = useCallback(() => {
    setTimeout(() => {
      dispatch(setGoods(data));
    }, 2000)
  }, [dispatch]);

  useEffect(() => {
    setGoodsToStore();
  }, [setGoodsToStore]);

  return (
    <div className="wrapper">
      <Header />
      <div className="container">
        <Goods />
      </div>
    </div>
  );
}

export default App;
