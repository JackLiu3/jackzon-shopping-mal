import { useSelector, useDispatch } from "react-redux";
import { addQty, reduceQty } from "./cartSlice";

export function Cart() {
  const cartList = useSelector((state) => state.cart.cartList);
  let total = 0;
  return (
    <div>
      <div className="cart">
        <div className="descriptions">
          <div className="desc-goods-name">Description of Goods</div>
          <div className="desc-goods-price">Price</div>
          <div className="desc-goods-qty">Quantity</div>
          <div className="desc-goods-amount">Amount</div>
        </div>
        {cartList.map((item, index) => {
          let amount =
            Math.round(Math.round(item.price * item.qty * 100)) / 100;
          total = total + amount;
          return <CartItem item={item} amount={amount} />;
        })}
      </div>
      <div className="total-line">Total: ${total}</div>
    </div>
  );
}

function CartItem(props) {
  const dispatch = useDispatch();
  const handleAdd = () => {
    dispatch(addQty({ name: props.item.name, qty: 1 }));
  };
  const handleReduce = () => {
    dispatch(reduceQty({ name: props.item.name, qty: 1 }));
  };
  return (
    <div className="cart-list">
      <div className="item-name">{props.item.name}</div>
      <div className="item-price">${props.item.price}</div>
      <div className="item-qty">
        <button onClick={handleReduce}>-</button>
        <div>{props.item.qty}</div>
        <button onClick={handleAdd}>+</button>
      </div>
      <div className="item-amount">${props.amount}</div>
    </div>
  );
}
