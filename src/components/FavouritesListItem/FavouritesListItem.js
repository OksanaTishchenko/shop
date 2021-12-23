import { useSelector, useDispatch } from "react-redux";

import { incrementCount } from "../../store/actions";

import { FaTrashAlt, FaCartArrowDown } from "react-icons/fa";

const FavouritesListItem = ({ favourite, index, removeFavouritesHandler, addCartHandler }) => {

  const dispatch = useDispatch();

  const cartGood = useSelector(state => state.goods.cart);
  const cartIds = cartGood.map(item => item.id)

  return (
    <li className="favourite">
      <p className="favourite__index">{index + 1}</p>
      <p className="favourite__title">{favourite.title}</p>
      <div className="favourite__actions">
        {!cartIds.includes(favourite.id) && <FaCartArrowDown className="favourite__icon-cart" onClick={() => addCartHandler(favourite)} />}
        {cartIds.includes(favourite.id) && <FaCartArrowDown className="favourite__icon-in-cart" onClick={() => dispatch(incrementCount(favourite))} />}
        <FaTrashAlt className="favourite__icon-delete" onClick={() => removeFavouritesHandler(favourite)} />
      </div>
    </li>
  );
}

export default FavouritesListItem;