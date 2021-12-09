import { FaTrashAlt, FaCartArrowDown } from "react-icons/fa";

const FavouritesListItem = ({ favourite, index, deleteFavouriteItem }) => {
  return (
    <li className="favourite">
      <p className="favourite__index">{index + 1}</p>
      <p className="favourite__title">{favourite.title}</p>
      <div className="favourite__actions">
        <FaCartArrowDown className="favourite__icon-cart" />
        <FaTrashAlt className="favourite__icon-delete" onClick={() => deleteFavouriteItem(favourite.id)} />
      </div>
    </li>
  );
}

export default FavouritesListItem;