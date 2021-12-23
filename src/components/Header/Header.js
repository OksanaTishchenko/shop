import { NavLink } from "react-router-dom";

import { useSelector } from "react-redux";

import { routes } from "../../config.js";

import { FaHeart, FaShoppingCart, FaHome } from "react-icons/fa";
import "./Header.css";

const Header = () => {

  const favourites = useSelector(state => state.goods.favourites);
  const cart = useSelector(state => state.goods.cart);

  return (
    <header className="header">
      <ul className="header__menu menu">
        <li className="menu__item">
          <NavLink to={routes.home} end className={({ isActive }) => `menu__link ${isActive ? 'active' : ''}`}>
            <FaHome />
          </NavLink>
        </li>
        <li className="menu__item">
          <NavLink to={routes.favourites} className={({ isActive }) => `menu__link ${isActive ? 'active' : ''}`}>
            <FaHeart />
            {favourites.length > 0 && <span className="menu-count">{favourites.length}</span>}
          </NavLink>
        </li>
        <li className="menu__item">
          <NavLink to={routes.cart} className={({ isActive }) => `menu__link ${isActive ? 'active' : ''}`}>
            <FaShoppingCart />
            {cart.length > 0 && <span className="menu-count">{cart.reduce((accum, next) => accum + next.count, 0)}</span>}

          </NavLink>
        </li>

      </ul>
    </header>
  );
}

export default Header;