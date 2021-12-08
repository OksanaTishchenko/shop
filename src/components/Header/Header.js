import { NavLink } from "react-router-dom";



import { FaHeart, FaShoppingCart, FaHome } from "react-icons/fa";
import "./Header.css";

const Header = ({ homeLink, favouritesLink, cartLink }) => {
  return (
    <header className="header">
      <ul className="header__menu menu">
        <li className="menu__item">
          <NavLink to={homeLink} end className={({ isActive }) => "menu__link" + (isActive ? " active" : "")}><FaHome /></NavLink>
        </li>
        <li className="menu__item">
          <NavLink to={favouritesLink} className={({ isActive }) => "menu__link" + (isActive ? " active" : "")}><FaHeart /></NavLink>
        </li>
        <li className="menu__item">
          <NavLink to={cartLink} className={({ isActive }) => "menu__link" + (isActive ? " active" : "")}><FaShoppingCart /></NavLink>
        </li>

      </ul>
    </header>
  );
}

export default Header;