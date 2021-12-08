import { FaTrashAlt } from "react-icons/fa";
import "./Cart.css";

const Cart = ({ cart, deleteCartItem }) => {
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
                    <tr key={item.id}>
                      <td>{index + 1}</td>
                      <td>{item.title}</td>
                      <td>{item.price}$</td>
                      <td>
                        <button>-</button>
                        <span>{item.count}</span>
                        <button>+</button>
                      </td>
                      <td>
                        <FaTrashAlt className="cart-delete" onClick={() => deleteCartItem(item.id)} />
                      </td>
                    </tr>
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
            <h3 className="cart-empty">Корзина пуста</h3>
            <button className="btn-order">Перейти на главную</button>
          </>
      }


    </div>
  );
}

export default Cart;