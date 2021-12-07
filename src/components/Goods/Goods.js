import { FaHeart, FaShoppingCart } from "react-icons/fa";

import "./Goods.css";

const Goods = () => {
  return (
    <div className="goods">
      <div className="good">
        <div className="good__img">
          <img src="https://i.pinimg.com/originals/1d/3b/3e/1d3b3efddab9ade72d43fb9d3a3ca1bb.jpg" alt="Image" />
        </div>
        <div className="good__info">
          <p className="good__title">Audi A4 B8</p>
          <p className="good__price">200$</p>
        </div>

        <div className="good__icons">
          <FaHeart
            className="good__icon-heart"
          />
          <span>Уже в корзине</span>
          {/* <FaShoppingCart
            className="good__icon-cart"
          /> */}
        </div>
      </div>
      <div className="good">
        <div className="good__img">
          <img src="https://i.pinimg.com/originals/1d/3b/3e/1d3b3efddab9ade72d43fb9d3a3ca1bb.jpg" alt="Image" />
        </div>
        <div className="good__info">
          <p className="good__title">Audi A4 B8</p>
          <p className="good__price">200$</p>
        </div>

        <div className="good__icons">
          <FaHeart
            className="good__icon-heart"
          />
          {/* <span>Уже в корзине</span> */}
          <FaShoppingCart
            className="good__icon-cart"
          />
        </div>
      </div>





    </div>
  );
}

export default Goods;