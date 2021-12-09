import { NavLink } from "react-router-dom";

import { routes } from "../../config.js";

import { FaHeart, FaShoppingCart, FaHome } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <ul className="header__menu menu">
        <li className="menu__item">
          <NavLink to={routes.home} end className={({ isActive }) => `menu__link ${isActive ? 'active' : ''}`}><FaHome /></NavLink>
        </li>
        <li className="menu__item">
          <NavLink to={routes.favourites} className={({ isActive }) => `menu__link ${isActive ? 'active' : ''}`}><FaHeart /></NavLink>
        </li>
        <li className="menu__item">
          <NavLink to={routes.cart} className={({ isActive }) => `menu__link ${isActive ? 'active' : ''}`}><FaShoppingCart /></NavLink>
        </li>

      </ul>
    </header>
  );
}

export default Header;