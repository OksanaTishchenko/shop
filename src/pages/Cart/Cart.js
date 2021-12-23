import { useState } from "react";
import { Link } from "react-router-dom";

import React from "react";

import Pdf from "react-to-pdf";

import { useSelector, useDispatch } from "react-redux";

import { routes } from "../../config.js";

import CartRow from "../../components/СartRow/CartRow.js";
import EmptyList from "../../components/EmptyList/EmptyList.js";

import { deleteCart } from "../../store/actions/index.js";

import "./Cart.css";

const Cart = () => {

  const refPage = React.createRef();

  const cart = useSelector(state => state.goods.cart);
  const dispatch = useDispatch();

  const [currentItem, setcurrentItem] = useState(null);
  const [cartList, setCartList] = useState(cart);
  const [isOrder, setIsOrder] = useState(false);

  const deleteCartItem = (cartGood) => {
    const updatedCart = cart.filter(item => item.id !== cartGood.id);
    dispatch(deleteCart(updatedCart));
    setCartList(updatedCart);
  }

  const dragStartHandler = (e, item) => {
    setcurrentItem(item);
  }

  const dragOverHandler = (e) => {
    e.preventDefault();
  }

  const dropHandler = (e, item) => {
    e.preventDefault();

    setCartList(cartList.map(elem => {
      if (elem.id === item.id) {
        return { ...elem, order: currentItem.order };
      }
      if (elem.id === currentItem.id) {
        return { ...elem, order: item.order };
      }
      return elem;
    }))
  }

  const sortCarts = (a, b) => {
    if (a.order > b.order) {
      return 1;
    } else {
      return -1;
    }
  }

  const convertToPDF = () => {
    setIsOrder(!isOrder);
  }

  return (
    <div ref={refPage}>
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
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {
                  cartList.sort(sortCarts).map((item, index) => (
                    <CartRow
                      item={item}
                      index={index}
                      deleteCartItem={deleteCartItem}
                      key={item.id}
                      dragStartHandler={dragStartHandler}
                      dragOverHandler={dragOverHandler}
                      dropHandler={dropHandler}
                    />
                  ))
                }
                <tr>
                  <td colSpan="5">
                    {cartList.length === 1 && <>Total: {cartList[0].price * cartList[0].count}$ </>}
                    {cartList.length > 1 && <>Total: {cartList.reduce((accum, item) => accum + +item.price, 0)}$ </>}
                  </td>
                </tr>

              </tbody>
            </table>
            {!isOrder && <button className="btn-order" onClick={convertToPDF}>Оформить заказ</button>}
            {isOrder && <Pdf targetRef={refPage} filename="order.pdf">
              {({ toPdf }) => (
                <div>
                  <h3>Thanks, sure</h3>
                  <button className="btn-order" onClick={toPdf}> Скачать PDF-документ</button>
                  <button className="btn-order" onClick={convertToPDF}> Вернуться назад</button>
                </div>
              )}
            </Pdf>}
          </>
          : <>
            <EmptyList text={"Корзина пустая"} />
            <Link to={routes.home}><button className="btn-order">Перейти на главную</button></Link>
          </>
      }


    </div >
  );
}

export default Cart;