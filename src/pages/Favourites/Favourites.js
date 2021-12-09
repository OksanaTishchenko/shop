import { Link } from "react-router-dom"

import { useDispatch, useSelector } from "react-redux";

import FavouritesList from "../../components/FavouritesList/FavouritesList.js";
import EmptyList from "../../components/EmptyList/EmptyList.js";

import { routes } from "../../config.js";

import { deleteFavourite } from "../../store/actions/index.js";

import "./Favourites.css";

const Favourites = () => {

  const favouritesList = useSelector(state => state.goods.favourites);
  const dispatch = useDispatch();

  const deleteFavouriteItem = (favId) => {
    dispatch(deleteFavourite(favId));
  }

  return (
    <div>
      <h2 className="page__title">Favourites</h2>
      {favouritesList.length
        ? <FavouritesList favouritesList={favouritesList} deleteFavouriteItem={deleteFavouriteItem} />
        : <>
          <EmptyList text={"Избранных нет"} />
          <Link to={routes.home}><button className="btn-order">Перейти на главную</button></Link>
        </>
      }
    </div>
  );
}

export default Favourites;