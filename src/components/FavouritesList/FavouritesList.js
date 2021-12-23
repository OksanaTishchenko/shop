import { useSelector } from "react-redux";

import FavouritesListItem from "../FavouritesListItem/FavouritesListItem";

const FavouritesList = ({ removeFavouritesHandler, addCartHandler }) => {

  const favouriteGood = useSelector(state => state.goods.favourites);

  return (
    <ul className="favourites">
      {favouriteGood.map((favourite, index) => (
        <FavouritesListItem
          favourite={favourite}
          index={index}
          key={favourite.id}
          removeFavouritesHandler={removeFavouritesHandler}
          addCartHandler={addCartHandler}
        />
      ))}
    </ul>
  );
}

export default FavouritesList;