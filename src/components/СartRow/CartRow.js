import { useDispatch } from "react-redux";

import { decrementCount, incrementCount } from "../../store/actions";

import { FaTrashAlt } from "react-icons/fa";

const CartRow = ({ item, index, deleteCartItem, dragStartHandler, dragOverHandler, dropHandler }) => {

  const dispatch = useDispatch();

  return (
    <tr draggable={true}
      onDragStart={(e) => dragStartHandler(e, item)}
      onDragOver={(e) => dragOverHandler(e)}
      onDrop={(e) => dropHandler(e, item)}
    >
      <td>{index + 1}</td>
      <td>{item.title}</td>
      <td>{item.price}$</td>
      <td>
        <button className="btn-actions" onClick={() => dispatch(decrementCount(item))} disabled={item.count === 1}>-</button>
        <span>{item.count}</span>
        <button className="btn-actions" onClick={() => dispatch(incrementCount(item))}>+</button>
      </td>
      <td>
        <FaTrashAlt className="cart-delete" onClick={() => deleteCartItem(item)} />
      </td>
    </tr>
  );
}

export default CartRow;