import { FaHeart, FaShoppingCart } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <ul className="header__menu menu">
        <li className="menu__item"><a href="/" className="menu__link"><FaHeart /></a></li>
        <li className="menu__item"><a href="/" className="menu__link"><FaShoppingCart /></a></li>
      </ul>
    </header>
  );
}

export default Header;