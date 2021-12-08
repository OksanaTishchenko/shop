import { Link } from "react-router-dom"

import { FaTrashAlt, FaCartArrowDown } from "react-icons/fa";
import "./Favourites.css";

const Favourites = ({ favouritesList, deleteFavouriteItem, homeLink }) => {
  return (
    <div>
      <h2 className="page__title">Favourites</h2>
      {favouritesList.length
        ? <ul className="favourites">
          {favouritesList.map((favourite, index) => (
            favourite.isFavourite &&
            <li className="favourite" key={favourite.id}>
              <p className="favourite__index">{index + 1}</p>
              <p className="favourite__title">{favourite.title}</p>
              <div className="favourite__actions">
                <FaCartArrowDown className="favourite__icon-cart" />
                <FaTrashAlt className="favourite__icon-delete" onClick={() => deleteFavouriteItem(favourite.id)} />
              </div>
            </li>
          ))}
        </ul>
        : <>
          <h3 className="cart-empty">Избразных нет</h3>
          <Link to={homeLink}><button className="btn-order">Перейти на главную</button></Link>
        </>
      }
    </div>
  );
}

export default Favourites;