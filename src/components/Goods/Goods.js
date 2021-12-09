import { useSelector } from "react-redux";

import Loader from "../Loader/Loader";

import { FaHeart, FaCartArrowDown, FaRegHeart } from "react-icons/fa";

import "./Goods.css";

const Goods = ({ isloading, changeFavouritesHandler, changeCartHandler }) => {

  const goods = useSelector(state => state.goods.list);

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
                {item.isFavourite &&
                  <FaHeart
                    className="good__icon-heart_bg good__icon-heart"
                    onClick={() => changeFavouritesHandler(item.id)}
                  />
                }

                {!item.isFavourite &&
                  <FaRegHeart
                    className="good__icon-heart"
                    onClick={() => changeFavouritesHandler(item.id)}
                  />
                }

                {item.isCart &&
                  <FaCartArrowDown
                    className="good__icon-in-cart"
                    onClick={() => changeCartHandler(item)}
                  />
                }

                {!item.isCart && <FaCartArrowDown
                  className="good__icon-cart"
                  onClick={() => changeCartHandler(item)}
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