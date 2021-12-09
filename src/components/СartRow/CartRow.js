import { FaTrashAlt } from "react-icons/fa";

const CartRow = ({ item, index, deleteCartItem }) => {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{item.title}</td>
      <td>{item.price}$</td>
      <td>
        <button className="btn-actions">-</button>
        <span>{item.count}</span>
        <button className="btn-actions">+</button>
      </td>
      <td>
        <FaTrashAlt className="cart-delete" onClick={() => deleteCartItem(item.id)} />
      </td>
    </tr>
  );
}

export default CartRow;