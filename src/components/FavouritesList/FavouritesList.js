import FavouritesListItem from "../FavouritesListItem/FavouritesListItem";

const FavouritesList = ({ favouritesList, deleteFavouriteItem }) => {
  return (
    <ul className="favourites">
      {favouritesList.map((favourite, index) => (
        favourite.isFavourite &&
        <FavouritesListItem favourite={favourite} index={index} deleteFavouriteItem={deleteFavouriteItem} key={favourite.id} />
      ))}
    </ul>
  );
}

export default FavouritesList;