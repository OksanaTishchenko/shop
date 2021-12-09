import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import { routes } from "../../config.js";

import CartRow from "../../components/СartRow/CartRow.js";
import EmptyList from "../../components/EmptyList/EmptyList.js";

import { deleteCart } from "../../store/actions/index.js";

import "./Cart.css";

const Cart = () => {

  const cart = useSelector(state => state.goods.cart);
  const dispatch = useDispatch();

  const deleteCartItem = (cartId) => {
    dispatch(deleteCart(cartId));
  }

  return (
    <div>
      <h2 className="page__title">Cart</h2>
      {
        cart.length
          ? <>
            <table className="cart">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Count</th>
                  <th>Ations</th>
                </tr>
              </thead>
              <tbody>
                {
                  cart.map((item, index) => (
                    <CartRow item={item} index={index} deleteCartItem={deleteCartItem} key={item.id} />
                  ))
                }
                <tr>
                  <td colSpan="5">
                    Total: 10000 $
                  </td>
                </tr>

              </tbody>
            </table>
            <button className="btn-order">Оформить заказ</button>
          </>
          : <>
            <EmptyList text={"Корзина пустая"} />
            <Link to={routes.home}><button className="btn-order">Перейти на главную</button></Link>
          </>
      }


    </div>
  );
}

export default Cart;