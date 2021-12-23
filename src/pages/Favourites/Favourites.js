import { Link } from "react-router-dom"

import { useSelector } from "react-redux";

import FavouritesList from "../../components/FavouritesList/FavouritesList.js";
import EmptyList from "../../components/EmptyList/EmptyList.js";

import { routes } from "../../config.js";

import "./Favourites.css";

const Favourites = ({ removeFavouritesHandler, addCartHandler }) => {

  const favouritesList = useSelector(state => state.goods.favourites);

  return (
    <div>
      <h2 className="page__title">Favourites</h2>
      {favouritesList.length > 0 &&
        <FavouritesList
          removeFavouritesHandler={removeFavouritesHandler}
          addCartHandler={addCartHandler}
        />}
      {!favouritesList.length > 0 &&
        <>
          <EmptyList text={"Избранных нет"} />
          <Link to={routes.home}><button className="btn-order">Перейти на главную</button></Link>
        </>}
    </div>
  );
}

export default Favourites;