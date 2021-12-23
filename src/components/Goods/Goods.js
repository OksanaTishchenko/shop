import { useSelector, useDispatch } from "react-redux";

import Loader from "../Loader/Loader";
import { incrementCount } from "../../store/actions";

import { FaHeart, FaCartArrowDown, FaRegHeart } from "react-icons/fa";

import "./Goods.css";

const Goods = ({ isloading, addFavouritesHandler, removeFavouritesHandler, addCartHandler }) => {

  const dispatch = useDispatch();

  const goods = useSelector(state => state.goods.list);

  const favourites = useSelector(state => state.goods.favourites);
  const cart = useSelector(state => state.goods.cart);
  const favIds = favourites.map(item => item.id);
  const cartIds = cart.map(item => item.id);

  return (
    <div>
      <h2 className="page__title">Товары</h2>

      {isloading && <Loader />}
      {!isloading &&
        <div className="goods">
          {goods && goods.map(item => (
            <div className="good" key={item.id}>
              <div className="good__img">
                <img src={item.img} alt="car" />
              </div>
              <div className="good__info">
                <p className="good__title">{item.title}</p>
                <p className="good__price">{item.price} $</p>
              </div>
              <div className="good__icons">
                {favIds.includes(item.id) &&
                  < FaHeart
                    className="good__icon-heart_bg good__icon-heart"
                    onClick={() => removeFavouritesHandler(item)}
                  />
                }

                {!favIds.includes(item.id) &&
                  <FaRegHeart
                    className="good__icon-heart"
                    onClick={() => addFavouritesHandler(item)}
                  />
                }


                {cartIds.includes(item.id) &&
                  <FaCartArrowDown
                    className="good__icon-in-cart"
                    onClick={() => dispatch(incrementCount(item))}
                  />}


                {!cartIds.includes(item.id) &&
                  <FaCartArrowDown
                    className="good__icon-cart"
                    onClick={() => addCartHandler(item)}
                  />
                }

              </div>
            </div>
          ))}
        </div>}

    </div>
  );
}

export default Goods;